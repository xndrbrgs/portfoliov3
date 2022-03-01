import React, { useState } from 'react'

import '../styles/index.css'

import {CustomCursor} from '../CustomCursor'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import ProjectGallery from '../components/ProjectGallery'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <CustomCursor />

    <div className='main-container' id='main-container' data-scroll-container>
      <Header />
      <Hero />
      <About />
      <ProjectGallery />

    </div>
    
    </>
  )
}

export default Home;