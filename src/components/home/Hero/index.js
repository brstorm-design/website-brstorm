import React, { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.scss';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';

export default function Hero({content, common}) {
  const element = useRef(null);
  const refs = [element.current];
  const [animations, setAnimations] = useState(null);

  useEffect(() => {
    let target1 = Array.from(element.current.children).slice(0, 3);
    let target2 = Array.from(element.current.children[3].children);

    let opt = {
      duration: 800,
      easing: 'ease',
      fill: 'both',
      delay: 0
    };
    let keyframes = {
      opacity: [0, 1],
      transform: ['translateY(+100px)', 'initial']
    };

    let textAnimation = constructSequentialAnimation(target1, keyframes, opt, 200);
    opt.delay += opt.duration;
    let buttonAnimation = constructSequentialAnimation(target2, keyframes, opt, 250);

    setAnimations([textAnimation, buttonAnimation]);
  }, [])

  useEffect(() => {
    if (animations) {
      handleIntersection(refs, animations);
    }
  }, [animations])

  

  return (
    <section className={styles.section} id="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 d-flex align-items-center">
            <div ref={element}>
              <h1>{content.title + '"Client Name"!'}</h1>
              <h4>{content.subtitle + '"Business Name".'}</h4>
              <p>{content.text}</p>
              <div className="d-flex d-md-block">
                <a className="btn large">{common.bookAppointment}</a>
                <a className="btn large ghost">
                  {common.seeMore}
                  <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8333 6L9.89332 5.06L6.16666 8.78V0.666668H4.83332V8.78L1.11332 5.05333L0.166656 6L5.49999 11.3333L10.8333 6Z" fill="#555" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1">
            <img src="/images/wireframes/hero.svg" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}