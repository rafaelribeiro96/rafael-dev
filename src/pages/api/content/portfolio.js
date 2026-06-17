import fs from 'fs/promises';
import path from 'path';
import {
  readCollection,
  writeFile,
  isGitHubConfigured
} from '../../../../lib/github';

const DIR = path.join(process.cwd(), 'content', 'portfolio');
const RELATIVE_DIR = 'content/portfolio';

async function readAllItemsLocal() {
  const files = await fs.readdir(DIR);
  const items = await Promise.all(
    files
      .filter((f) => f.endsWith('.json'))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(DIR, file), 'utf-8');
        return JSON.parse(raw);
      })
  );
  return items.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

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
        const items = await readCollection(RELATIVE_DIR);
        const sorted = items.sort(
          (a, b) => (a.order ?? 999) - (b.order ?? 999)
        );
        return res.status(200).json(sorted);
      } else {
        const items = await readAllItemsLocal();
        return res.status(200).json(items);
      }
    }

    if (req.method === 'POST') {
      const item = req.body;
      if (!item.id) return res.status(400).json({ error: 'id is required' });

      if (useGitHub) {
        const relativePath = `${RELATIVE_DIR}/${item.id}.json`;
        await writeFile(
          relativePath,
          item,
          `chore(cms): create portfolio project ${item.title}`
        );
        return res.status(201).json({ success: true, item });
      } else {
        const filePath = path.join(DIR, `${item.id}.json`);
        await fs.writeFile(filePath, JSON.stringify(item, null, 2), 'utf-8');
        return res.status(201).json({ success: true, item });
      }
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end();
  } catch (err) {
    console.error('[api/content/portfolio]', err);
    return res.status(500).json({ error: err.message });
  }
}
