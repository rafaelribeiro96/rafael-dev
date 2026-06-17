import { isGitHubConfigured, writeBinaryFile } from 'src/lib/github';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb' // Safe parsing ceiling (actual security check is inside)
    }
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 1. Authenticate Route Guard
  const cookies = req.headers.cookie || '';
  const isAuthenticated = cookies.includes('admin_session=authenticated');

  if (!isAuthenticated) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { filename, fileData } = req.body;

  if (!filename || !fileData) {
    return res
      .status(400)
      .json({ error: 'Faltam parâmetros filename ou fileData.' });
  }

  // 2. Security Checks: Capping actual written file size at 1MB to keep Git light
  const sizeInBytes = (fileData.length * 3) / 4;
  if (sizeInBytes > 1024 * 1024) {
    return res
      .status(400)
      .json({ error: 'O arquivo excede o limite de segurança de 1MB.' });
  }

  // 3. Prevent path traversal attacks
  if (
    filename.includes('/') ||
    filename.includes('\\') ||
    filename.includes('..')
  ) {
    return res.status(400).json({ error: 'Nome de arquivo inválido.' });
  }

  const useGitHub = isGitHubConfigured();

  try {
    if (useGitHub) {
      // Production: Commit the binary image directly to GitHub under public/uploads
      await writeBinaryFile(
        `public/uploads/${filename}`,
        fileData,
        `media(upload): add ${filename}`
      );
    } else {
      // Local dev fallback: Write to public/uploads locally using node FS
      const fs = (await import('fs/promises')).default;
      const path = (await import('path')).default;

      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      await fs.mkdir(uploadDir, { recursive: true });

      const buffer = Buffer.from(fileData, 'base64');
      await fs.writeFile(path.join(uploadDir, filename), buffer);
    }

    // Return the relative URL path served statically by Next.js from the public directory
    return res.status(200).json({ url: `/uploads/${filename}` });
  } catch (err) {
    console.error('Upload handler error:', err);
    return res.status(500).json({ error: `Upload falhou: ${err.message}` });
  }
}
