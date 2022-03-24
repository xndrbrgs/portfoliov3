import React, {useEffect} from "react";
import gsap from 'gsap'
import SplitText from '../../utils/Split3.min'
import './style.scss'

export default function About() {
  useEffect(() => {
    const split = new SplitText('.about-me', {
      type: 'lines',
      linesClass: 'lineChildren'
    });

    const splitParent = new SplitText('.about-me', {
      type: 'lines',
      linesClass: 'lineParent'
    });

    gsap.to(split.lines, {
      duration: 1.6,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2"
    })
  }, [])
  return (
    <div class="about-me" id="about-me" data-scroll-section>
      <div>
        <h1 data-scroll>About Me</h1>
        <p data-scroll>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          voluptatem error temporibus exercitationem, quo voluptas harum,
          necessitatibus sunt amet alias distinctio sint, illo corporis velit
          rerum? Inventore veritatis odio magnam? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Pariatur fugit praesentium quis,
          asperiores voluptate saepe sint vero recusandae accusamus magnam
          natus. Quis deserunt porro non soluta minima expedita ab
          reprehenderit!
        </p>
      </div>
    </div>
  );
}
