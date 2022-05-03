import React, { useEffect, useRef, useState } from 'react';
import { getMaxHeight } from 'src/modules/App';
import { rootPath } from 'src/utils/env';
import styles from './Timeline.module.scss';

export default function Timeline({ steps, service }) {
  const [lineHeight, setLineHeight] = useState(0);
  const line = useRef(null);
  const cards = useRef(null);

  function Line() {
    return <div
      ref={line}
      style={{ opacity: '0' }}
      className={styles.line}
    />
  }

  let screenCenter;
  let target;
  let maxLineHeight;
  let numbers;
  let cardList;

  function handleScroll() {
    /* cardList.forEach((card, index) => {
      let cardTopOffset = card.getBoundingClientRect().top;
      if (Math.ceil(cardTopOffset) === offsets[index]) {
        card.previousElementSibling?.classList.add(`opacity-${index}`);
      } else {
        card.previousElementSibling?.classList.remove(`opacity-${index}`);
      }
    }) */
    /* const top = document.querySelector(`.${styles.cards}`).getBoundingClientRect().top;
    const lineBottom = line.current.getBoundingClientRect().bottom;
    let height = screenCenter - top;
    if (top < screenCenter && height < (maxLineHeight + 50)) {
      setLineHeight(height);
    }

    numbers.forEach((number, index) => {
      let margin;
      index === 0 ? margin = 50 : margin = 0;
      // 👆 adicionando uma margem de 100px para o primeiro elemento ficar ativo
      if (number.getBoundingClientRect().top + margin < lineBottom) {
        number.parentElement.classList.add(styles.active);
      } else {
        number.parentElement.classList.remove(styles.active);
      }
    }); */
  }

  useEffect(() => {
    cardList = document.querySelectorAll(`.${styles.cards} > div`);
    //
    screenCenter = window.innerHeight / 2;
    target = document.querySelector(`.${styles.line}:last-child`);
    maxLineHeight = getMaxHeight(cardList);
    numbers = document.querySelectorAll(`.${styles.cards} > div span`);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [screenCenter, target]);

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
          entry.target.previousElementSibling?.style.opacity = 1;
        }
        /* let id = entry.target.id;
        if (id.substring(id.length - 1) === '5') {
          console.log(entry);
          cards.current.childNodes.forEach(element => {
            element.style.position = entry.isIntersecting ? 'sticky' : 'absolute';
          })
        } */
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

    /* return function cleanup() {
      cards.current.childNodes.forEach(element => {
        observer.unobserve(element);
      });
    } */

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
                {index === 0 ? <Line /> : null}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
