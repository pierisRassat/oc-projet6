import React from 'react';
import FullStarSvg from '../assets/icon/full-star.svg';
import EmptyStarSvg from '../assets/icon/empty-star.svg';

const Rating = ({ rating }) => {
  const coloredStars = rating || 0;
  const totalStars = 5;

  const renderStars = () => {
    return Array(totalStars)
      .fill(null)
      .map((_, index) => {
        const starIcon = index < coloredStars ? FullStarSvg : EmptyStarSvg;

        return (
          <img
            key={index}
            src={starIcon}
            alt="rating star"
          />
        );
      });
  };

  return <div className="rental-rating-elements">{renderStars()}</div>;
};

export default Rating;

