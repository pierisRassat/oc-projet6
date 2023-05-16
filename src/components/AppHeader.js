import React from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/css/AppHeader.css';

export const AppHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isAccueilActive = currentPath === '/';
  const isAboutActive = currentPath === '/about';

  return (
    <header>
      <div className="branding">
        <a href="/" className="branding-wrapper">
          <img className="branding-elm1" src="./images/logo/k-element.svg" alt="" />
          <img className="branding-elm2" src="./images/logo/a-house-element.svg" alt="" />
          <img className="branding-elm3" src="./images/logo/s-element.svg" alt="" />
          <img className="branding-elm4" src="./images/logo/a-element.svg" alt="" />
        </a>
      </div>
      <nav className="nav">
        <ul>
          <li className={`nav-link ${isAccueilActive ? 'active' : ''}`}>
            <a href="/">Accueil</a>
          </li>
          <li className={`nav-link ${isAboutActive ? 'active' : ''}`}>
            <a href="/about">A propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};


// import React from 'react'
// import '../assets/css/AppHeader.css'
// 
// export const AppHeader = () => (
//   <header>
//     <div className="branding">
//       <a href="/" className="branding-wrapper">
//         <img src="./images/logo/k-element.svg" alt="" />
//         <img src="./images/logo/a-house-element.svg" alt="" />
//         <img src="./images/logo/s-element.svg" alt="" />
//         <img src="./images/logo/a-element.svg" alt="" />
//       </a>
//     </div>
//     <nav className="nav">
//       <ul>
//         <li className="nav-link">
//           <a href="/">Accueil</a>
//         </li>
//         <li className="nav-link">
//           <a href="/about">A propos</a>
//         </li>
//       </ul>
//     </nav>
//   </header>
// )
// 
