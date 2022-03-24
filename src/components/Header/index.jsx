import React, {useEffect} from 'react'
import gsap from 'gsap'
import SplitText from '../../utils/Split3.min'
import './style.scss'

// Href Imports

import aboutme from '../About'
import skills from '../Skills'
import projects from '../ProjectGallery'
import contact from '../Contact'

export default function Header() {
  useEffect(() => {
    const split = new SplitText('.nav_links', {
      type: 'lines',
      linesClass: 'lineChildren'
    });

    const splitParent = new SplitText('.nav_links', {
      type: 'lines',
      linesClass: 'lineParent'
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2"
    })
  })
  return (
    <header data-scroll-section>
      <nav>
        <ul class="nav_links">
          <li><a href='#about-me'>About Me</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href="#gallery-item">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <a class="contact-button" href="#"><button>Resume</button></a>
        </ul>
      </nav>
    </header>
  )
}
