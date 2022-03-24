import React, { useEffect } from "react";
import "./style.scss";

export default function Contact() {
  return (
    <div className="contact" data-scroll-section>
      <div className="contact-header">
        <h1 data-scroll>Contact Me</h1>
        <h2>
              Let's Work Together
          </h2>
      </div>
      <div className="contact-form" data-scroll>
        <form id="contact" autoComplete="off">
          <ul>
              <li className="name side">
                <input type="text" placeholder="Name"/>
              </li>
              <li className="email side">
                <input type="text" placeholder="Email"/>
              </li>
              <li className="subject">
                <input type="text" placeholder="Subject"/>
              </li>
              <li className="message">
                <input id="message" type="text" placeholder="Message" />
              </li>
              <a href="#contact"><button id="contact-me">Submit</button></a>
          </ul>
        </form>
      </div>
    </div>
  );
}
