import React, { useEffect, useRef, useState } from 'react';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import styles from './WhyUs.module.scss';

export default function WhyUs({ content }) {
  const element = useRef(null);
  const refs = [element.current];
  const [animations, setAnimations] = useState(null);

  useEffect(() => {
    let targets = Array.from(element.current.children);
    let opt = {
      duration: 1000,
      easing: 'cubic-bezier(0.02, 0.62, 0.04, 1.01)',
      fill: 'backwards',
      delay: 0
    };
    let keyframes = {
      opacity: [0, 1],
      transform: ['translateY(+800px)', 'initial']
    };

    let textAnimation = constructSequentialAnimation(targets, keyframes, opt, 100)
    setAnimations([textAnimation]);
  }, [])

  useEffect(() => {
    if (animations) {
      handleIntersection(refs, animations);
    }
  }, [animations])

  return (
    <section className={styles.section} id="why-us">
      <div className={styles.title}>
        <h1 />
        <p>We always strive for the best, in everything <br /> we do we always focus on delivering:</p>
      </div>
      <div className="container">
        <div className="row gy-4 gy-md-0" ref={element}>
          {
            content.map((item, index) => {
              return (
                <div key={`whyUs-${index}`} className="col-12 col-lg-3">
                  <div className={styles.card}>
                    <img src={item.image} alt="" />
                    <h5>{item.title}</h5>
                    <small>{item.body}</small>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}