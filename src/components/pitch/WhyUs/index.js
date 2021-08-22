import React from 'react';
import styles from './WhyUs.module.scss';

export default function WhyUs({ content }) {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1 />
        <p>We always strive for the best, in everything <br /> we do we always focus on delivering:</p>
      </div>
      <div className="container">
        <div className="row gy-4 gy-md-0">
          {
            content.map((item, index) => {
              return (
                <div key={`whyUs-${index}`} className="col-12 col-lg-3">
                  <div className={styles.card}>
                    <img src={item.image} alt="" />
                    <h5>{item.title}</h5>
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