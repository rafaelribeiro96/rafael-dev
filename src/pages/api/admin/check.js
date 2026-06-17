export default async function handler(req, res) {
  const cookies = req.headers.cookie || '';
  const isAuthenticated = cookies.includes('admin_session=authenticated');

  return res.status(200).json({ authenticated: isAuthenticated });
}
