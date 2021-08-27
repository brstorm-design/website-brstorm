import React, { useEffect, useRef, useState } from 'react';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import styles from './Purpose.module.scss';

export default function Purpose() {
  const element = useRef(null);
  const refs = [element.current];
  const [animations, setAnimations] = useState(null);

  useEffect(() => {
    let targets = Array.from(element.current.children);
    let opt = {
      duration: 1200,
      easing: 'ease',
      fill: 'both',
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

  /* useEffect(() => {
    function cleanup() {
      document.getElementById('purpose').removeEventListener('mousemove', e => {
        getMousePos(e);
      })
    }

    document.getElementById('purpose').addEventListener('mousemove', e => {
      getMousePos(e);
    })

    return cleanup();
  }, [])

  function getMousePos(e) {
    let track = document.querySelector('#purpose img[alt="comment"]');
    let relX = (e.offsetX * 100) / document.getElementById('purpose').clientWidth;
    let relY = (e.offsetY * 100) / document.getElementById('purpose').clientHeight;
    let translateX1 =  (((50 * relX) / 100) - 25);
    let translateY1 =  (((50 * relY) / 100) - 25);

    window.requestAnimationFrame(() => {
      track.style.transform = `translateX(${translateX1}px) translateY(${translateY1}px)`;
    })
  } */

  return (
    <section className={styles.section} id="purpose">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={styles.image}>
              <div>
                <img src="/images/purpose/david.png" alt="david" />
                <svg id="color" width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g style={{ mixBlendMode: 'overlay' }}><rect width="150" height="40" fill="#E93CAC" /></g><g style={{ mixBlendMode: 'multiply' }}><rect width="150" height="40" fill="#E93CAC" /></g></svg>
                <img src="/images/purpose/seal.svg" alt="seal" />
                <img src="/images/purpose/comment-michelangelo.svg" alt="comment" />
                <img src="/images/purpose/pattern.svg" alt="pattern" />
                <img src="/images/purpose/pin.svg" alt="pin" />
                <img src="/images/purpose/exploring-the-infinite.svg" alt="exploring-the-infinite" />
                <div>
                  <object id="obj" data="/images/purpose/words.svg" type="text/svg+xml" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1 d-flex align-items-center">
            <article ref={element}>
              <h2>What is Our Purpose</h2>
              <div>
                <p>
                  We're passionate about going deep and thinking about every detail,
                  thus <strong>exploring the infinite possibilities of Design</strong>.
                  That's the spirit that rules our work.
                  <br />
                  <br />
                  In such a stormy world, less is more. Having <strong>clear and
                    assertive communication</strong> is essential to stand out.
                  We specialize in creating unique and memorable projects
                  exploring the best in each business. <strong>Let's do a
                    remarkable project?</strong>
                </p>
              </div>
              <a className="btn large ghost">
                Contact Us
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8333 6L9.89332 5.06L6.16666 8.78V0.666668H4.83332V8.78L1.11332 5.05333L0.166656 6L5.49999 11.3333L10.8333 6Z" fill="#555" /></svg>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}