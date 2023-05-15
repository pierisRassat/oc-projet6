import React from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import logements from '../data/logements.json';

export const RentalWithFallback = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const logementExists = logements.some(logement => logement.id === id);

  if (logementExists) {
    return (
      <div>
        {/* Votre contenu spécifique à la page de location */}
        <Outlet />
      </div>
    )
  } else {
    navigate('/error404')
    return null
  }
}

