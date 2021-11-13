import React from 'react';
import David from 'src/components/illustrations/David';
import styles from './Details.module.scss';

export default function Details({content}) {
  return (
    <section className={styles.section} id="details">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <David />
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 d-flex align-items-center">
            <article>
              <h1>{content.title}</h1>
              <h3>{content.subtitle}</h3>
              <div dangerouslySetInnerHTML={{__html: content.text}} />
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}