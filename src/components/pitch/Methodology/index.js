import React, { useEffect } from 'react';
import styles from './Methodology.module.scss';

export default function Methodology({ content }) {
  let thres = [];
  for (let index = 0; index <= 1.0; index = index + 0.01) {
    thres.push(index);
  }

  const lineOptions = {
    rootMargin: '10000px 0px -50% 0px',
    threshold: thres,
  }
  const activeOptions = {
    rootMargin: '-20% 0px -66% 0px',
  }

  useEffect(() => {
    /* line IntersectionObserver */
    const lineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.nextElementSibling.style.height = `calc(${entry.intersectionRatio * 100}% * 8.6)`;
        }
      })
    }, lineOptions);

    const line = document.querySelector(`.${styles.line}.lineBase`);
    lineObserver.observe(line);

    /* active class IntersectionObserver */
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.active);
        } else {
          entry.target.classList.remove(styles.active);
        }
      })
    }, activeOptions);

    let cardList = document.querySelectorAll(`.${styles.cards} > div`);
    cardList.forEach(card => {
      activeObserver.observe(card);
    })

    return () => {
      lineObserver.unobserve(line);
      cardList.forEach(card => activeObserver.unobserve(card))
    }
  }, [])

  function Line() {
    return (
      <>
        <div className={`${styles.line} lineBase`} />
        <div className={styles.line} />
      </>
    )
  }

  return (
    <section className={styles.section}>
      <div>
        <h3 className="gradient-bg">{content.subtitle}</h3>
        <h1>{content.title}</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src="/images/wireframes/method.svg" className={`${styles.image} img-fluid`} alt="Method" />
          </div>
          <div className="col-12 col-lg-4 offset-lg-2">
            <div>
              <div className={styles.cards}>
                {
                  content.steps.map((step, index) => {
                    return (
                      <div key={`step-${index}`}>
                        <span className={styles.number}>{index + 1}</span>
                        <img src={`/images/wireframes/${step.icon}`} alt="" />
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