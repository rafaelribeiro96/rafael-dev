/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import wppsvg from '../../assets/images/wpp.svg';
import instasvg from '../../assets/images/instagram.svg';
import defaultImage from '../../assets/images/defaultImage.png';
import Link from 'next/link';

const Carousel = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="carousel">
        <Image
          src={defaultImage}
          alt="Default"
          className="carousel__image active"
          priority={true}
        />
        <div className="carousel__nav">
          <div className="social-buttons">
            <Link
              href="https://www.instagram.com/glayderibeiro/"
              target="_blank"
              rel="noreferrer"
              title="link instagram glayderibeiro"
            >
              <Image
                src={instasvg}
                alt="instagram botao"
                className="svgbtn svg__instagram"
              />
            </Link>
            <Link
              href="https://wa.me/5531991525735?text=Ol%C3%A1%20Glayde,%20te%20encontrei%20atrav%C3%A9s%20do%20seu%20site!"
              target="_blank"
              rel="noreferrer"
              title="link whatsapp glayde ribeiro"
            >
              <Image
                src={wppsvg}
                alt="whatsapp botao"
                className="svgbtn svg__wpp"
              />
            </Link>
          </div>
          <button className="carousel__nav-button" onClick={handlePrevClick}>
            &lt;
          </button>
          <button className="carousel__nav-button" onClick={handleNextClick}>
            &gt;
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <Image
          key={index}
          src={`${image.url}`}
          alt="imagem glayde ribeiro caroussel"
          className={`carousel__image ${
            index === currentIndex ? 'active' : 'hidden'
          }`}
          width={1500}
          height={1000}
          priority={true}
        />
      ))}

      <div className="carousel__nav">
        <div className="social-buttons">
          <Link
            href="https://www.instagram.com/glayderibeiro/"
            target="_blank"
            rel="noreferrer"
            title="link instagram glayderibeiro"
          >
            <Image
              src={instasvg}
              alt="insta icon"
              className="svgbtn svg__instagram"
            />
          </Link>
          <Link
            href="https://wa.me/5531991525735?text=Ol%C3%A1%20Glayde,%20te%20encontrei%20atrav%C3%A9s%20do%20seu%20site!"
            title="link whatsapp glayde ribeiro"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={wppsvg} alt="wpp icon" className="svgbtn svg__wpp" />
          </Link>
        </div>

        <button className="carousel__nav-button" onClick={handlePrevClick}>
          &lt;
        </button>
        <button className="carousel__nav-button" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
