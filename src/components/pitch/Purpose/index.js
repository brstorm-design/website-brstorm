import React, { useEffect, useRef, useState } from 'react';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import styles from './Purpose.module.scss';

export default function Purpose({content, common}) {
  const element = useRef(null);
  const element1 = useRef(null);
  const refs = [element.current, element1.current];
  const [animations, setAnimations] = useState(null);

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
      const onEnd = animation => {
        const localName = animation.effect.target.localName;
        if (localName === 'h2') {
          document.getElementById('color').classList.add('active');
          document.getElementById('obj').contentDocument.firstChild.classList.add('active');
        }
      }
      handleIntersection(refs, animations, onEnd);
    }
  }, [animations])

  function move(e) {
    let relX = (e.clientX * 100) / window.innerWidth;
    let relY = (e.clientY * 100) / window.innerHeight;
    let translateX1 = - (((40 * relX) / 100) - 20);
    let translateY1 = - (((40 * relY) / 100) - 20);
    let translateX2 = (((40 * relX) / 100) - 20);
    let translateY2 = (((40 * relY) / 100) - 20);

    window.requestAnimationFrame(() => {
      let comment = document.querySelector('img[alt="comment"]');
      let writing  = document.querySelector('img[alt="writing"]');
      comment.style.transform = `translate3d(${translateX1}px, ${translateY1}px, 0)`;
      writing.style.transform = `translate3d(${translateX2}px, ${translateY2}px, 0)`;
    })
  }

  return (
    <section className={styles.section} id="purpose" onMouseMove={move}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={styles.image}>
              <div ref={element1} id="purpose-image">
                <img src="/images/purpose/david.png" alt="david" />
                <svg id="color" width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g style={{ mixBlendMode: 'overlay' }}><rect width="150" height="40" fill="#E93CAC" /></g><g style={{ mixBlendMode: 'multiply' }}><rect width="150" height="40" fill="#E93CAC" /></g></svg>
                <img src="/images/purpose/seal.svg" alt="seal" />
                <img src="/images/purpose/comment-michelangelo.svg" alt="comment" />
                <img src="/images/purpose/pattern.svg" alt="pattern" />
                <img src="/images/purpose/pin.svg" alt="pin" />
                <img src="/images/purpose/exploring-the-infinite.svg" alt="writing" />
                <div>
                  <object id="obj" data="/images/purpose/words.svg" type="text/svg+xml" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1 d-flex align-items-center">
            <article ref={element} id="purpose-article">
              <h2>{content.title}</h2>
              <div dangerouslySetInnerHTML={{__html: content.paragraph}} />
              <a className="btn large ghost" href="#contact">
                {common.contactUs}
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8333 6L9.89332 5.06L6.16666 8.78V0.666668H4.83332V8.78L1.11332 5.05333L0.166656 6L5.49999 11.3333L10.8333 6Z" fill="#555" /></svg>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}