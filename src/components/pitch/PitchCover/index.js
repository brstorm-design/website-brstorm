import React, { useEffect, useRef, useState } from 'react';
import AnchorButton from 'src/components/common/AnchorButton';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import { inOutQuad } from 'src/utils/easings';
import { rootPath } from 'src/utils/env';
import styles from './Cover.module.scss';

export default function PitchCover() {
  const element = useRef(null);
  const refs = [element.current];
  const [animations, setAnimations] = useState(null);

  useEffect(() => {
    let targets = Array.from(element.current.querySelectorAll('img'));
    let opt = {
      duration: 800,
      easing: 'ease',
      fill: 'backwards',
      delay: 0
    };
    let keyframes = {
      opacity: [0, 0.8, 1],
      transform: ['translateY(+200px)', 'initial']
    };

    let textAnimation = constructSequentialAnimation(targets, keyframes, opt, 200)
    setAnimations([textAnimation]);
  }, [])

  useEffect(() => {
    if (animations) {
      handleIntersection(refs, animations);
    }
  }, [animations]);

  return (
    <section className={styles.section}>
      <div className="container p-0">
        <div className="row">
          <div className="col-12">
            <div className={styles.textContent}>
              <h1>{'Let your brand \nspeak for you!'}</h1>
              <h3>{"Your customer's first contact \nwith you is your brand"}</h3>
              <AnchorButton className="btn large ghost" href="#about" easing={inOutQuad} duration={1000}>
                See More
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8333 6L9.89332 5.06L6.16666 8.78V0.666668H4.83332V8.78L1.11332 5.05333L0.166656 6L5.49999 11.3333L10.8333 6Z" fill="#555" /></svg>
              </AnchorButton>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.mosaic} ref={element}>
          <div>
            <img src={`${rootPath}/images/wireframes/cover/480.png`} alt="" />
            <img src={`${rootPath}/images/wireframes/cover/480.png`} alt="" />
          </div>
          <div>
            <img src={`${rootPath}/images/wireframes/cover/320.png`} alt="" />
            <img src={`${rootPath}/images/wireframes/cover/400.png`} alt="" />
          </div>
          <div>
            <img src={`${rootPath}/images/wireframes/cover/480.png`} alt="" />
            <img src={`${rootPath}/images/wireframes/cover/320.png`} alt="" />
          </div>
          <div>
            <img src={`${rootPath}/images/wireframes/cover/480.png`} alt="" />
            <img src={`${rootPath}/images/wireframes/cover/320.png`} alt="" />
          </div>
          <div>
            <img src={`${rootPath}/images/wireframes/cover/480.png`} alt="" />
            <img src={`${rootPath}/images/wireframes/cover/320.png`} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
