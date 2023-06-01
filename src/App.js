import './assets/css/reset.css'
import './assets/css/App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppHeader } from './components/AppHeader.js'
import { AppFooter } from './components/AppFooter.js'
import { Home } from './routes/home.js'
import { About } from './routes/about.js'
import { Rental } from './routes/rental.js'
import { Error404 } from './routes/error404.js'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rental/:id' element={<Rental />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <AppFooter />
    </BrowserRouter>
  </div>
)

export default App

