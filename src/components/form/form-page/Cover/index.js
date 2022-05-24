import React from 'react';
import styles from './Cover.module.scss';

export default function Cover({ content }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.text}>
              <h4 className="gradient-bg">{content.subTitle}</h4>
              <h1>{content.title}</h1>
              <small>{content.timeToFill}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
