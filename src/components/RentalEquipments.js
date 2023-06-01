import React from 'react';
import { useParams } from 'react-router-dom';
import DropDown from './DropDown.js';
import { useLogementsData } from './fetchData.js';

export const RentalEquipments = () => {
  const logementsData = useLogementsData();
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return null;
  }

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

