import React from 'react';
import styles from './Methodology.module.scss';

export default function Methodology({ content }) {
  return (
    <section className={styles.section}>
      <div>
        <h3 className="gradient-bg">{content.subtitle}</h3>
        <h1>{content.title}</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src="/images/wireframes/method.svg" className={styles.image} alt="Method" />
          </div>
          <div className="col-12 col-lg-4 offset-lg-2">
            <div>
              <div className={styles.cards}>
                {
                  content.steps.map((step, index) => {
                    return (
                      <div key={`step-${index}`}>
                        <img src={`/images/wireframes/${step.icon}`} alt="" />
                        <h5>{step.name}</h5>
                        <small>{step.text}</small>
                      </div>
                    )
                  })
                }
                <div className={styles.line} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}