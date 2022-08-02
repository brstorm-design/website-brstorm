import React, { useEffect, useRef, useState } from 'react';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import styles from './Projects.module.scss';
import Mosaic from './Mosaic';
import Slider from './Slider';
import Stairs from './Stairs';
import SliderScroll from './SliderScroll';


export default function Projects({ layout, content, allProjects, common }) {
  const introText = useRef(null);
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const refs = [introText.current];
    let dur = 1200;
    let delay = 0;
    refs.forEach(ref => {
      let targets = Array.from(ref.children);
      let opt = {
        duration: dur,
        easing: 'cubic-bezier(0.27, 0.6, 0.12, 1.02)',
        fill: 'both',
        delay: delay
      };
      let keyframes = {
        opacity: [0, 1],
        transform: [`translateY(+500px)`, 'initial']
      };
      dur += 1000;
      delay += 700;

      let entranceAnimation = constructSequentialAnimation(targets, keyframes, opt, 200);
      setAnimations(oldArray => [...oldArray, entranceAnimation]);
    });
  }, [])

  useEffect(() => {
    const refs = [introText.current];
    if (animations) {
      handleIntersection(refs, animations);
    }
  }, [animations])

  const filteredProjects = allProjects.filter(project => {
    return content.portfolio.some(client => client === project.slug);
  });

  function renderProjects() {
    switch (layout) {
      case 'mosaic':
        return <Mosaic content={content} portfolio={filteredProjects} common={common} />;
      case 'scroll':
        return <SliderScroll content={content} portfolio={filteredProjects} common={common} />;
      case 'slider':
        return <Slider content={content} portfolio={filteredProjects} />;
      case 'stairs':
        return <Stairs content={content} portfolio={filteredProjects} common={common} />;
    }
  }

  return (
    <div className={styles.section} id="projects">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mx-auto">
            <div className={styles.intro} ref={introText} id="projects-text">
              <h4 className="gradient-bg">{content.subtitle}</h4>
              <h1>{content.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: content.paragraph }} />
            </div>
          </div>
        </div>
      </div>
      {
        renderProjects()
      }
    </div>
  )
}