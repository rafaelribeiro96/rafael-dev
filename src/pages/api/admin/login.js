import { createSessionToken } from 'src/lib/auth';

// In-memory store for tracking failed login attempts per client IP
const loginAttempts = new Map();
const LOCKOUT_TIME = 15 * 60 * 1000; // 15 minutes lockout
const MAX_ATTEMPTS = 5;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end();
  }

  // Retrieve client IP address
  const ip =
    req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const now = Date.now();

  // Clean up lockout entry if expired
  const clientRecord = loginAttempts.get(ip);
  if (clientRecord && now > clientRecord.lockoutUntil) {
    loginAttempts.delete(ip);
  }

  // Check lockout status
  if (
    clientRecord &&
    clientRecord.attempts >= MAX_ATTEMPTS &&
    now < clientRecord.lockoutUntil
  ) {
    const timeLeft = Math.ceil((clientRecord.lockoutUntil - now) / 1000 / 60);
    return res.status(429).json({
      error: `Muitas tentativas falhas de login. Seu IP está bloqueado temporariamente por mais ${timeLeft} minutos.`
    });
  }

  const { password } = req.body || {};
  const correctPassword = process.env.ADMIN_PASSWORD;

  if (!correctPassword) {
    if (process.env.NODE_ENV === 'production') {
      return res.status(500).json({
        error:
          'ADMIN_PASSWORD não configurado no servidor. Acesso bloqueado por segurança.'
      });
    }
  }

  const passwordToCompare = correctPassword || 'admin123';
  if (password === passwordToCompare) {
    // Reset login attempts on success
    loginAttempts.delete(ip);

    // Generate cryptographically signed token
    const token = createSessionToken();
    const isProd = process.env.NODE_ENV === 'production';
    const secure = isProd ? '; Secure' : '';

    res.setHeader(
      'Set-Cookie',
      `admin_session=${encodeURIComponent(
        token
      )}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400${secure}`
    );

    return res.status(200).json({ success: true });
  }

  // Record failed attempt
  const record = loginAttempts.get(ip) || { attempts: 0, lockoutUntil: 0 };
  record.attempts += 1;
  if (record.attempts >= MAX_ATTEMPTS) {
    record.lockoutUntil = now + LOCKOUT_TIME;
  }
  loginAttempts.set(ip, record);

  // Slow down requests to mitigate automated high-speed brute-force scripts
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const remaining = MAX_ATTEMPTS - record.attempts;
  const errorMsg =
    record.attempts >= MAX_ATTEMPTS
      ? 'Senha incorreta. Limite de tentativas excedido. Seu IP foi bloqueado por 15 minutos.'
      : `Senha incorreta. Você tem mais ${remaining} tentativa(s) antes do bloqueio de IP.`;

  return res.status(401).json({ error: errorMsg });
}
