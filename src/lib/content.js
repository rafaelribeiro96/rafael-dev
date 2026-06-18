/**
 * Git-CMS Content Helpers
 *
 * Reads flat JSON files from /content at build time (Node.js fs).
 * These functions must only be called server-side (getStaticProps / API routes).
 *
 * Workflow:
 *   1. Edit a JSON file in /content
 *   2. Commit + push to git
 *   3. Next.js rebuild picks up the new data → static HTML updated
 */

import fs from 'fs/promises';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'content');

/**
 * Reads all JSON files from a content subdirectory.
 * Returns an array sorted by the `order` field (ascending).
 * Skips any files that fail to parse.
 *
 * @param {string} subdir - subdirectory inside /content (e.g. 'pricing')
 * @returns {Promise<Object[]>}
 */
async function readContentDir(subdir) {
  const dirPath = path.join(CONTENT_DIR, subdir);

  let filenames;
  try {
    filenames = await fs.readdir(dirPath);
  } catch {
    console.warn(`[git-cms] Content directory not found: ${dirPath}`);
    return [];
  }

  const jsonFiles = filenames.filter((f) => f.endsWith('.json'));

  const items = await Promise.all(
    jsonFiles.map(async (filename) => {
      const filePath = path.join(dirPath, filename);
      try {
        const raw = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(raw);
      } catch (err) {
        console.warn(`[git-cms] Failed to parse ${filePath}:`, err.message);
        return null;
      }
    })
  );

  return items
    .filter(Boolean)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

/**
 * Returns all pricing tiers from content/pricing/*.json
 * sorted by the `order` field.
 *
 * Schema per file:
 *   id, order, title, description, setupPrice, maintenancePrice,
 *   highlighted, badge, features[], maintenanceNote
 *
 * @returns {Promise<PricingTier[]>}
 */
export async function getPricingTiers() {
  return readContentDir('pricing');
}

/**
 * Returns global site settings from content/global/site.json.
 *
 * Schema:
 *   hero: { headline, subheadline, ctaText }
 *   seo: { metaTitle, metaDescription, businessName, businessCity,
 *          businessState, businessPhone, businessEmail }
 *
 * @returns {Promise<Object>}
 */
export async function getGlobalSite() {
  const filePath = path.join(CONTENT_DIR, 'global', 'site.json');

  try {
    const raw = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.warn(`[git-cms] Failed to parse ${filePath}:`, err.message);
    return { hero: {}, seo: {} };
  }
}

/**
 * Returns all portfolio items from content/portfolio/*.json
 * sorted by the `order` field.
 *
 * Schema per file:
 *   id, order, title, category, image, description, liveUrl, whatsappMessage
 *
 * @returns {Promise<PortfolioItem[]>}
 */
export async function getPortfolioItems() {
  return readContentDir('portfolio');
}

/**
 * Returns all FAQ items from content/faq/*.json
 * sorted by the `order` field.
 *
 * @returns {Promise<Object[]>}
 */
export async function getFAQItems() {
  return readContentDir('faq');
}

/**
 * Returns all Hero mobile carousel images from content/carousel-images/*.json
 * sorted by the `order` field.
 *
 * @returns {Promise<Object[]>}
 */
export async function getCarouselImages() {
  return readContentDir('carousel-images');
}
