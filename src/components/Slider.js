import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../assets/css/Slider.css';
import logements from '../data/logements.json';

export const Slider = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const logement = logements.find(logement => logement.id === id);

  const pictures = logement.pictures;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!logement || !logement.pictures) {
      navigate('/error404');
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  const goToPreviousImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="rental-carousel-wrapper">
      <button className="rental-carousel-button rental-carousel-prev-button" onClick={goToPreviousImage}>
        <img src={`${process.env.PUBLIC_URL}/images/icons/carousel-prev.svg`} alt="image précedente" />
      </button>
      <picture>
        <img src={pictures[currentImageIndex]} alt="" width="1240px" height="415px" />
      </picture>
      <button className="rental-carousel-button rental-carousel-next-button" onClick={goToNextImage}>
        <img src={`${process.env.PUBLIC_URL}/images/icons/carousel-next.svg`} alt="image précedente" />
      </button>
    </div>
  );
};

