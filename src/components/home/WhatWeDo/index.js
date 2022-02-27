import React, { useEffect, useRef, useState } from 'react';
import Samothrace from 'src/components/illustrations/Samothrace';
import { constructSequentialAnimation, getTranslateValue, handleIntersection } from 'src/modules/App';
import styles from './WhatWeDo.module.scss';

export default function WhatWeDo({ content, common }) {
  const element = useRef(null);
  const [mousePosition, setMousePosition] = useState(null);
  /* const [animations, setAnimations] = useState([]);

  useEffect(() => {
    let articles = Array.from(element.current.children);
    articles.forEach(art => {
      let target1 = Array.from(art.children).slice(0, 3);
      let target2 = Array.from(art.children).slice(3);

      let opt = {
        duration: 800,
        easing: 'cubic-bezier(0.02, 0.62, 0.04, 1.01)',
        fill: 'both',
        delay: 0
      };
      let keyframes = {
        opacity: [0, 1],
        transform: ['translateY(+100px)', 'initial']
      };

      let introAnimation = constructSequentialAnimation(target1, keyframes, opt, 200);
      opt.delay += opt.duration;
      keyframes.transform = ['translateX(+150px)', 'initial']
      let listAnimation = constructSequentialAnimation(target2, keyframes, opt, 200);

      setAnimations(oldArrray => [...oldArrray, introAnimation, listAnimation]);
    })
  }, [])

  useEffect(() => {
    if (animations && animations.length > 3) {
      handleIntersection(Array.from(element.current.children), animations);
    }
  }, [animations]) */

  function move(e) {
    setMousePosition(getTranslateValue(e, [-40, 40]));
  }

  return (
    <section className={styles.section} id="what-we-do" onMouseMove={move}>
      <div className="container">
        <div className={`d-none d-lg-block ${styles.title}`}>
          <h3 className="gradient-bg">{content.subtitle}</h3>
          <h1>{content.title}</h1>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Samothrace translateValues={mousePosition} />
            <div className={`d-block d-lg-none ${styles.title}`}>
              <h3 className="gradient-bg">{content.subtitle}</h3>
              <h1>{content.title}</h1>
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1" ref={element}>
            {
              content.services.map((service, index) => {
                return (
                  <article key={`article-${index}`} id={`art${index + 1}`}>
                    <h2>{service.title}</h2>
                    <h4>{service.subtitle}</h4>
                    <p dangerouslySetInnerHTML={{ __html: service.paragraph }} />
                    {
                      service.features.map((feature, index) => {
                        return (
                          <div key={`feat-${index}`}>
                            <h5>{feature.title}</h5>
                            <small>{feature.description}</small>
                          </div>
                        )
                      })
                    }
                    <a href="#">
                      {common.seeMore}
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 0L4.11875 0.88125L7.60625 4.375H0V5.625H7.60625L4.11875 9.11875L5 10L10 5L5 0Z" fill="#555555" /></svg>
                    </a>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}