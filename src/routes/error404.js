import React from 'react'
import '../assets/css/error404.css'

export const Error404 = () => (
  <div className="not-found-wrapper">
    <div className="not-found-int-message">404</div>
    <div className="not-found-str-message">Oups! La page que vous demandez n&apos;existe pas.</div>
    <div className="back-home-message">Retourner sur la page d’accueil</div>
  </div>
)

