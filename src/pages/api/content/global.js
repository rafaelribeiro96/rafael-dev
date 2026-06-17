import fs from 'fs/promises';
import path from 'path';
import { getFile, writeFile, isGitHubConfigured } from '../../../../lib/github';

const FILE_PATH = path.join(process.cwd(), 'content', 'global', 'site.json');
const RELATIVE_PATH = 'content/global/site.json';

export default async function handler(req, res) {
  // 1. Enforce Authentication
  const cookies = req.headers.cookie || '';
  const isAuthenticated = cookies.includes('admin_session=authenticated');
  if (!isAuthenticated) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const useGitHub = isGitHubConfigured();

  try {
    if (req.method === 'GET') {
      if (useGitHub) {
        const file = await getFile(RELATIVE_PATH);
        return res.status(200).json(file?.content || {});
      } else {
        const raw = await fs.readFile(FILE_PATH, 'utf-8');
        return res.status(200).json(JSON.parse(raw));
      }
    }

    if (req.method === 'PUT') {
      if (useGitHub) {
        await writeFile(
          RELATIVE_PATH,
          req.body,
          'chore(cms): update global settings'
        );
        return res.status(200).json({ success: true });
      } else {
        await fs.writeFile(
          FILE_PATH,
          JSON.stringify(req.body, null, 2),
          'utf-8'
        );
        return res.status(200).json({ success: true });
      }
    }

    res.setHeader('Allow', ['GET', 'PUT']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (err) {
    console.error('[api/content/global]', err);
    return res.status(500).json({ error: err.message });
  }
}
