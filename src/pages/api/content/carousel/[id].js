import fs from 'fs/promises';
import path from 'path';
import { writeFile, deleteFile, isGitHubConfigured } from 'src/lib/github';
import { verifySessionFromRequest } from 'src/lib/auth';

const DIR = path.join(process.cwd(), 'content', 'carousel-images');
const RELATIVE_DIR = 'content/carousel-images';

export default async function handler(req, res) {
  const { id } = req.query;

  // Validate ID path parameter to prevent path traversal
  if (!id || typeof id !== 'string' || !/^[a-zA-Z0-9_-]+$/.test(id)) {
    return res.status(400).json({ error: 'ID de recurso inválido.' });
  }

  // Enforce Authentication
  const isAuthenticated = verifySessionFromRequest(req);
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
          `chore(cms): update carousel image ${id}`
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
          `chore(cms): delete carousel image ${id}`
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
    console.error(`[api/content/carousel/${id}]`, err);
    return res.status(500).json({ error: err.message });
  }
}
