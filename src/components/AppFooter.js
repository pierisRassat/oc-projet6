import React from 'react'
import '../assets/css/AppFooter.css'

export const AppFooter = () => (
  <footer>
    <div className="footer-branding">
      <a href="/" className="footer-branding-wrapper">
        <img className="branding-logo" src={`${process.env.PUBLIC_URL}/images/logo/footer-logo.svg`} alt="kasa logo" width="122" height="40" />
      </a>
    </div>
    <div className="footer-copyright">© 2020 Kasa. All rights reserved</div>
  </footer>
)

