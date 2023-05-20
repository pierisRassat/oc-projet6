import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/error404.css'

export const Error404 = () => (
  <div className="not-found-wrapper">
    <div className="not-found-int-message">404</div>
    <div className="not-found-str-message">Oups! La page que vous demandez n'existe pas.</div>
    <div className="back-home-message"><Link to="/" >Retourner sur la page d’accueil</Link></div>
  </div>
)

