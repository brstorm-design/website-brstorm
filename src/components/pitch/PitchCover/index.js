import React, { useEffect, useRef, useState } from 'react';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import { rootPath } from 'src/utils/env';
import styles from './Cover.module.scss';
import Arrow from 'public/images/arrow-down.svg';
import Link from 'next/link';

export default function PitchCover({ content, common }) {
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
              <Link href="#contact" scroll={false}>
                <a className="btn large ghost">
                  {common.seeMore}
                  <Arrow />
                </a>
              </Link>
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
