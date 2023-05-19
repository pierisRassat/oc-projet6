import React from 'react';
import DropDown from './DropDown.js';
import logements from '../data/logements.json'
import { useParams } from 'react-router-dom'

export const RentalDescription = () => {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)

  const componentData = {
    id: 'drop-down-5',
    title: 'Description',
    className: 'drop-down',
    isOpen: false,
    content: logement ? logement.description : '',
  }

  return <DropDown {...componentData} />
}

