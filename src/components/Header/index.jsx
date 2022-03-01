import React from 'react'
import './style.scss'

export default function Header() {
  return (
    <header data-scroll-section>
      <nav>
        <ul class="nav_links">
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#projects">Contact</a></li>
          <a class="contact" href="#contact"><button>Resume</button></a>
        </ul>
      </nav>
    </header>
  )
}
