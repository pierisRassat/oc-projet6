import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import logements from '../data/logements.json'
import { Slider } from '../components/Slider.js'
import '../assets/css/rental.css'

export const Rental = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const logement = logements.find(logement => logement.id === id)

  useEffect(() => {
    if (!logement) {
      navigate('/error404');
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
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
            <div className="rental-host-picture"><img src={logement.host.picture} alt="photo de votre hôte" /></div>
          </div>
          <div className="rental-rating-wrapper">
          X
          </div>
        </div>
      </div>
    </section>
  )
}
