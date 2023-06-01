import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/Slider.css';
import { useLogementsData } from './fetchData.js';

export const Slider = () => {
  const logements = useLogementsData();
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  const pictures = logement?.pictures || [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (pictures.length <= 1) {
    return (
      <div className="rental-carousel-wrapper">
        <picture>
          <img src={pictures[0]} alt="logement" width="1240px" height="415px" />
        </picture>
      </div>
    );
  }

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImageNumber = currentImageIndex + 1;
  const totalImagesNumber = pictures.length;

  return (
    <div className="rental-carousel-wrapper">
      <button
        className="rental-carousel-button rental-carousel-prev-button"
        onClick={goToPreviousImage}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/icons/carousel-prev.svg`}
          alt="précédent"
          width="47"
          height="79"
        />
      </button>
      <picture>
        <img src={pictures[currentImageIndex]} alt="logement" width="1240px" height="415px" />
      </picture>
      <button
        className="rental-carousel-button rental-carousel-next-button"
        onClick={goToNextImage}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/icons/carousel-next.svg`}
          alt="suivant"
          width="47"
          height="79"
        />
      </button>
      <div className="rental-carousel-counter">
        {currentImageNumber}/{totalImagesNumber}
      </div>
    </div>
  );
};

