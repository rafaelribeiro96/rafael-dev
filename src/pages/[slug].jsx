/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import {
  getGlobalSite,
  getMoneyPageBySlug,
  getMoneyPages,
  getPricingTiers,
  getPortfolioItems
} from 'src/lib/content';
import { buildMoneyPageSchema } from 'src/lib/seoSchema';

const WHATSAPP_BASE = 'https://wa.me/5531991869943';

function buildWhatsappLink(message) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

function formatCurrency(value) {
  return Number(value || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });
}

function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `https://softluna.com.br${path.startsWith('/') ? path : `/${path}`}`;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  inverse = false
}) => (
  <div
    className={`mb-10 ${
      align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
    }`}
  >
    {eyebrow && (
      <span
        className={`mb-3 block font-label-md text-[12px] uppercase tracking-[0.08em] ${
          inverse ? 'text-primary-container' : 'text-primary'
        }`}
      >
        {eyebrow}
      </span>
    )}
    <h2
      className={`font-headline-lg text-[32px] leading-[42px] md:text-[40px] md:leading-[52px] ${
        inverse ? 'text-white' : 'text-on-surface'
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mt-4 font-body-md text-[16px] leading-7 md:text-[17px] ${
          inverse ? 'text-white/66' : 'text-secondary'
        }`}
      >
        {description}
      </p>
    )}
  </div>
);

const MoneyPage = ({
  page,
  globalData,
  pricingTiers,
  relatedPortfolioItems
}) => {
  const ctaLink = buildWhatsappLink(page.hero.whatsappMessage);
  const schema = buildMoneyPageSchema({ page, pricingTiers, globalData });
  const recommendedPlans = pricingTiers.filter((tier) =>
    page.recommendedPlanIds?.includes(tier.id)
  );
  const canonical =
    page.seo?.canonical || `https://softluna.com.br/${page.slug}`;
  const ogImage = absoluteUrl(page.seo.ogImage || '/og-image.png');

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-primary text-on-surface font-body-md">
      <Head>
        <title>{page.seo.title}</title>
        <meta name="description" content={page.seo.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={page.seo.title} />
        <meta property="og:description" content={page.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:title" content={page.seo.title} />
        <meta name="twitter:description" content={page.seo.description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <Header />

      <main className="overflow-x-hidden pt-20">
        <section className="relative border-b border-border-thin bg-surface px-margin-page py-16 md:py-24">
          <div className="mx-auto grid max-w-container-max gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <span className="mb-5 inline-flex rounded-lg border border-primary-container/70 bg-white px-3 py-1 font-label-md text-[11px] uppercase tracking-[0.08em] text-primary">
                {page.hero.eyebrow}
              </span>
              <h1 className="max-w-4xl font-headline-xl text-[38px] leading-[46px] text-on-surface md:text-[56px] md:leading-[66px]">
                {page.hero.h1}
              </h1>
              <p className="mt-6 max-w-3xl font-body-lg text-[18px] leading-8 text-secondary md:text-[20px] md:leading-9">
                {page.hero.lead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="rt-button rt-button-primary rt-button-lg"
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {page.hero.primaryCta}
                </a>
                <Link
                  className="rt-button rt-button-secondary rt-button-lg"
                  href="/#planos"
                >
                  {page.hero.secondaryCta}
                </Link>
              </div>
            </div>

            <aside className="rounded-lg border border-border-thin bg-white p-6 shadow-[0_20px_70px_rgba(30,27,23,0.08)]">
              <p className="font-label-md text-[12px] uppercase tracking-[0.08em] text-text-secondary">
                Estrutura da pagina
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  'Especialidades e servicos',
                  'Equipe, unidades e canais',
                  'SEO local e schema',
                  'FAQ e caminhos de contato'
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body-md text-[15px] leading-6 text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined mt-0.5 text-[18px] text-primary">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="bg-bg-primary px-margin-page py-16 md:py-24">
          <div className="mx-auto max-w-container-max">
            <SectionHeading
              eyebrow="Problemas que a pagina resolve"
              title="Quando o site da clinica nao organiza a decisao do paciente"
            />
            <div className="grid gap-4 md:grid-cols-2">
              {page.painPoints.map((point) => (
                <article
                  key={point}
                  className="rounded-lg border border-border-thin bg-white p-5"
                >
                  <p className="font-body-md text-[15px] leading-7 text-on-surface-variant">
                    {point}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg-secondary px-margin-page py-16 md:py-24">
          <div className="mx-auto grid max-w-container-max gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Solucao SoftLuna"
              title={page.solution.title}
              description={page.solution.description}
            />
            <div className="grid gap-4">
              {page.solution.items.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-lg border border-border-thin bg-white p-5"
                >
                  <span className="material-symbols-outlined text-[22px] text-primary">
                    verified
                  </span>
                  <p className="font-body-md text-[15px] leading-7 text-on-surface-variant">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg-primary px-margin-page py-16 md:py-24">
          <div className="mx-auto max-w-container-max">
            <SectionHeading
              eyebrow="Beneficios"
              title="Uma pagina pensada para busca, entendimento e contato"
              align="center"
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {page.benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-lg border border-border-thin bg-white p-5"
                >
                  <h3 className="font-headline-md text-[20px] leading-7 text-on-surface">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 font-body-md text-[14px] leading-6 text-secondary">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1a1a1a] px-margin-page py-16 text-white md:py-24">
          <div className="mx-auto max-w-container-max">
            <SectionHeading
              eyebrow="Processo"
              title="Do briefing a publicacao assistida"
              description="A entrega segue um roteiro curto, com validacao de conteudo e SEO antes da pagina ir ao ar."
              inverse
            />
            <div className="grid gap-5 md:grid-cols-4">
              {page.process.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="font-label-md text-[12px] uppercase tracking-[0.08em] text-primary-container">
                    Etapa {index + 1}
                  </p>
                  <h3 className="mt-3 font-headline-md text-[20px] leading-7 text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-body-md text-[14px] leading-6 text-white/66">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg-secondary px-margin-page py-16 md:py-24">
          <div className="mx-auto max-w-container-max">
            <SectionHeading
              eyebrow="Planos recomendados"
              title="Comece pelo formato certo para a sua clinica"
              description="Os valores abaixo seguem a fonte publica atual em content/pricing."
              align="center"
            />
            <div className="grid gap-5 md:grid-cols-2">
              {recommendedPlans.map((plan) => (
                <article
                  key={plan.id}
                  className="rounded-lg border border-border-thin bg-white p-6"
                >
                  <h3 className="font-headline-md text-[22px] leading-8 text-on-surface">
                    {plan.title}
                  </h3>
                  <p className="mt-3 font-body-md text-[14px] leading-6 text-secondary">
                    {plan.description}
                  </p>
                  <p className="mt-5 font-label-md text-[12px] uppercase tracking-[0.08em] text-text-secondary">
                    A partir de
                  </p>
                  <p className="mt-2 font-headline-md text-[30px] font-bold leading-[38px]">
                    {formatCurrency(plan.setupPrice)}
                  </p>
                  <p className="mt-1 font-body-md text-[13px] leading-5 text-secondary">
                    + {formatCurrency(plan.maintenancePrice)}/mes para
                    hospedagem, manutencao e suporte.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {relatedPortfolioItems.length > 0 && (
          <section className="bg-bg-primary px-margin-page py-16 md:py-24">
            <div className="mx-auto max-w-container-max">
              <SectionHeading
                eyebrow="Portfolio relacionado"
                title="Referencias para orientar o projeto"
              />
              <div className="grid gap-5 md:grid-cols-3">
                {relatedPortfolioItems.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-lg border border-border-thin bg-white p-5"
                  >
                    <p className="font-body-md text-[13px] leading-5 text-secondary">
                      {item.category}
                    </p>
                    <h3 className="mt-2 font-headline-md text-[20px] leading-7">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-body-md text-[14px] leading-6 text-secondary">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-bg-primary px-margin-page py-16 md:py-24">
          <div className="mx-auto max-w-container-max">
            <SectionHeading
              eyebrow="FAQ"
              title="Perguntas comuns antes de criar o site"
              align="center"
            />
            <div className="mx-auto grid max-w-4xl gap-4">
              {page.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-lg border border-border-thin bg-white p-5"
                >
                  <summary className="cursor-pointer font-headline-md text-[18px] leading-7 text-on-surface">
                    {faq.question}
                  </summary>
                  <p className="mt-3 font-body-md text-[15px] leading-7 text-secondary">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary px-margin-page py-14 text-white">
          <div className="mx-auto flex max-w-container-max flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="font-label-md text-[12px] uppercase tracking-[0.08em] text-white/70">
                Proximo passo
              </p>
              <h2 className="mt-2 font-headline-md text-[28px] leading-9">
                Vamos estruturar a pagina da sua clinica?
              </h2>
            </div>
            <a
              className="rt-button rt-button-secondary-inverse rt-button-lg border-white/40"
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const pages = await getMoneyPages();

  return {
    paths: pages.map((page) => ({ params: { slug: page.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const [page, globalData, pricingTiers, portfolioItems] = await Promise.all([
    getMoneyPageBySlug(params.slug),
    getGlobalSite(),
    getPricingTiers(),
    getPortfolioItems()
  ]);

  if (!page) return { notFound: true };

  const relatedPortfolioItems = portfolioItems.filter((item) =>
    page.portfolioIds?.includes(item.id)
  );

  return {
    props: {
      page,
      globalData,
      pricingTiers,
      relatedPortfolioItems
    }
  };
}

export default MoneyPage;
