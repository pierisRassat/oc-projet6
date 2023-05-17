import React from 'react';
import DropDown from './DropDown.js';

const AboutReliability = () => {
  const componentData = {
      id: 'drop-down-1',
      title: 'Fiabilité',
      className: 'drop-down',
      isOpen: false,
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    }
return (
      <DropDown {...componentData} />
  )
}

export default AboutReliability
