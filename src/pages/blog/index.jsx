import React from 'react';
import PostsPage from '../../components/GESTOR/PostsPage/PostsPage';
import style from './blog.module.css';

const BlogPage = () => {
    return (
        <div className={style.blog_container}>
            <PostsPage />
        </div>
    );
};

export default BlogPage;