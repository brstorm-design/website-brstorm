import React, { useEffect, useRef, useState } from 'react';
import { getMaxHeight } from 'src/modules/App';
import { rootPath } from 'src/utils/env';
import styles from './Timeline.module.scss';
//
// icons
import Strategy from 'public/images/icons/Venn.svg';
import Structure from 'public/images/icons/FlowChart.svg';
import Design from 'public/images/icons/Layers.svg';
import Development from 'public/images/icons/Physics.svg';
import Delivery from 'public/images/icons/Computer.svg';
import Support from 'public/images/icons/Certificate.svg';

export default function Timeline({ steps, service }) {
  const cards = useRef(null);

  useEffect(() => {
    let stackedCards = cards.current.children.length - 1;
    function handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          stackedCards += 1;
          if (stackedCards > 0) {
            for (let index = 0; index < stackedCards; index++) {
              let opacityIndex = (index + stackedCards) - (index * 2);
              cards.current.children[index].className = `stacked-${opacityIndex + 1}`;
            }
          }
        } else {
          stackedCards -= 1;
          let hasPreviousElement = !!entry.target.previousElementSibling;
          if (hasPreviousElement) entry.target.previousElementSibling.className = '';
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

  const icons = [
    Strategy,
    Structure,
    Design,
    Development,
    Delivery,
    Support,
  ];

  let offsets = ['-132', '236', '604', '972', '1340', '1708', '2076', '2444'];

  return (
    <div>
      <div ref={cards} className={`${styles.cards} ${service === 'web' ? styles.web : ''}`} id="cards">
        {
          steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <div key={`step-${index}`} id={`card_step-${index}`}
                data-scroll
                data-scroll-sticky
                data-scroll-repeat
                data-scroll-offset={offsets[index]}
                data-scroll-target="#cards"
              >
                <span style={{ opacity: '0' }} id={`step-${index + 1}`} className={styles.number}>{index + 1}</span>
                <Icon />
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
