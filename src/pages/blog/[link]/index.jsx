/* eslint-disable react/prop-types */
import Image from 'next/image';
import { getPostLink } from '../../../services/apiBlog';
import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';
import Link from 'next/link';
import Head from 'next/head';

export async function getServerSideProps({ params }) {
  const post = await getPostLink(params.link);
  return { props: { post } };
}

const PostBlog = ({ post }) => {
  if (!post) {
    return (
      <div className="bg-surface-deep text-on-surface min-h-screen flex flex-col justify-between">
        <Header />
        <div className="text-center py-24 flex-grow">
          <p className="text-text-muted">Artigo não encontrado.</p>
          <Link
            href="/blog"
            className="text-primary hover:underline mt-4 inline-block"
          >
            Voltar para o blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-surface-deep text-on-surface min-h-screen flex flex-col justify-between">
      <Head>
        <title>{`SoftLuna - ${post.title}`}</title>
        <meta name="description" content={post.description} />
      </Head>

      <Header />

      <main className="flex-grow pt-28 pb-16 px-margin-page">
        <div className="max-w-3xl mx-auto text-left">
          {/* Breadcrumb link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-fixed font-label-md text-sm mb-8 transition-colors group"
          >
            <span className="material-symbols-outlined text-sm font-bold group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            Voltar para o blog
          </Link>

          {/* Article Header */}
          <article className="space-y-6">
            <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              {post.title}
            </h1>
            <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
              {post.description}
            </p>

            {/* Featured Image */}
            {post.image && (
              <div className="w-full relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl my-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="object-cover"
                  fill
                  priority={true}
                />
              </div>
            )}

            {/* Rich Text Content */}
            <div
              className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed space-y-6 pt-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PostBlog;
