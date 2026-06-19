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

/* eslint-disable react/prop-types */
const Main = ({ globalData, pricingTiers, portfolioItems, faqItems }) => {
  const ctaLink =
    'https://wa.me/5531991869943?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20SoftLuna%20para%20alavancar%20minha%20presen%C3%A7a%20digital.';
  const seo = globalData?.seo || {};
  const businessName = seo.businessName || 'SoftLuna';
  const metaTitle =
    seo.metaTitle ||
    'SoftLuna | Sites Profissionais de Alta Performance para Empresas';
  const metaDescription =
    seo.metaDescription ||
    'SoftLuna cria sites profissionais e landing pages de alta performance para empresas em Belo Horizonte e todo o Brasil.';

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-primary text-on-surface font-body-md">
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: businessName,
              description: metaDescription,
              telephone: seo.businessPhone,
              email: seo.businessEmail || undefined,
              address: {
                '@type': 'PostalAddress',
                addressLocality: seo.businessCity || 'Belo Horizonte',
                addressRegion: seo.businessState || 'MG',
                addressCountry: 'BR'
              }
            })
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
