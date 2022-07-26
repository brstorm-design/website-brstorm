import React, { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.scss';
import { constructSequentialAnimation, fillPlaceholders, handleIntersection } from 'src/modules/App';
import { rootPath } from 'src/utils/env';
import Arrow from 'public/images/arrow-down.svg';

export default function Hero({ content, common, client }) {
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
  }, [animations]);

  return (
    <section className={styles.section} id="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 d-flex align-items-center order-2 order-lg-1">
            <div ref={element}>
              <h1>
                {
                  `${fillPlaceholders(content.title, { client: 'Fabio e Sara' })}`
                }
              </h1>
              <h4>
                {
                  `${fillPlaceholders(content.subtitle, { business: 'Bronzo' })}`
                }
              </h4>
              <p>{content.text}</p>
              <div className="d-flex d-md-block">
                <a className="btn large" href="https://calendly.com/br-storm/presentation" target="_blank" rel="noopener noreferrer">
                  {common.bookAppointment}
                </a>
                <Link href="#details" scroll={false}>
                  <a className="btn large ghost">
                    {common.seeMore}
                    <Arrow />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 order-1 order-lg-2">
            <img src={`${rootPath}/images/illustrations/venus.png`} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}