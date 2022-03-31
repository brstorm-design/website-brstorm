import React, { useEffect, useRef, useState } from 'react';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import styles from './Projects.module.scss';
import Mosaic from './Mosaic';
import Slider from './Slider';


export default function Projects({ content, common, client, mt, mb }) {
  const introText = useRef(null);
  const [animations, setAnimations] = useState([]);

  const portifolio = client ? client.portifolio : content.portifolio;

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


  return (
    <section style={{marginTop: `${mt}px`, marginBottom: `${mb}px`}} className={styles.section} id="projects">
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
        <Mosaic content={content} common={common} portifolio={portifolio} />
        {/* <Slider content={content} /> */}
      </div>
    </section>
  )
}