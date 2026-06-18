import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Link from 'next/link';

// Import local images as fallbacks
import mockupSite from '../../assets/images/modelo-site.png';
import portfolioImg from '../../assets/images/portfolio-rafael.png';
import featuredContent from '../../assets/images/featured-content.png';
import heroContent from '../../assets/images/hero-content.png';

const MOCK_INSTA_FEED = [
  {
    id: 'mock_insta1',
    media_type: 'IMAGE',
    media_url: mockupSite,
    permalink: 'https://www.instagram.com/softlunadigital/'
  },
  {
    id: 'mock_insta2',
    media_type: 'IMAGE',
    media_url: portfolioImg,
    permalink: 'https://www.instagram.com/softlunadigital/'
  },
  {
    id: 'mock_insta3',
    media_type: 'IMAGE',
    media_url: featuredContent,
    permalink: 'https://www.instagram.com/softlunadigital/'
  },
  {
    id: 'mock_insta4',
    media_type: 'IMAGE',
    media_url: heroContent,
    permalink: 'https://www.instagram.com/softlunadigital/'
  }
];

export function InstaFeed() {
  const [feedList, setFeedList] = useState([]);

  async function getInstaFeed() {
    const token = process.env.NEXT_PUBLIC_TOKEN_INSTAGRAM;
    if (!token) {
      setFeedList(MOCK_INSTA_FEED);
      return;
    }

    const fields = 'media_url,media_type,permalink,children{media_url}';
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

    try {
      const response = await axios.get(url);
      if (
        response.data &&
        response.data.data &&
        response.data.data.length > 0
      ) {
        setFeedList(response.data.data);
      } else {
        setFeedList(MOCK_INSTA_FEED);
      }
    } catch (error) {
      console.warn(
        'Erro ao obter o feed do Instagram da Graph API. Utilizando feed simulado.',
        error
      );
      setFeedList(MOCK_INSTA_FEED);
    }
  }

  useEffect(() => {
    getInstaFeed();
  }, []);

  return (
    <section className="w-full bg-[#050810] py-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-page mb-6 text-center md:text-left">
        <h3 className="text-primary font-label-md text-xs uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Instagram Feed
        </h3>
      </div>
      <div className="w-full">
        <Marquee gradient={false} speed={40} pauseOnHover play>
          {feedList.map((item) => (
            <Link
              key={item.id}
              href={
                item.permalink || 'https://www.instagram.com/softlunadigital/'
              }
              target="_blank"
              className="block mx-4 w-[280px] aspect-square rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(76,215,246,0.2)] transition-all duration-300 relative group"
              rel="noreferrer"
            >
              {/* Overlay with Instagram logo on hover */}
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 z-10">
                <span className="material-symbols-outlined text-white text-4xl">
                  photo_camera
                </span>
              </div>

              {item.media_type === 'IMAGE' || !item.media_type ? (
                <Image
                  src={item.media_url}
                  alt="Instagram Post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  width={300}
                  height={300}
                />
              ) : item.media_type === 'CAROUSEL_ALBUM' ? (
                item.children &&
                item.children.data.length > 0 && (
                  <Image
                    src={item.children.data[0].media_url}
                    alt="Instagram Post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    width={300}
                    height={300}
                  />
                )
              ) : (
                <video
                  loop
                  muted
                  autoPlay
                  className="w-full h-full object-cover"
                >
                  <source src={item.media_url} />
                </video>
              )}
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
