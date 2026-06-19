import fs from 'fs/promises';
import path from 'path';
import { readCollection, writeFile, isGitHubConfigured } from 'src/lib/github';
import { verifySessionFromRequest } from 'src/lib/auth';

const DIR = path.join(process.cwd(), 'content', 'money-pages');
const RELATIVE_DIR = 'content/money-pages';

async function readAllPagesLocal() {
  const files = await fs.readdir(DIR);
  const pages = await Promise.all(
    files
      .filter((f) => f.endsWith('.json'))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(DIR, file), 'utf-8');
        return JSON.parse(raw);
      })
  );
  return pages.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export default async function handler(req, res) {
  const isAuthenticated = verifySessionFromRequest(req);
  if (!isAuthenticated) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const useGitHub = isGitHubConfigured();

  try {
    if (req.method === 'GET') {
      if (useGitHub) {
        const pages = await readCollection(RELATIVE_DIR);
        const sorted = pages.sort(
          (a, b) => (a.order ?? 999) - (b.order ?? 999)
        );
        return res.status(200).json(sorted);
      } else {
        const pages = await readAllPagesLocal();
        return res.status(200).json(pages);
      }
    }

    if (req.method === 'POST') {
      const page = req.body || {};
      if (
        !page.id ||
        typeof page.id !== 'string' ||
        !/^[a-zA-Z0-9_-]+$/.test(page.id)
      ) {
        return res.status(400).json({ error: 'ID inválido.' });
      }

      if (useGitHub) {
        const relativePath = `${RELATIVE_DIR}/${page.id}.json`;
        await writeFile(
          relativePath,
          page,
          `chore(cms): create money page ${page.seo?.title || page.id}`
        );
        return res.status(201).json({ success: true, page });
      } else {
        const filePath = path.join(DIR, `${page.id}.json`);
        await fs.writeFile(filePath, JSON.stringify(page, null, 2), 'utf-8');
        return res.status(201).json({ success: true, page });
      }
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end();
  } catch (err) {
    console.error('[api/content/money-pages]', err);
    return res.status(500).json({ error: err.message });
  }
}
