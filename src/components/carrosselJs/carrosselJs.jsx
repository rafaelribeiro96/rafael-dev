import React, { useEffect, useState, useRef } from 'react';
import rightIcon from '../../assets/images/right-icon.png';
import Image from 'next/image';
import { mockShoes } from '../../mock/shoes';

function CarrosselJs() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    setData(mockShoes);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <div className="container-carrosseljs">
      <div className="carousel-carrosseljs" ref={carousel}>
        {data.map((item) => {
          const { id, name, price, oldPrice, image } = item;
          return (
            <div className="item-carrosseljs" key={id}>
              <div className="image-carrosseljs">
                <Image src={image} alt={name} width={300} height={300} />
              </div>
              <div className="info-carrosseljs">
                <span className="name-carrosseljs">{name}</span>
                <span className="oldPrice-carrosseljs">U$ {oldPrice}</span>
                <span className="price-carrosseljs">U$ {price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons-carrosseljs">
        <button onClick={handleLeftClick}>
          <Image src={rightIcon} alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <Image src={rightIcon} alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
}

export default CarrosselJs;
