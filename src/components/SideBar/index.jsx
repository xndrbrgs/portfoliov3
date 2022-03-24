import React from 'react'
import './style.scss'

import { BsGithub } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'
import { AiOutlineFile } from 'react-icons/ai'

export default function SideBar() {
  return (
    <div class="leftside-icons">
        <ul class="icons">
          <li>
            <a href="https://github.com/xndrbrgs">
              <i class="fab fa-github" id="icon-size">
                  <BsGithub />
              </i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alexander-borges-75b153226/">
              <i class="fab fa-linkedin" id="icon-size">
                <FaLinkedin />
              </i>
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/xndrbrgs">
              <i class="fab fa-dribbble" id="icon-size">
                <FiDribbble />
              </i>
            </a>
          </li>
          <li>
            <a href="#git">
              <i class="far fa-file" id="icon-size">
                  <AiOutlineFile />
              </i>
            </a>
          </li>
        </ul>
      </div>
  )
}
