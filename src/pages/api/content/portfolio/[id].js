import fs from 'fs/promises';
import path from 'path';
import { writeFile, deleteFile, isGitHubConfigured } from 'src/lib/github';

const DIR = path.join(process.cwd(), 'content', 'portfolio');
const RELATIVE_DIR = 'content/portfolio';

export default async function handler(req, res) {
  const { id } = req.query;

  // 1. Enforce Authentication
  const cookies = req.headers.cookie || '';
  const isAuthenticated = cookies.includes('admin_session=authenticated');
  if (!isAuthenticated) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const useGitHub = isGitHubConfigured();
  const filePathLocal = path.join(DIR, `${id}.json`);
  const relativePathGit = `${RELATIVE_DIR}/${id}.json`;

  try {
    if (req.method === 'PUT') {
      if (useGitHub) {
        await writeFile(
          relativePathGit,
          req.body,
          `chore(cms): update portfolio project ${req.body.title || id}`
        );
        return res.status(200).json({ success: true });
      } else {
        await fs.writeFile(
          filePathLocal,
          JSON.stringify(req.body, null, 2),
          'utf-8'
        );
        return res.status(200).json({ success: true });
      }
    }

    if (req.method === 'DELETE') {
      if (useGitHub) {
        await deleteFile(
          relativePathGit,
          `chore(cms): delete portfolio project ${id}`
        );
        return res.status(200).json({ success: true });
      } else {
        await fs.unlink(filePathLocal);
        return res.status(200).json({ success: true });
      }
    }

    res.setHeader('Allow', ['PUT', 'DELETE']);
    return res.status(405).end();
  } catch (err) {
    console.error(`[api/content/portfolio/${id}]`, err);
    return res.status(500).json({ error: err.message });
  }
}
