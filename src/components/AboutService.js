import React from 'react';
import DropDown from './DropDown.js';

const AboutService = () => {
  const componentData = {
      id: 'drop-down-3',
      title: 'Service',
      className: 'drop-down',
      isOpen: false,
      content: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.',
    }
return (
      <DropDown {...componentData} />
  )
}

export default AboutService
