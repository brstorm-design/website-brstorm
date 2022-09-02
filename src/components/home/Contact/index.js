import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import styles from './Contact.module.scss';

export default function Contact({ content, common }) {
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
    <div className={styles.section} id="contact">
      <div className="container">
        <div className="row" ref={element}>
          <div className="col-12 col-lg-10 mx-auto">
            <div className={styles.contact}>
              <div>
                <h2>{content.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: content.paragraph }} />
              </div>
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=5551989836186&text=Quer%20marcar%20uma%20reuni%C3%A3o?%20Solicite%20um%20hor%C3%A1rio%20e%20vamos%20conversar."
                  rel="noopener noreferrer"
                  className="btn large whatsapp-contact"
                >
                  {common.bookMeeting}
                </a>
                <small dangerouslySetInnerHTML={{ __html: content.availableHours }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}