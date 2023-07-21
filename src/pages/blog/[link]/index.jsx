/* eslint-disable react/prop-types */
import Image from 'next/image';
import { getPostLink } from '../../../services/apiBlog';
import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';
import styles from './index.module.css';
import Link from 'next/link';
import Head from 'next/head';

export async function getServerSideProps({ params }) {
  const post = await getPostLink(params.link);

  return { props: { post } };
}

const PostBlog = ({ post }) => (
  <div className={styles.body_post_blog_page}>
    <Head>
      <title>Rafael Ribeiro Tech Blog - {post.title}</title>
    </Head>
    <Header />
    <div className={styles.container_post_blog_page}>
      <Link href="/blog" className={styles.link_post_blog_page}>
        Voltar
      </Link>
      <h1 className={styles.h1_post_blog_page}>{post.title}</h1>
      <h4 className={styles.h4_post_blog_page}>{post.description}</h4>
      <Image
        src={post.image}
        alt="Imagem do post"
        className={styles.image_post_blog_page}
        width={1500}
        height={800}
        priority={true}
      />
      <div
        className={styles.post_content_post_blog_page}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
    <Footer />
  </div>
);

export default PostBlog;
