/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import defaultImage from '../../assets/images/defaultImage.webp';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const limitedImages = useMemo(() => {
    const imagesArray = [];
    for (let i = 0; i < 12; i++) {
      if (images[i]) {
        imagesArray.push(images[i].url);
      } else {
        imagesArray.push(defaultImage);
      }
    }
    return imagesArray;
  }, [images]);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handlePrev = useCallback(() => {
    const currentIndex = limitedImages.indexOf(selectedImage);
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setSelectedImage(limitedImages[prevIndex]);
    }
  }, [limitedImages, selectedImage]);

  const handleNext = useCallback(() => {
    const currentIndex = limitedImages.indexOf(selectedImage);
    const nextIndex = currentIndex + 1;
    if (nextIndex < limitedImages.length) {
      setSelectedImage(limitedImages[nextIndex]);
    }
  }, [limitedImages, selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.keyCode === 37) {
          handlePrev();
        }
        if (e.keyCode === 39) {
          handleNext();
        }
        if (e.keyCode === 27) {
          setSelectedImage(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, handlePrev, handleNext]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (selectedImage && !e.target.closest('.selected-image-container')) {
        setSelectedImage(null);
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [selectedImage]);

  const handleClose = (event) => {
    if (event.target === event.currentTarget) {
      setSelectedImage(null);
    }
  };

  const renderThumbnailImage = (image, index) => {
    return (
      <Image
        key={index}
        src={image}
        alt="Thumbnail"
        className="thumbnail-image"
        onClick={() => handleClick(image)}
        width={300}
        height={300}
      />
    );
  };

  return (
    <div className="gallery-container">
      {selectedImage ? (
        <div className="selected-image-container" onClick={handleClose}>
          <Image
            src={selectedImage}
            alt="Selected"
            className="selected-image"
            width={1000}
            height={1000}
          />
          <button className="prev-button" onClick={handlePrev}>
            &lt;
          </button>
          <button className="next-button" onClick={handleNext}>
            &gt;
          </button>
          <button className="close-button" onClick={handleClose}>
            X
          </button>
        </div>
      ) : null}
      <div className="thumbnail-container">
        {limitedImages.map((image, index) =>
          renderThumbnailImage(image, index)
        )}
        <Link href="/produtos" className="mais_produtos">
          ver mais produtos
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
