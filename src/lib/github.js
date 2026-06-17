const GITHUB_PAT = process.env.GITHUB_PAT;
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'master';

const headers = {
  Authorization: `token ${GITHUB_PAT}`,
  Accept: 'application/vnd.github.v3+json',
  'Content-Type': 'application/json',
  'User-Agent': 'Rafael-Tech-GitCMS'
};

/**
  Checks if GitHub integration is fully configured in environment
*/
export function isGitHubConfigured() {
  return !!(GITHUB_PAT && GITHUB_REPO);
}

/**
  Gets contents and metadata of a file from GitHub
*/
export async function getFile(filePath) {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}?ref=${GITHUB_BRANCH}`;

  const res = await fetch(url, { headers });
  if (res.status === 404) return null;
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `GitHub API Error getting file ${filePath}: ${res.status} - ${errorText}`
    );
  }

  const data = await res.json();
  const content = Buffer.from(data.content, 'base64').toString('utf-8');

  return {
    sha: data.sha,
    content: JSON.parse(content)
  };
}

/**
  Lists files inside a GitHub directory
*/
export async function listGitHubDir(dirPath) {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${dirPath}?ref=${GITHUB_BRANCH}`;

  const res = await fetch(url, { headers });
  if (res.status === 404) return [];
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `GitHub API Error listing dir ${dirPath}: ${res.status} - ${errorText}`
    );
  }

  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

/**
  Reads and parses all JSON files inside a GitHub directory
*/
export async function readCollection(dirPath) {
  const files = await listGitHubDir(dirPath);
  const items = await Promise.all(
    files
      .filter((f) => f.name.endsWith('.json') && f.type === 'file')
      .map(async (f) => {
        try {
          const fileData = await getFile(f.path);
          return fileData?.content;
        } catch (err) {
          console.error(`Failed to load file ${f.path} from GitHub:`, err);
          return null;
        }
      })
  );
  return items.filter(Boolean);
}

/**
  Writes (creates or updates) a file to GitHub
*/
export async function writeFile(filePath, content, message) {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`;

  // 1. Retrieve current file metadata to get current SHA (required for updates)
  const existing = await getFile(filePath).catch(() => null);
  const sha = existing?.sha;

  // 2. Prepare payload
  const contentStr =
    typeof content === 'string' ? content : JSON.stringify(content, null, 2);
  const payload = {
    message,
    content: Buffer.from(contentStr).toString('base64'),
    branch: GITHUB_BRANCH
  };
  if (sha) payload.sha = sha;

  // 3. Make PUT request
  const res = await fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `GitHub API Error writing file ${filePath}: ${res.status} - ${errorText}`
    );
  }

  return res.json();
}

/**
  Deletes a file from GitHub
*/
export async function deleteFile(filePath, message) {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`;

  // 1. Retrieve current file metadata to get current SHA
  const existing = await getFile(filePath);
  if (!existing) return { success: true, message: 'File did not exist.' };

  const payload = {
    message,
    sha: existing.sha,
    branch: GITHUB_BRANCH
  };

  // 2. Make DELETE request
  const res = await fetch(url, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `GitHub API Error deleting file ${filePath}: ${res.status} - ${errorText}`
    );
  }

  return res.json();
}
