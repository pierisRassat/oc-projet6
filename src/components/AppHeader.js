import React from 'react'
import '../assets/css/AppHeader.css'

export const AppHeader = () => (
  <header>
    <div className="branding">
      <a href="/" className="branding-wrapper">
        <img src="./images/logo/k-element.svg" alt="" />
        <img src="./images/logo/a-house-element.svg" alt="" />
        <img src="./images/logo/s-element.svg" alt="" />
        <img src="./images/logo/a-element.svg" alt="" />
      </a>
    </div>
    <nav className="nav">
      <ul>
        <li className="nav-link">
          <a href="/">Accueil</a>
        </li>
        <li className="nav-link">
          <a href="/about">A propos</a>
        </li>
      </ul>
    </nav>
  </header>
)

