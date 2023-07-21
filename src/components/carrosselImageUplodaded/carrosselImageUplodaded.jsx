/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import rightIcon from '../../assets/images/right-icon.png';
import Image from 'next/image';

function Carrossel({
  images,
  setIsEditing,
  setSelectedImage,
  handleRemoveUploaded,
  openModal,
  deleteSvg,
  editarPng
}) {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!images || !images.length) return null;

  return (
    <div className="container-carrosseljs">
      <div className="carousel-carrosseljs" ref={carousel}>
        {images.map((image) => {
          return (
            <div key={image.id} className="up-uploaded-image">
              <Image
                src={`${image.url}`}
                alt={image.originalname}
                className="up-uploaded-image-img"
                onClick={() => openModal(image)}
              />
              <span className="image-title-uploaded">
                {image.title
                  ? image.title.length > 30
                    ? image.title.slice(0, 30) + '...'
                    : image.title
                  : 'sem título'}
              </span>
              <span>
                {image.description
                  ? image.description.length > 30
                    ? image.description.slice(0, 30) + '...'
                    : image.description
                  : 'sem descrição'}
              </span>
              <span>
                {image.price ? 'R$' + image.price.toFixed(2) : 'sem preço'}
              </span>
              <div className="up-button-uploaded-image">
                <button
                  onClick={() => handleRemoveUploaded(image.id)}
                  className="up-button-remover"
                >
                  <Image
                    src={deleteSvg}
                    alt="Remover"
                    className="delete-svg-up"
                  />
                </button>
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setSelectedImage(image);
                  }}
                  className="up-button-edit"
                >
                  <Image src={editarPng} alt="Editar" className="edit-svg-up" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons-carrosseljs">
        <button onClick={handleLeftClick}>
          <Image
            src={rightIcon}
            alt="Scroll Left"
            className="img-button-carrosseljs"
          />
        </button>
        <button onClick={handleRightClick}>
          <Image
            src={rightIcon}
            alt="Scroll Right"
            className="img-button-carrosseljs"
          />
        </button>
      </div>
    </div>
  );
}

export default Carrossel;
