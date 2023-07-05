import React from 'react';
import './Card.css';

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <a href={link} className="card-link" target="_blank" rel="noreferrer">Ver mais</a>
    </div>
  );
};

export default Card;
