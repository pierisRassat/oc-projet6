import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/AppHeader.css';

export const AppHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isAccueilActive = currentPath === '/';
  const isAboutActive = currentPath === '/about';

  return (
    <header>
  <div className="branding">
    <Link to="/" className="branding-wrapper">
      <img className="branding-logo" src={`${process.env.PUBLIC_URL}/images/logo/header-logo.svg`} alt="kasa logo" width="210" height="68" />
    </Link>
  </div>
  <nav className="nav">
    <ul>
      <li className={`nav-link ${isAccueilActive ? 'active' : ''}`}>
        <Link to="/">Accueil</Link>
      </li>
      <li className={`nav-link ${isAboutActive ? 'active' : ''}`}>
        <Link to="/about">A propos</Link>
      </li>
    </ul>
  </nav>
</header>
  );
};

