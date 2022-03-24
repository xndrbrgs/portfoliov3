import React, {useState, useEffect, useRef} from 'react'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";

import './style.scss'

const images = [
  {
    src:"https://i.ibb.co/jLFk5Vx/chronicler.png",
    title: "The Chronicler",
    subtitle: "The Modern Library Application",
    description: "The Chronicler allows users to search a database of 10,000 recommended book based on title, author, and genre to find a book that they might be interested in reading that they can then add to their personal collection. This app uses JavaScript, MySQL, NodeJS, Express, and Bootstrap.",
    note: "Note: App hosted on free Heroku server. Please allow 10-15s to spin up.",
    liveApp: "https://thechronicler.herokuapp.com/",
    source: "https://github.com/xndrbrgs/the_chronicler"
  },
  {
    src:"https://i.ibb.co/8jgFJW2/travelology.png",
    title: "Travelology",
    subtitle: "Random Travel Location Generator",
    description: "Travelology is a tourism-centered site where you are given random cities throughout the US that include their attractions, restaurants, and local parks. This app uses JavaScript, CSS, and third-party APIs.",
    liveApp: "https://xndrbrgs.github.io/travelology/",
    source: "https://github.com/xndrbrgs/travelology"
  },
  {
    src:"https://i.ibb.co/m9NxMjZ/notetaker.png",
    title: "Note Taker",
    subtitle: "An Express Powered Note Taking Application",
    description: "An in-web note taking application that uses Express.js to construct new JSON files with the given data by a user. This app was constructed using Javascript, CSS, and Node.js.",
    note: "Note: App hosted on free Heroku server. Please allow 10-15s to spin up.",
    liveApp: "https://notetaker-express-ab.herokuapp.com/",
    source: "https://github.com/xndrbrgs/note_taker_application"
  },
  {
    src:"https://i.ibb.co/W6PpR1W/quiz.png",
    title: "Javascript Quiz Challenge",
    subtitle: "Challenge your wits with this JS quiz",
    description: "The Javascript Quiz Challenge is a timed multiple-choice quiz that covers through an array of topics related to Javascript. Once a user finishes the quiz, they can then store their high scores in the browser. The application features dynamically updated CSS and HTML using JavaScript.",
    liveApp: "https://xndrbrgs.github.io/webAPI_code_quiz/",
    source: "https://github.com/xndrbrgs/webAPI_code_quiz",
  }
];

function GalleryItem({
  src,
  description,
  subtitle,
  title,
  liveApp,
  source,
  note,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
  
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-description">{description}</p>
          <p className="gallery-info-note">{note}</p>
          <a className="gallery-info-buttons" href={liveApp}>See Live</a>
          <a className="gallery-info-buttons" href={source}>See Source Code</a>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
}

export default function ProjectGallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      let sections = gsap.utils.toArray(".gallery-item-wrapper");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">

      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          {/* <span>{activeImage}</span> */}
          {/* <span className="divider" /> */}
          {/* <span>{images.length}</span> */}
          <span className='projects-span'>PROJECTS</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={src}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}
