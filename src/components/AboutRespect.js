import React from 'react';
import DropDown from './DropDown.js';

const AboutRespect = () => {
  const componentData = {
      id: 'drop-down-2',
      title: 'Respect',
      className: 'drop-down',
      isOpen: false,
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    }
return (
      <DropDown {...componentData} />
  )
}

export default AboutRespect
