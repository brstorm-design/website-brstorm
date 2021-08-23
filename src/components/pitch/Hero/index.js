import React from 'react';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.section} id="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 d-flex align-items-center">
            <div>
              <h1>Hi, Stephenson!</h1>
              <h4>We will bring value to Top King Sausages.</h4>
              <p>We prepared a brief presentation for you to better know us and the solutions we provide. If you are interested, let’s schedule a meeting to talk more.</p>
              <div className="d-flex d-md-block">
                <a className="btn large">Book an Appointment</a>
                <a className="btn large ghost">
                  See More
                  <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8333 6L9.89332 5.06L6.16666 8.78V0.666668H4.83332V8.78L1.11332 5.05333L0.166656 6L5.49999 11.3333L10.8333 6Z" fill="#555" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1">
            <img src="/images/img-placeholder-hero.svg" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}