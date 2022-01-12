import React, { useEffect, useRef, useState } from 'react';
import Samothrace from 'src/components/illustrations/Samothrace';
import { getMaxHeight, getTranslateValue } from 'src/modules/App';
import styles from './Methodology.module.scss';

export default function Methodology({ content }) {
  const [mousePosition, setMousePosition] = useState(null);
  const [lineHeight, setLineHeight] = useState(0);
  const line = useRef(null);

  function Line() {
    return <div ref={line} style={{ height: `${lineHeight}px` }} className={styles.line} />
  }

  function move(e) {
    setMousePosition(getTranslateValue(e, [-40, 40]));
  }

  let screenCenter;
  let target;
  let maxLineHeight;
  let numbers;

  function handleScroll() {
    const el = document.querySelector(`.${styles.cards}`);
    const top = el.getBoundingClientRect().top;
    const lineBottom = line.current.getBoundingClientRect().bottom;
    let height = screenCenter - top;
    if (top < screenCenter && height < maxLineHeight) {
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
    });
  }

  useEffect(() => {
    const cardList = document.querySelectorAll(`.${styles.cards} > div`);
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

  return (
    <section className={styles.section} onMouseMove={move}>
      <div>
        <h3 className="gradient-bg">{content.subtitle}</h3>
        <h1>{content.title}</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className={`col-12 col-lg-6 ${styles.illustration}`}>
            <Samothrace translateValues={mousePosition} />
          </div>
          <div className="col-12 col-lg-4 offset-lg-2">
            <div>
              <div className={styles.cards}>
                {
                  content.steps.map((step, index) => {
                    return (
                      <div key={`step-${index}`}>
                        <span id={`step-${index + 1}`} className={styles.number}>{index + 1}</span>
                        {/* <img src={`/images/wireframes/img-icon.svg`} alt="" /> */}
                        <h5>{step.name}</h5>
                        <small>{step.text}</small>
                        {index === 0 ? <Line /> : null}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}