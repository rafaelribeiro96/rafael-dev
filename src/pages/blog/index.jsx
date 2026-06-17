import React from 'react';
import PostsPage from '../../components/PostsPage/PostsPage';
import Head from 'next/head';

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Rafael Tech - Desenvolvimento Web e Otimização</title>
        <meta
          name="description"
          content="Artigos sobre engenharia web, SEO de alta performance, Google Meu Negócio, e novidades em desenvolvimento web com a Rafael Tech."
        />
      </Head>
      <PostsPage />
    </>
  );
};

export default BlogPage;
