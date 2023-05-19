import React from 'react';
import DropDown from './DropDown.js';
import logements from '../data/logements.json';
import { useParams } from 'react-router-dom';

export const RentalEquipments = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const equipmentsList = logement.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  const componentData = {
    id: 'drop-down-6',
    title: 'Équipements',
    className: 'drop-down',
    isOpen: false,
    content: (
      <ul className="rental-equipment-list">
        {equipmentsList}
      </ul>
    ),
  };

  return <DropDown {...componentData} />;
};

