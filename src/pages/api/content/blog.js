import fs from 'fs/promises';
import path from 'path';
import { readCollection, writeFile, isGitHubConfigured } from 'src/lib/github';
import { verifySessionFromRequest } from 'src/lib/auth';

const DIR = path.join(process.cwd(), 'content', 'blog');
const RELATIVE_DIR = 'content/blog';

async function readAllPostsLocal() {
  const files = await fs.readdir(DIR);
  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith('.json'))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(DIR, file), 'utf-8');
        return JSON.parse(raw);
      })
  );
  return posts.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
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
        const posts = await readCollection(RELATIVE_DIR);
        const sorted = posts.sort(
          (a, b) => (a.order ?? 999) - (b.order ?? 999)
        );
        return res.status(200).json(sorted);
      } else {
        const posts = await readAllPostsLocal();
        return res.status(200).json(posts);
      }
    }

    if (req.method === 'POST') {
      const post = req.body || {};
      if (
        !post.id ||
        typeof post.id !== 'string' ||
        !/^[a-zA-Z0-9_-]+$/.test(post.id)
      ) {
        return res.status(400).json({ error: 'ID inválido.' });
      }

      if (useGitHub) {
        const relativePath = `${RELATIVE_DIR}/${post.id}.json`;
        await writeFile(
          relativePath,
          post,
          `chore(cms): create blog post ${post.title || post.id}`
        );
        return res.status(201).json({ success: true, post });
      } else {
        const filePath = path.join(DIR, `${post.id}.json`);
        await fs.writeFile(filePath, JSON.stringify(post, null, 2), 'utf-8');
        return res.status(201).json({ success: true, post });
      }
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end();
  } catch (err) {
    console.error('[api/content/blog]', err);
    return res.status(500).json({ error: err.message });
  }
}
