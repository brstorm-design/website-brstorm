import React, { useEffect, useRef, useState } from 'react';
import { constructSequentialAnimation, getTranslateValue, handleIntersection } from 'src/modules/App';
import styles from './Purpose.module.scss';
import David from 'src/components/illustrations/David';
import Arrow from 'public/images/arrow-down.svg';
import Link from 'next/link';

export default function Purpose({ content, common }) {
  const element = useRef(null);
  const element1 = useRef(null);
  const refs = [element.current, element1.current];
  const [animations, setAnimations] = useState(null);
  const [mousePosition, setMousePosition] = useState(null);

  useEffect(() => {
    let targets = Array.from(element.current.children);
    let opt = {
      duration: 1200,
      easing: 'ease',
      fill: 'backwards',
      delay: 0
    };
    let keyframes = {
      opacity: [0, 1],
      transform: ['translateY(-50px)', 'initial']
    };

    let textAnimation = constructSequentialAnimation(targets, keyframes, opt, 600)
    setAnimations([textAnimation]);
  }, [])

  useEffect(() => {
    if (animations) {
      handleIntersection(refs, animations);
    }
  }, [animations])

  function move(e) {
    setMousePosition(getTranslateValue(e, [40]));
  }

  return (
    <div className={styles.section} id="purpose" onMouseMove={move}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <David forwardedRef={element1} translate={mousePosition} />
          </div>
          <div className="col-12 col-lg-5 offset-lg-1 d-flex align-items-center">
            <article ref={element} id="purpose-article">
              <h2>{content.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: content.paragraph }} />
              <Link href="#contact" scroll={false}>
                <a className="btn large ghost">
                  {common.contactUs}
                  <Arrow />
                </a>
              </Link>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}