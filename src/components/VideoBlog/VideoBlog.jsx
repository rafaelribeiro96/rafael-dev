/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';

const VideoBlog = ({ post }) => {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-end">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20 scale-105"
      >
        <source src="/videos/video-featured.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-deep via-surface-deep/40 to-transparent -z-10"></div>
      <div className="absolute inset-0 bg-surface-deep/30 -z-10"></div>

      {/* Article Featured Info Content */}
      <div className="w-full max-w-container-max mx-auto px-margin-page pb-16 z-10 text-left">
        <span className="text-primary font-label-md text-xs uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-4 inline-block font-semibold">
          Destaque do Blog
        </span>
        <Link href={`/blog/${post.link}`} className="block group mt-2">
          <h1 className="font-headline-xl text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight group-hover:text-primary transition-colors max-w-4xl">
            {post.title}
          </h1>
        </Link>
        <Link href={`/blog/${post.link}`} className="block mt-4">
          <p className="font-body-lg text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl line-clamp-3 leading-relaxed hover:text-on-surface transition-colors">
            {post.description}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default VideoBlog;
