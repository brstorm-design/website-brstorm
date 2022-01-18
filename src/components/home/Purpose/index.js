import React, { useEffect, useRef, useState } from 'react';
import AnchorButton from 'src/components/common/AnchorButton';
import { constructSequentialAnimation, getTranslateValue, handleIntersection } from 'src/modules/App';
import styles from './Purpose.module.scss';
import { inOutQuad } from 'src/utils/easings';
import David from 'src/components/illustrations/David';
import Arrow from 'public/images/arrow-down.svg';

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
    <section className={styles.section} id="purpose" onMouseMove={move}>
      <Arrow className="asdasd" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <David forwardedRef={element1} translate={mousePosition} />
          </div>
          <div className="col-12 col-lg-5 offset-lg-1 d-flex align-items-center">
            <article ref={element} id="purpose-article">
              <h2>{content.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: content.paragraph }} />
              <AnchorButton className="btn large ghost" easing={inOutQuad} duration={3000} href="#contact">
                {common.contactUs}
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8333 6L9.89332 5.06L6.16666 8.78V0.666668H4.83332V8.78L1.11332 5.05333L0.166656 6L5.49999 11.3333L10.8333 6Z" fill="#555" /></svg>
              </AnchorButton>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}