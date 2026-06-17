import fs from 'fs/promises';
import path from 'path';
import { readCollection, writeFile, isGitHubConfigured } from 'src/lib/github';
import { verifySessionFromRequest } from 'src/lib/auth';

const DIR = path.join(process.cwd(), 'content', 'pricing');
const RELATIVE_DIR = 'content/pricing';

async function readAllTiersLocal() {
  const files = await fs.readdir(DIR);
  const tiers = await Promise.all(
    files
      .filter((f) => f.endsWith('.json'))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(DIR, file), 'utf-8');
        return JSON.parse(raw);
      })
  );
  return tiers.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export default async function handler(req, res) {
  // 1. Enforce Authentication
  const isAuthenticated = verifySessionFromRequest(req);
  if (!isAuthenticated) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const useGitHub = isGitHubConfigured();

  try {
    if (req.method === 'GET') {
      if (useGitHub) {
        const tiers = await readCollection(RELATIVE_DIR);
        const sorted = tiers.sort(
          (a, b) => (a.order ?? 999) - (b.order ?? 999)
        );
        return res.status(200).json(sorted);
      } else {
        const tiers = await readAllTiersLocal();
        return res.status(200).json(tiers);
      }
    }

    if (req.method === 'POST') {
      const tier = req.body || {};
      if (
        !tier.id ||
        typeof tier.id !== 'string' ||
        !/^[a-zA-Z0-9_-]+$/.test(tier.id)
      ) {
        return res.status(400).json({ error: 'ID inválido.' });
      }

      if (useGitHub) {
        const relativePath = `${RELATIVE_DIR}/${tier.id}.json`;
        await writeFile(
          relativePath,
          tier,
          `chore(cms): create pricing tier ${tier.title}`
        );
        return res.status(201).json({ success: true, tier });
      } else {
        const filePath = path.join(DIR, `${tier.id}.json`);
        await fs.writeFile(filePath, JSON.stringify(tier, null, 2), 'utf-8');
        return res.status(201).json({ success: true, tier });
      }
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end();
  } catch (err) {
    console.error('[api/content/pricing]', err);
    return res.status(500).json({ error: err.message });
  }
}
