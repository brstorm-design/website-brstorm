import React, { useEffect, useRef, useState } from 'react';
import { getMaxHeight } from 'src/modules/App';
import { rootPath } from 'src/utils/env';
import styles from './Timeline.module.scss';

export default function Timeline({ steps, service }) {
  const cards = useRef(null);

  useEffect(() => {
    const opacities = [1, 0.5, 0.4, 0.3, 0.2, 0.1];
    let stackedCards = cards.current.children.length - 1;
    function handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          stackedCards += 1;
          if (stackedCards > 0) {
            for (let index = 0; index < stackedCards; index++) {
              let opacityIndex = (index + stackedCards) - (index * 2);
              cards.current.children[index].style.opacity = opacities[opacityIndex];
            }
          }
        } else {
          stackedCards -= 1;
          let hasPreviousElement = !!entry.target.previousElementSibling;
          hasPreviousElement ? entry.target.previousElementSibling.style.opacity = 1 : null;
        }
      });
    }

    const windowHeight = window.innerHeight;
    let margin = 100;
    cards.current.childNodes.forEach(element => {
      margin += 32;
      let observer = new IntersectionObserver(handleIntersection, {
        rootMargin: `0px 0px -${windowHeight - margin}px 0px`,
      });
      observer.observe(element);
    });
  }, []);

  return (
    <div>
      <div ref={cards} className={`${styles.cards} ${service === 'web' ? styles.web : ''}`} >
        {
          steps.map((step, index) => {
            return (
              <div key={`step-${index}`} id={`card_step-${index}`} style={{ opacity: 1 }}>
                <span style={{ opacity: '0' }} id={`step-${index + 1}`} className={styles.number}>{index + 1}</span>
                <img src={`${rootPath}/images/icons/${step.icon}`} alt="" />
                <h5>{step.name}</h5>
                <small>{step.text}</small>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
