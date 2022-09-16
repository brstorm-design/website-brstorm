import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import styles from './Contact.module.scss';

export default function Contact({ content, common, short }) {
  console.log('short:', short);
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
    <div className={styles.section + short ? ' short' : ''} id="contact">
      <div className="container">
        <div className="row" ref={element}>
          <div className="col-12 col-lg-10 mx-auto">
            <div className={styles.contact} data-short={short ? true : null}>
              <div>
                <h2>{content.title}</h2>
                {!short && <p dangerouslySetInnerHTML={{ __html: content.paragraph }} />}
              </div>
              <div>
                <Link href="/form/contact">
                  <a className="btn large">
                    {short ? 'Solicitar uma Proposta' : common.bookMeeting}
                  </a>
                </Link>
                {!short && <small dangerouslySetInnerHTML={{ __html: content.availableHours }} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}