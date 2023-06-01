import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLogementsData } from '../components/fetchData.js'
import { Slider } from '../components/Slider.js'
import { RentalDescription } from '../components/RentalDescription.js'
import { RentalEquipments } from '../components/RentalEquipments.js'
import Rating from '../components/Rating.js'
import '../assets/css/rental.css'

export const Rental = () => {
  const logements = useLogementsData()
  const { id } = useParams();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const logement = logements.find(logement => logement.id === id);

  useEffect(() => {
    if (!logement && logements.length > 0) {
      setShouldRedirect(true);
    }
  }, [logement, logements]);

  if (shouldRedirect) {
    window.location.href = '/error404';
    return null;
  }

  if (!logement) {
    return <div className="loading">Chargement…</div>;
  }

  return (
    <section className="rental-main-wrapper">
      <Slider />
      <div className="rental-head-wrapper">
        <div className="rental-head-main">
          <h1>{logement.title}</h1>
          <div className="rental-location">{logement.location}</div>
          <div className="rental-tags-wrapper">
            {logement.tags.map((tag, index) => (
              <div className="rental-tag" key={index}>{tag}</div>
            ))}
          </div>
        </div>
        <div className="rental-head-details">
          <div className="rental-host-wrapper">
            <div className="rental-host-name">{logement.host.name}</div>
            <div className="rental-host-picture"><img src={logement.host.picture} alt="votre hôte" /></div>
          </div>
          <div className="rental-rating-wrapper">
            <Rating rating={logement.rating} />
          </div>
        </div>
      </div>
      <article className="rental-dropdown">
         <RentalDescription />
        <RentalEquipments />
      </article>
    </section>
  )
}

