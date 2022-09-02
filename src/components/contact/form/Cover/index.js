import React from 'react';
import styles from './Cover.module.scss';

export default function Cover({ content }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.text}>
              <p className="overline gradient-bg">{content.subTitle}</p>
              <h1>{content.title}</h1>
              <small>{content.timeToFill}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
