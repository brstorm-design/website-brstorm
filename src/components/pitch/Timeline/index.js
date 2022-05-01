import React, { useEffect, useRef, useState } from 'react';
import { getMaxHeight } from 'src/modules/App';
import { rootPath } from 'src/utils/env';
import styles from './Timeline.module.scss';

export default function Timeline({ steps, service }) {
  const [lineHeight, setLineHeight] = useState(0);
  const line = useRef(null);

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
    cardList.forEach((card, index) => {
      let cardTopOffset = card.getBoundingClientRect().top;
      if (Math.ceil(cardTopOffset) === offsets[index]) {
        card.previousElementSibling?.classList.add(`opacity-${index}`);
      } else {
        card.previousElementSibling?.classList.remove(`opacity-${index}`);
      }
    })
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

  /* function handleIntersection(entries) {
    entries.forEach(entry => {
      console.log(entry);
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    document.querySelectorAll(`.${styles.cards} > div`).forEach(element => observer.observe(element));
  }, []); */

  let offsets = [
    132,
    164,
    196,
    228,
    260,
    292,
  ]

  return (
    <div>
      <div className={`${styles.cards} ${service === 'web' ? styles.web : ''}`}>
        {
          steps.map((step, index) => {
            return (
              <div key={`step-${index}`}>
                <span style={{ opacity: '0'}} id={`step-${index + 1}`} className={styles.number}>{index + 1}</span>
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
