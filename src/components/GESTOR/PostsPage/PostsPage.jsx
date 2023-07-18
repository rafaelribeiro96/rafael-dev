import React, { useState, useEffect } from 'react';
import { getPosts } from '../../../services/apiBlog';
import Image from 'next/image';
import Link from 'next/link';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const fetchedPosts = await getPosts();
            const publishedPosts = fetchedPosts.filter(post => post.status === 'publicado');
            setPosts(publishedPosts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    return (
        <div className="posts-page-blog-container">
            {posts.map((post) => (
                <div className="post-card-page-blog" key={post._id}>
                    <h2 className="post-title-page-blog">{post.title}</h2>
                    <p className="post-desc-page-blog">{post.description}</p>
                    {post.image && <Image src={post.image} alt={post.title} className="post-img-page-blog" width={1500} height={800} />}
                    <Link href={`/blog/${post.link}`} className="post-link-page-blog">Leia mais</Link>
                </div>
            ))}
        </div>
    );
};

export default PostsPage;
