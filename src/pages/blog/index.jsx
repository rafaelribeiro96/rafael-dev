import React from 'react';
import PostsPage from '../../components/GESTOR/PostsPage/PostsPage';
import style from './blog.module.css';
import Video from 'src/components/Video/Video';
import HeaderBlog from 'src/components/HeaderBlog/HeaderBlog';

const BlogPage = () => {
    return (
        <div className={style.blog_container}>
            {/* <HeaderBlog />
            <Video /> */}
            <PostsPage />
        </div>
    );
};

export default BlogPage;