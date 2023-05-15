import React from 'react'
import '../assets/css/AppHeader.css'

export const AppHeader = () => (
  <header>
    <div className="branding">
      <a href="/" className="branding-wrapper">
        <img src="./images/logo/k-element.svg" />
        <img src="./images/logo/a-house-element.svg" />
        <img src="./images/logo/s-element.svg" />
        <img src="./images/logo/a-element.svg" />
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

