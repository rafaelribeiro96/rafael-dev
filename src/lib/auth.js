import crypto from 'crypto';

/**
 * Derives a strong, consistent 32-byte secret key based on the ADMIN_PASSWORD environment variable.
 */
function getSessionSecret() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error(
        'ADMIN_PASSWORD environment variable must be set in production!'
      );
    }
    return crypto.createHash('sha256').update('admin123').digest();
  }
  return crypto.createHash('sha256').update(password).digest();
}

/**
 * Creates a session token signed via HMAC SHA-256 containing an expiration timestamp.
 * Expire in 24 hours (86400 seconds).
 */
export function createSessionToken() {
  const expiresAt = Date.now() + 24 * 60 * 60 * 1000;
  const payload = `authenticated:${expiresAt}`;
  const secret = getSessionSecret();

  const signature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  return `${expiresAt}:${signature}`;
}

/**
 * Verifies if a given session token is valid, has not expired, and contains a valid signature.
 */
export function verifySessionToken(token) {
  if (!token || typeof token !== 'string') return false;

  const parts = token.split(':');
  if (parts.length !== 2) return false;

  const [expiresAtStr, signature] = parts;
  const expiresAt = parseInt(expiresAtStr, 10);

  if (isNaN(expiresAt) || Date.now() > expiresAt) {
    return false; // Invalid format or expired
  }

  const payload = `authenticated:${expiresAt}`;
  const secret = getSessionSecret();
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  // Verify signature using timing-safe comparison to prevent timing attacks
  try {
    const bufferSignature = Buffer.from(signature, 'hex');
    const bufferExpected = Buffer.from(expectedSignature, 'hex');

    if (bufferSignature.length !== bufferExpected.length) {
      return false;
    }

    return crypto.timingSafeEqual(bufferSignature, bufferExpected);
  } catch (err) {
    return false;
  }
}

/**
 * Extracts the session token from the Request headers cookies and verifies it.
 */
export function verifySessionFromRequest(req) {
  if (!req) return false;

  const cookieHeader = req.headers.cookie || '';
  const match = cookieHeader.match(/(?:^|;)\s*admin_session=([^;]+)/);
  if (!match) return false;

  try {
    const token = decodeURIComponent(match[1]);
    return verifySessionToken(token);
  } catch (err) {
    return false;
  }
}
