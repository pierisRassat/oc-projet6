import React from 'react'
import '../assets/css/about.css'
import AboutReliability from '../components/AboutReliability.js'
import AboutRespect from '../components/AboutRespect.js'
import AboutService from '../components/AboutService.js'
import AboutSecurity from '../components/AboutSecurity.js'

export const About = () => (
  <section className="about-main-wrapper">
    <article className="about-banner-container">
      <img src="./images/banners/about-background.png" alt="" />
      <div className="about-banner-overlay"></div>
    </article>
    <article className="about-drop-down-elements">
      <AboutReliability />
      <AboutRespect />
      <AboutService />
      <AboutSecurity />
    </article>
  </section>
)

