import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Marquee from 'react-fast-marquee';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

export function InstaFeed() {
  const [feedList, setFeedList] = useState([]);

  async function getInstaFeed() {
    const token = process.env.NEXT_PUBLIC_TOKEN_INSTAGRAM;
    const fields = 'media_url,media_type,permalink,children{media_url}';
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

    try {
      const response = await axios.get(url);
      setFeedList(response.data.data);
    } catch (error) {
      console.error('Erro ao obter o feed do Instagram:', error);
    }
  }

  useEffect(() => {
    getInstaFeed();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="container-insta" data-aos="zoom-in">
      {/* <h2 className="title-insta-feed">INSTAGRAM</h2> */}
      <section className="container-insta-feed">
        <Marquee
          gradient={false}
          speed={30}
          pauseOnClick
          delay={0}
          play
          direction="left"
        >
          {feedList.slice(0, 20).map((item) => (
            <Link
              key={item.id}
              href={item.permalink}
              target="_blank"
              className="item-insta-feed"
              rel="noreferrer"
            >
              {item.media_type === 'IMAGE' ? (
                <Image
                  src={item.media_url}
                  alt="Instagram Post"
                  className="marquee-image"
                  width={300}
                  height={300}
                />
              ) : item.media_type === 'CAROUSEL_ALBUM' ? (
                item.children &&
                item.children.data.length > 0 && (
                  <Image
                    src={item.children.data[0].media_url}
                    alt="Instagram Post"
                    className="marquee-image"
                    width={300}
                    height={300}
                  />
                )
              ) : (
                <video controls className="marquee-image">
                  <source src={item.media_url} />
                </video>
              )}
            </Link>
          ))}
        </Marquee>
      </section>
    </section>
  );
}
