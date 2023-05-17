import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../data/logements.json';

export const Rental = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find(logement => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate('/error404');
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <div>
      <h1>{logement.title}</h1>
    </div>
  );
};
