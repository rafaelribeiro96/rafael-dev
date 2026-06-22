/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import { getBlogPosts } from 'src/lib/content';
import { ANALYTICS_EVENTS, trackEvent } from 'src/lib/analytics';

const clusterLabels = {
  custos: 'Custos e investimentos',
  performance: 'Performance e otimizacao',
  nichos: 'Nichados e especificos'
};

function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(new Date(date));
}

const BlogPage = ({ posts, schema }) => {
  const featuredPost = posts[0];
  const clusters = Object.entries(clusterLabels).map(([key, label]) => ({
    key,
    label,
    posts: posts.filter((post) => post.clusterKey === key)
  }));

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-primary text-on-surface font-body-md">
      <Head>
        <title>Blog SoftLuna | Sites, SEO Local e Performance</title>
        <meta
          name="description"
          content="Guias praticos da SoftLuna sobre custo de sites, performance, SEO local e presenca digital para negocios de servico."
        />
        <link rel="canonical" href="https://softluna.com.br/blog" />
        <meta
          property="og:title"
          content="Blog SoftLuna | Sites, SEO Local e Performance"
        />
        <meta
          property="og:description"
          content="Conteudo para empresas que querem entender investimento, velocidade, SEO local e sites que geram contato qualificado."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softluna.com.br/blog" />
        <meta
          property="og:image"
          content="https://softluna.com.br/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blog SoftLuna | Sites, SEO Local e Performance"
        />
        <meta
          name="twitter:description"
          content="Guias praticos da SoftLuna sobre custo de sites, performance, SEO local e presenca digital para negocios de servico."
        />
        <meta
          name="twitter:image"
          content="https://softluna.com.br/og-image.png"
        />
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
      </Head>

      <Header />

      <main className="pt-20">
        <section className="border-b border-border-thin bg-surface px-margin-page py-16 md:py-24">
          <div className="mx-auto grid max-w-container-max gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <span className="mb-5 inline-flex rounded-lg border border-primary-container/70 bg-white px-3 py-1 font-label-md text-[11px] uppercase tracking-[0.08em] text-primary">
                Blog SoftLuna
              </span>
              <h1 className="font-headline-xl text-[38px] leading-[46px] text-on-surface md:text-[56px] md:leading-[66px]">
                Guias para decidir melhor antes de criar ou refazer seu site.
              </h1>
              <p className="mt-6 max-w-3xl font-body-lg text-[18px] leading-8 text-secondary md:text-[20px] md:leading-9">
                Conteudo direto sobre investimento, velocidade, SEO local,
                presenca digital e estruturas de site para empresas de servico.
              </p>
            </div>

            {featuredPost && (
              <Link
                href={`/blog/${featuredPost.slug}`}
                onClick={() =>
                  trackEvent(ANALYTICS_EVENTS.BLOG_CARD_CLICK, {
                    source: 'blog_featured',
                    slug: featuredPost.slug,
                    title: featuredPost.title,
                    cluster: featuredPost.cluster,
                    position: 1
                  })
                }
                className="rounded-lg border border-border-thin bg-white p-6 shadow-[0_20px_70px_rgba(30,27,23,0.08)] transition-colors hover:border-primary-container"
              >
                <p className="font-label-md text-[11px] uppercase tracking-[0.08em] text-primary">
                  Artigo em destaque
                </p>
                <h2 className="mt-4 font-headline-md text-[26px] leading-8 text-on-surface">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 font-body-md text-[15px] leading-7 text-secondary">
                  {featuredPost.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-label-md text-[12px] uppercase tracking-[0.08em] text-primary">
                  Ler agora
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </span>
              </Link>
            )}
          </div>
        </section>

        <section className="bg-bg-primary px-margin-page py-16 md:py-24">
          <div className="mx-auto max-w-container-max">
            <div className="mb-10 max-w-3xl">
              <span className="mb-3 block font-label-md text-[12px] uppercase tracking-[0.08em] text-primary">
                Biblioteca inicial
              </span>
              <h2 className="font-headline-lg text-[32px] leading-[42px] md:text-[40px] md:leading-[52px]">
                Nove artigos organizados pelos clusters do roadmap SEO.
              </h2>
            </div>

            <div className="space-y-12">
              {clusters.map((cluster) => (
                <div key={cluster.key}>
                  <div className="mb-5 flex flex-col gap-2 border-b border-border-thin pb-4 sm:flex-row sm:items-end sm:justify-between">
                    <h3 className="font-headline-md text-[24px] leading-8">
                      {cluster.label}
                    </h3>
                    <p className="font-body-md text-[14px] leading-6 text-secondary">
                      {cluster.posts.length} artigos publicados
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    {cluster.posts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        onClick={() =>
                          trackEvent(ANALYTICS_EVENTS.BLOG_CARD_CLICK, {
                            source: 'blog_cluster_grid',
                            slug: post.slug,
                            title: post.title,
                            cluster: cluster.key,
                            position: cluster.posts.indexOf(post) + 1
                          })
                        }
                        className="flex h-full flex-col rounded-lg border border-border-thin bg-white p-5 transition-colors hover:border-primary-container"
                      >
                        <p className="font-label-md text-[11px] uppercase tracking-[0.08em] text-text-secondary">
                          {post.funnelStage} - {formatDate(post.publishedAt)}
                        </p>
                        <h4 className="mt-3 font-headline-md text-[20px] leading-7 text-on-surface">
                          {post.title}
                        </h4>
                        <p className="mt-3 flex-grow font-body-md text-[14px] leading-6 text-secondary">
                          {post.excerpt}
                        </p>
                        <span className="mt-5 font-label-md text-[12px] uppercase tracking-[0.08em] text-primary">
                          Ler artigo
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getBlogPosts();

  const SITE_URL = 'https://softluna.com.br';
  const blogUrl = `${SITE_URL}/blog`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${blogUrl}#collectionpage`,
        name: 'Blog SoftLuna | Sites, SEO Local e Performance',
        description:
          'Guias praticos da SoftLuna sobre custo de sites, performance, SEO local e presenca digital para negocios de servico.',
        url: blogUrl,
        inLanguage: 'pt-BR',
        publisher: { '@id': `${SITE_URL}#organization` }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${blogUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: SITE_URL
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: blogUrl
          }
        ]
      }
    ]
  };

  return {
    props: {
      posts,
      schema
    }
  };
}

export default BlogPage;
