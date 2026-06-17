import { verifySessionFromRequest } from 'src/lib/auth';

export default async function handler(req, res) {
  const isAuthenticated = verifySessionFromRequest(req);

  return res.status(200).json({ authenticated: isAuthenticated });
}
