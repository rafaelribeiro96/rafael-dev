/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import {
  getBlogPostBySlug,
  getBlogPosts,
  getGlobalSite
} from 'src/lib/content';
import { buildBlogPostSchema } from 'src/lib/seoSchema';

const WHATSAPP_BASE = 'https://wa.me/5531991869943';

function buildWhatsappLink(message) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date(date));
}

function renderSectionBlock(section) {
  return (
    <section key={section.heading} className="space-y-4">
      <h2 className="font-headline-md text-[28px] leading-9 text-on-surface">
        {section.heading}
      </h2>
      {section.content?.map((paragraph) => (
        <p
          key={paragraph}
          className="font-body-md text-[17px] leading-8 text-on-surface-variant"
        >
          {paragraph}
        </p>
      ))}
      {section.items?.length > 0 && (
        <ul className="grid gap-3">
          {section.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-lg border border-border-thin bg-bg-secondary p-4 font-body-md text-[15px] leading-7 text-on-surface-variant"
            >
              <span className="material-symbols-outlined mt-0.5 text-[18px] text-primary">
                check_circle
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

const BlogPostPage = ({ post, globalData, relatedPosts }) => {
  const canonical = `https://softluna.com.br/blog/${post.slug}`;
  const schema = buildBlogPostSchema({ post, globalData });
  const ctaLink = buildWhatsappLink(post.cta.whatsappMessage);

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-primary text-on-surface font-body-md">
      <Head>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta
          property="og:image"
          content={`https://softluna.com.br${
            post.heroImage || '/og-image.png'
          }`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seoTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <Header />

      <main className="pt-20">
        <article>
          <header className="border-b border-border-thin bg-surface px-margin-page py-14 md:py-20">
            <div className="mx-auto max-w-4xl">
              <Link
                href="/blog"
                className="mb-8 inline-flex items-center gap-2 font-label-md text-[12px] uppercase tracking-[0.08em] text-primary"
              >
                <span className="material-symbols-outlined text-[18px]">
                  arrow_back
                </span>
                Blog SoftLuna
              </Link>
              <p className="font-label-md text-[12px] uppercase tracking-[0.08em] text-text-secondary">
                {post.cluster} - {post.funnelStage} -{' '}
                {formatDate(post.publishedAt)}
              </p>
              <h1 className="mt-5 font-headline-xl text-[36px] leading-[44px] text-on-surface md:text-[54px] md:leading-[64px]">
                {post.title}
              </h1>
              <p className="mt-6 font-body-lg text-[18px] leading-8 text-secondary md:text-[20px] md:leading-9">
                {post.excerpt}
              </p>
              <div className="mt-8 rounded-lg border border-border-thin bg-white p-5">
                <p className="font-label-md text-[11px] uppercase tracking-[0.08em] text-primary">
                  Resumo rapido
                </p>
                <p className="mt-3 font-body-md text-[16px] leading-7 text-on-surface-variant">
                  {post.answerFirst}
                </p>
              </div>
            </div>
          </header>

          <div className="mx-auto grid max-w-container-max gap-10 px-margin-page py-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:py-20">
            <div className="space-y-12">
              {post.sections.map(renderSectionBlock)}

              <section className="rounded-lg border border-primary-container bg-surface p-6">
                <h2 className="font-headline-md text-[26px] leading-8 text-on-surface">
                  {post.cta.title}
                </h2>
                <p className="mt-3 font-body-md text-[16px] leading-7 text-secondary">
                  {post.cta.description}
                </p>
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rt-button rt-button-primary rt-button-lg mt-6"
                >
                  {post.cta.label}
                </a>
              </section>

              <section>
                <h2 className="font-headline-md text-[28px] leading-9 text-on-surface">
                  Perguntas frequentes
                </h2>
                <div className="mt-5 grid gap-4">
                  {post.faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="rounded-lg border border-border-thin bg-white p-5"
                    >
                      <summary className="cursor-pointer font-headline-md text-[18px] leading-7">
                        {faq.question}
                      </summary>
                      <p className="mt-3 font-body-md text-[15px] leading-7 text-secondary">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-lg border border-border-thin bg-white p-5">
                <p className="font-label-md text-[11px] uppercase tracking-[0.08em] text-text-secondary">
                  Autor
                </p>
                <h2 className="mt-2 font-headline-md text-[20px] leading-7">
                  {post.author}
                </h2>
                <p className="mt-3 font-body-md text-[14px] leading-6 text-secondary">
                  {post.authorBio}
                </p>
              </div>

              <div className="rounded-lg border border-border-thin bg-white p-5">
                <p className="font-label-md text-[11px] uppercase tracking-[0.08em] text-text-secondary">
                  Links internos
                </p>
                <ul className="mt-4 space-y-3">
                  {post.internalLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="font-body-md text-[14px] leading-6 text-primary hover:underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {relatedPosts.length > 0 && (
                <div className="rounded-lg border border-border-thin bg-white p-5">
                  <p className="font-label-md text-[11px] uppercase tracking-[0.08em] text-text-secondary">
                    Leia tambem
                  </p>
                  <div className="mt-4 space-y-4">
                    {relatedPosts.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/blog/${item.slug}`}
                        className="block font-body-md text-[14px] leading-6 text-on-surface hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-lg border border-border-thin bg-white p-5">
                <p className="font-label-md text-[11px] uppercase tracking-[0.08em] text-text-secondary">
                  Fontes do brief
                </p>
                <ul className="mt-4 space-y-3">
                  {post.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body-md text-[13px] leading-5 text-secondary hover:text-primary"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const posts = await getBlogPosts();

  return {
    paths: posts.map((post) => ({ params: { link: post.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const [post, globalData, posts] = await Promise.all([
    getBlogPostBySlug(params.link),
    getGlobalSite(),
    getBlogPosts()
  ]);

  if (!post) return { notFound: true };

  const relatedPosts = posts
    .filter(
      (item) => item.slug !== post.slug && item.clusterKey === post.clusterKey
    )
    .slice(0, 3);

  return {
    props: {
      post,
      globalData,
      relatedPosts
    }
  };
}

export default BlogPostPage;
