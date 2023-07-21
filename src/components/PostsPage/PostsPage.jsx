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
    <>
      <Header />
      {/* Passando o primeiro post como uma prop para o componente de vídeo */}
      {posts.length > 0 && <VideoBlog post={posts[0]} />}
      <div className="posts-page-blog-container">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.link}`}
            className="post-card-page-blog"
            key={post._id}
          >
            <div className="post-div-img-page-blog">
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  className="post-img-page-blog"
                  width={1500}
                  height={800}
                />
              )}
            </div>
            <div className="blog-text-container">
              <h2 className="post-title-page-blog">{post.title}</h2>
              <p className="post-desc-page-blog">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <InstaFeed />
      <Footer />
    </>
  );
};

export default PostsPage;
