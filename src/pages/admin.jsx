/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Head from 'next/head';
import { T } from '../components/Admin/ui';
import Sidebar from '../components/Admin/Sidebar';
import GlobalSEOSection from '../components/Admin/GlobalSEOSection';
import PricingSection from '../components/Admin/PricingSection';
import PortfolioSection from '../components/Admin/PortfolioSection';

export default function AdminPage({
  globalData,
  pricingTiers,
  portfolioItems
}) {
  const [active, setActive] = useState('seo');
  const [pubStatus, setPubStatus] = useState('idle');

  const publish = async () => {
    setPubStatus('publishing');
    try {
      const res = await fetch('/api/content/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `chore(cms): update content — ${new Date()
            .toISOString()
            .slice(0, 19)}`
        })
      });
      if (!res.ok) throw new Error('Publish failed');
      setPubStatus('published');
    } catch (e) {
      console.error(e);
      setPubStatus('error');
    }
    setTimeout(() => setPubStatus('idle'), 4500);
  };

  return (
    <>
      <Head>
        <title>Admin — Rafael Tech</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 99px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.18); }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        details summary::-webkit-details-marker { display: none; }
        /* suppress global FloatingButton on admin */
        #floating-whatsapp-btn { display: none !important; }
      `}</style>

      <div
        style={{
          display: 'flex',
          height: '100vh',
          overflow: 'hidden',
          background: T.bg,
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
          color: T.text
        }}
      >
        <Sidebar
          active={active}
          onSelect={setActive}
          pubStatus={pubStatus}
          onPublish={publish}
        />

        <main style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
          {active === 'seo' && <GlobalSEOSection initialData={globalData} />}
          {active === 'pricing' && (
            <PricingSection initialTiers={pricingTiers} />
          )}
          {active === 'portfolio' && (
            <PortfolioSection initialItems={portfolioItems} />
          )}
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  // 1. Enforce Authentication (Server-Side Route Guard)
  const cookies = ctx.req.headers.cookie || '';
  const isAuthenticated = cookies.includes('admin_session=authenticated');

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false
      }
    };
  }

  // 2. Load Content from GitHub (Production) or local FS (Local dev)
  const { isGitHubConfigured, getFile, readCollection } = await import(
    '../lib/github'
  );
  const useGitHub = isGitHubConfigured();

  let globalData = {};
  let pricingTiers = [];
  let portfolioItems = [];

  if (useGitHub) {
    try {
      const globalFile = await getFile('content/global/site.json');
      globalData = globalFile?.content || {};
    } catch (e) {
      console.error('Failed to load global settings from GitHub:', e);
    }

    try {
      const pricing = await readCollection('content/pricing');
      pricingTiers = pricing.sort(
        (a, b) => (a.order ?? 999) - (b.order ?? 999)
      );
    } catch (e) {
      console.error('Failed to load pricing tiers from GitHub:', e);
    }

    try {
      const portfolio = await readCollection('content/portfolio');
      portfolioItems = portfolio.sort(
        (a, b) => (a.order ?? 999) - (b.order ?? 999)
      );
    } catch (e) {
      console.error('Failed to load portfolio items from GitHub:', e);
    }
  } else {
    // Local Filesystem Fallback
    const fs = (await import('fs/promises')).default;
    const path = (await import('path')).default;

    const GLOBAL_PATH = path.join(
      process.cwd(),
      'content',
      'global',
      'site.json'
    );
    const PRICING_DIR = path.join(process.cwd(), 'content', 'pricing');
    const PORTFOLIO_DIR = path.join(process.cwd(), 'content', 'portfolio');

    const readDirLocal = async (dir) => {
      try {
        const files = await fs.readdir(dir);
        const items = await Promise.all(
          files
            .filter((f) => f.endsWith('.json'))
            .map(async (f) => {
              const raw = await fs.readFile(path.join(dir, f), 'utf-8');
              return JSON.parse(raw);
            })
        );
        return items.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
      } catch {
        return [];
      }
    };

    try {
      globalData = JSON.parse(await fs.readFile(GLOBAL_PATH, 'utf-8'));
    } catch (e) {
      void e;
    }

    [pricingTiers, portfolioItems] = await Promise.all([
      readDirLocal(PRICING_DIR),
      readDirLocal(PORTFOLIO_DIR)
    ]);
  }

  return { props: { globalData, pricingTiers, portfolioItems } };
}
