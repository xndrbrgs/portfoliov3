import React, { useState } from 'react'
import { useEffect } from "react";
import { useRef } from "react";

import '../styles/index.scss'

import {CustomCursor} from '../CustomCursor'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import ProjectGallery from '../components/ProjectGallery'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
// import SideBar from '../components/SideBar'

import useLocoScroll from "../hooks/useLocoScroll";

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);


  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(0);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper absolute">
          {/* <h1>Alex Borges</h1> */}
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <Header />
          <Hero />
          <About />
          <ProjectGallery />
          <Skills />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Home;