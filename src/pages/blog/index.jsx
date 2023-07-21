import React from 'react';
import PostsPage from '../../components/PostsPage/PostsPage';
import style from './blog.module.css';
import Head from 'next/head';

const BlogPage = () => {
  return (
    <div className={style.blog_container}>
      <Head>
        <title>
          Rafael Ribeiro Tech Blog - Desenvolvimento Web Personalizado
        </title>
      </Head>
      <PostsPage />
    </div>
  );
};

export default BlogPage;
