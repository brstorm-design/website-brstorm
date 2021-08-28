import React, { useEffect, useRef, useState } from 'react';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import styles from './Contact.module.scss';

export default function Contact() {
  const element = useRef(null);
  const refs = [element.current];
  const [animations, setAnimations] = useState(null);

  useEffect(() => {
    let targets = Array.from(element.current.children);
    let opt = {
      duration: 2000,
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
      handleIntersection(refs, animations);
    }
  }, [animations])

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className="row" ref={element}>
          <div className="col-12 col-lg-10 mx-auto">
            <div className={styles.contact}>
              <div>
                <h1>Let's Connect</h1>
                <p>
                  <strong>What did you think?</strong> If you have any doubts to clear
                  or <br className="d-none d-lg-block" /> questions to ask, feel free to schedule a meeting with us.
                </p>
              </div>
              <div>
                <a href="https://calendly.com/br-storm/presentation" target="_blank" rel="noopener noreferrer" className="btn large">Book a Meeting Right Now</a>
                <small><sup>*</sup> We’re available for meeting <br /> Mon to Fri | 10am to 7pm</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}