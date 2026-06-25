import React from 'react';
import Head from 'next/head';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';

import Hero from 'src/components/Home/Hero';
import Services from 'src/components/Home/Services';
import DigitalEcosystem from 'src/components/Home/DigitalEcosystem';
import ComparisonMatrix from 'src/components/Home/ComparisonMatrix';
import Portfolio from 'src/components/Home/Portfolio';
import Workflow from 'src/components/Home/Workflow';
import Pricing from 'src/components/Home/Pricing';
import OwnershipGuarantee from 'src/components/Home/OwnershipGuarantee';
import FAQ from 'src/components/Home/FAQ';

import {
  getGlobalSite,
  getPricingTiers,
  getPortfolioItems,
  getFAQItems
} from 'src/lib/content';
import { buildHomePageSchema } from 'src/lib/seoSchema';

/* eslint-disable react/prop-types */
const Main = ({ globalData, pricingTiers, portfolioItems, faqItems }) => {
  const ctaLink =
    'https://wa.me/5531991869943?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20SoftLuna%20para%20alavancar%20minha%20presen%C3%A7a%20digital.';
  const seo = globalData?.seo || {};
  const metaTitle =
    seo.metaTitle ||
    'SoftLuna | Sites Profissionais de Alta Performance para Empresas';
  const metaDescription =
    seo.metaDescription ||
    'SoftLuna cria sites profissionais e landing pages de alta performance para empresas em Belo Horizonte e todo o Brasil.';
  const schema = buildHomePageSchema({ globalData, faqItems, pricingTiers });

  const googleVerificationToken = seo.googleSiteVerification?.includes('=')
    ? seo.googleSiteVerification.split('=')[1]
    : seo.googleSiteVerification;

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-primary text-on-surface font-body-md">
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {googleVerificationToken && (
          <meta
            name="google-site-verification"
            content={googleVerificationToken}
          />
        )}
        <link rel="canonical" href="https://softluna.com.br" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softluna.com.br" />
        <meta
          property="og:image"
          content="https://softluna.com.br/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://softluna.com.br/og-image.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      </Head>

      <Header />

      <main className="overflow-x-hidden">
        <Hero ctaLink={ctaLink} heroContent={globalData?.hero} />
        <DigitalEcosystem />
        <Services />
        <ComparisonMatrix />
        <Portfolio ctaLink={ctaLink} items={portfolioItems} />
        <Workflow />
        <Pricing ctaLink={ctaLink} tiers={pricingTiers} />
        <OwnershipGuarantee />
        <FAQ items={faqItems} />
      </main>

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const [globalData, pricingTiers, portfolioItems, faqItems] =
    await Promise.all([
      getGlobalSite(),
      getPricingTiers(),
      getPortfolioItems(),
      getFAQItems()
    ]);

  return {
    props: {
      globalData,
      pricingTiers,
      portfolioItems,
      faqItems
    }
  };
}

export default Main;
