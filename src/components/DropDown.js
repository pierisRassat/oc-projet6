import React, { useState } from 'react';
import '../assets/css/DropDown.css';

const DropDown = ({ id, title, className, isOpen, content }) => {
  const [isContentVisible, setIsContentVisible] = useState(isOpen);
  const buttonIcon = isContentVisible ? '/images/icons/drop-down-open.svg' : '/images/icons/drop-down-close.svg';

  const toggleDropDown = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div id={id} className={className}>
      <div className="drop-down-header">
        <h3>{title}</h3>
        <button className="drop-down-button" onClick={toggleDropDown}>
          <img src={buttonIcon} alt={isContentVisible ? 'Fermer' : 'Ouvrir'} width="24" height="14" />
        </button>
      </div>
      {isContentVisible && (
        <div className="drop-down-content">
          {content}
        </div>
      )}
    </div>
  );
};

export default DropDown;
