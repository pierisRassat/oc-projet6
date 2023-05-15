import React from 'react'
import '../assets/css/home.css'
import { Gallery } from '../components/Gallery.js'

export const Home = () => (
  <section className="home-wrapper">
    <article className="home-banner-container">
      <img src="./images/banners/home-background.png" alt="" />
      <div className="home-banner-overlay"></div>
      <div className="home-banner-text">Chez vous, partout et ailleurs</div>
    </article>
    <article className="home-gallery-container">
      <Gallery />
    </article>
  </section>
)
