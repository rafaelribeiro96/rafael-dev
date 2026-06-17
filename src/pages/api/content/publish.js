import { exec } from 'child_process';
import { promisify } from 'util';
import { isGitHubConfigured } from 'src/lib/github';
import { verifySessionFromRequest } from 'src/lib/auth';

const execAsync = promisify(exec);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end();
  }

  // 1. Enforce Authentication
  const isAuthenticated = verifySessionFromRequest(req);
  if (!isAuthenticated) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (isGitHubConfigured()) {
    return res.status(200).json({
      success: true,
      message:
        'Alterações salvas em tempo real no GitHub. Redirecionamento de build iniciado.'
    });
  }

  const { message = 'chore(cms): update content via admin panel' } =
    req.body || {};

  // Sanitize commit message to prevent shell command injection
  const sanitizedMessage =
    typeof message === 'string'
      ? message.replace(/[^a-zA-Z0-9\s\-_()[\]:.,]/g, '')
      : 'chore(cms): update content via admin panel';

  try {
    const cwd = process.cwd();

    // Stage all content changes
    await execAsync('git add content/', { cwd });

    // Attempt commit
    const { stdout } = await execAsync(
      `git commit -m "${sanitizedMessage.replace(/"/g, '\\"')}"`,
      { cwd }
    );

    return res.status(200).json({ success: true, output: stdout.trim() });
  } catch (err) {
    // git commit exits non-zero when there is nothing to commit — treat as success
    const isClean =
      (err.stdout || '').includes('nothing to commit') ||
      (err.stderr || '').includes('nothing to commit');

    if (isClean) {
      return res.status(200).json({
        success: true,
        message: 'Nenhuma alteração pendente no repositório local.'
      });
    }

    console.error('[api/content/publish]', err);
    return res.status(500).json({ error: err.message });
  }
}
