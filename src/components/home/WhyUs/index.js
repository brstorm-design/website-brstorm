import React, { useEffect, useRef, useState } from 'react';
import Autonomy from 'src/components/svg/reasons/Autonomy';
import Delivery from 'src/components/svg/reasons/Delivery';
import Support from 'src/components/svg/reasons/Support';
import TailorMade from 'src/components/svg/reasons/TailorMade';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import styles from './WhyUs.module.scss';

export default function WhyUs({ content, pitch }) {
  const element = useRef(null);
  const refs = [element.current];
  const [animations, setAnimations] = useState(null);

  useEffect(() => {
    let targets = Array.from(element.current.children);
    let opt = {
      duration: 1000,
      easing: 'cubic-bezier(0.02, 0.62, 0.04, 1.01)',
      fill: 'backwards',
      delay: 0
    };
    let keyframes = {
      opacity: [0, 1],
      transform: ['translateY(+800px)', 'initial']
    };

    let textAnimation = constructSequentialAnimation(targets, keyframes, opt, 100)
    setAnimations([textAnimation]);
  }, [])

  useEffect(() => {
    if (animations) {
      handleIntersection(refs, animations);
    }
  }, [animations]);

  const icons = {
    0: <Autonomy styles={styles} />,
    1: <Support styles={styles} />,
    2: <TailorMade styles={styles} />,
    3: <Delivery styles={styles} />,
  }

  return (
    <section className={styles.section} id="why-us">
      <div className={styles.title}>
        <h1 dangerouslySetInnerHTML={{__html: content.title}} />
        <p>{content.subtitle}</p>
      </div>
      <div className="container">
        <div className="row gy-4 gy-md-0" ref={element}>
          {
            content.cards.map((item, index) => {
              return (
                <div key={`whyUs-${index}`} className="col-12 col-lg-3">
                  <div className={styles.card}>
                    { icons[index] }
                    <h5 className={styles.boxBottom}>{item.title}</h5>
                    <small>{item.body}</small>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}