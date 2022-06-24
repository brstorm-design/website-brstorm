import React, { useEffect, useRef, useState } from 'react';

// brand/default icons
import Autonomy from 'public/images/icons/Replace.svg';
import Support from 'public/images/icons/Feedback.svg';
import Delivery from 'public/images/icons/Target.svg';
import TailorMade from 'public/images/icons/Pen.svg';

// web icons
// import Autonomy from 'public/images/icons/Replace.svg';
// import Support from 'public/images/icons/Feedback.svg';
import Infographic from 'public/images/icons/Infographic.svg';
import Browser from 'public/images/icons/Browser.svg';
import Responsive from 'public/images/icons/Responsive.svg';
import CircularArrows from 'public/images/icons/CircularArrows.svg';
import Scanning from 'public/images/icons/Scanning.svg';
import Connection from 'public/images/icons/Connection.svg';


import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import styles from './WhyUs.module.scss';

export default function WhyUs({ content, pitch, service }) {
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
    0: <Autonomy />,
    1: <Support />,
    2: <TailorMade />,
    3: <Delivery />,
  }

  const webIcons = {
    0: <Infographic />,
    1: <Autonomy />,
    2: <Browser />,
    3: <Support />,
    4: <Responsive />,
    5: <CircularArrows />,
    6: <Scanning />,
    7: <Connection />,
  };

  return (
    <div className={styles.section} id="why-us">
      <div className="container">
        <div className={styles.title}>
          <h1 dangerouslySetInnerHTML={{ __html: content.title }} />
          <p>{content.subtitle}</p>
        </div>
        <div className="row gy-4" ref={element}>
          {
            content.cards.map((item, index) => {
              return (
                <div key={`whyUs-${index}`} className="col-12 col-lg-3">
                  <div className={styles.card}>
                    {
                      service === 'web' ? webIcons[index] : icons[index]
                    }
                    <h5 className={styles.boxBottom}>{item.title}</h5>
                    <small>{item.body}</small>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}