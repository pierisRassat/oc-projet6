import React from 'react';
import { useParams } from 'react-router-dom'
import DropDown from './DropDown.js';
import { useLogementsData } from './fetchData.js'

export const RentalDescription = () => {
  const logements = useLogementsData()
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

