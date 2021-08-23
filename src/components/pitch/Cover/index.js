import {React, useEffect} from 'react';
import styles from './Cover.module.scss';

export default function Cover() {
  useEffect(() => {
    window.onmousemove = e => {
      getMousePos(e);
    }

    return function cleanup() {
      window.onmousemove = null;
    }
  }, [])

  function getMousePos(e) {
    let relX = (e.pageX * 100) / window.innerWidth;
    let relY = (e.pageY * 100) / window.innerHeight;
    let translateX1 = (10 * relX) / 100;
    let translateY1 = (10 * relY) / 100;
    let translateX2 = (20 * relX) / 100;
    let translateY2 = (20 * relY) / 100;

    window.requestAnimationFrame(() => {
      document.querySelectorAll('#cover-section img').forEach(element => {
        element.style.transform = `translateX(${translateX1}px) translateY(${translateY1}px)`;
      })
      document.getElementById('asd').style.transform = `translateX(-${translateX2}px) translateY(-${translateY2}px)`;
    })
  }

  return (
    <section className={styles.section} id="cover-section">
      <div className="container">

      <img className={styles.topLeft} src="/images/cover/ph-top-left.svg" alt="" />
      <img className={styles.topRight} src="/images/cover/ph-top-right.svg" alt="" />
      <img className={styles.bottomLeft} src="/images/cover/ph-bottom-left.svg" alt="" />
      <img className={styles.bottomRight} src="/images/cover/ph-bottom-right.svg" alt="" />

        <div className="row">
          <div className="col-12 col-lg-9">
            <div className={styles.content} id="asd">
              <h1>Let your brand speak for you!</h1>
              <h4>Your customer's first contact with you is your brand.</h4>
              <a className="btn large ghost">
                See More
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8333 6L9.89332 5.06L6.16666 8.78V0.666668H4.83332V8.78L1.11332 5.05333L0.166656 6L5.49999 11.3333L10.8333 6Z" fill="#555"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}