import React from 'react'
import '../assets/css/AppFooter.css'

export const AppFooter = () => (
  <footer>
    <div className="footer-branding">
      <a href="/" className="footer-branding-wrapper">
        <img className="footer-branding-elm1" src="./images/logo/k-element-white.svg" alt="" />
        <img className="footer-branding-elm2" src="./images/logo/a-house-element-white.svg" alt="" />
        <img className="footer-branding-elm3" src="./images/logo/s-element-white.svg" alt="" />
        <img className="footer-branding-elm4" src="./images/logo/a-element-white.svg" alt="" />
      </a>
    </div>
    <div className="footer-copyright">© 2020 Kasa. All rights reserved</div>
  </footer>
)

