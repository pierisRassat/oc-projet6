import React from 'react'
import '../assets/css/AppFooter.css'

export const AppFooter = () => (
  <footer>
    <div className="footer-branding">
      <a href="/" className="footer-branding-wrapper">
        <img className="footer-branding-logo" src="./images/logo/footer-logo.svg" alt="kasa logo" />
      </a>
    </div>
    <div className="footer-copyright">© 2020 Kasa. All rights reserved</div>
  </footer>
)

