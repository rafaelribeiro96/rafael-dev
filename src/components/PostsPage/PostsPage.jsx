import React, { useState, useEffect } from 'react';
import { getPosts } from '../../services/apiBlog';
import Image from 'next/image';
import Link from 'next/link';
import VideoBlog from 'src/components/VideoBlog/VideoBlog';
import Footer from 'src/components/Footer/Footer';
import { InstaFeed } from 'src/components/InstaFeed/InstaFeed';
import Header from 'src/components/Header/Header';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await getPosts();
      const publishedPosts = fetchedPosts.filter(
        (post) => post.status === 'publicado'
      );
      setPosts(publishedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div className="bg-surface-deep text-on-surface min-h-screen flex flex-col">
      <Header />

      {/* Featured dynamic post with video background */}
      {posts.length > 0 && <VideoBlog post={posts[0]} />}

      {/* Blog list section */}
      <section className="flex-grow max-w-container-max mx-auto px-margin-page py-16 w-full text-left">
        <h2 className="font-headline-lg text-3xl text-white font-bold mb-8 text-center md:text-left">
          Artigos &amp; Insights
        </h2>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-muted">Nenhum post publicado no momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.link}`}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 group flex flex-col h-full"
                key={post._id}
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-surface-deep">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      width={600}
                      height={350}
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow bg-surface-slate text-left">
                  <h3 className="font-headline-md text-lg text-on-surface mb-3 font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <span className="text-primary text-xs font-semibold mt-6 flex items-center gap-1">
                    Ler artigo completo
                    <span className="material-symbols-outlined text-sm font-bold group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <InstaFeed />
      <Footer />
    </div>
  );
};

export default PostsPage;
