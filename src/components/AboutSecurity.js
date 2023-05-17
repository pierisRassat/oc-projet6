import React from 'react';
import DropDown from './DropDown.js';

const AboutSecurity = () => {
  const componentData = {
      id: 'drop-down-4',
      title: 'Sécurité',
      className: 'drop-down',
      isOpen: false,
      content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
    }
return (
      <DropDown {...componentData} />
  )
}

export default AboutSecurity
