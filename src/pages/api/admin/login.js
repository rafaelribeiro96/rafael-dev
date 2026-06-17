export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end();
  }

  const { password } = req.body || {};
  const correctPassword = process.env.ADMIN_PASSWORD || 'admin123';

  if (password === correctPassword) {
    // Generate a secure cookie header manually to avoid dependencies
    const isProd = process.env.NODE_ENV === 'production';
    const secure = isProd ? '; Secure' : '';
    res.setHeader(
      'Set-Cookie',
      `admin_session=authenticated; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400${secure}`
    );

    return res.status(200).json({ success: true });
  }

  return res.status(401).json({ error: 'Senha incorreta.' });
}
