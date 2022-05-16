import React from 'react';
import styles from './Cover.module.scss';

export default function Cover({ content }) {
  return (
    <section className={styles.section}>
      <div>
        <h3 className="gradient-bg">{content.subTitle}</h3>
        <h1>{content.title}</h1>
        <small>{content.timeToFill}</small>
      </div>
    </section>
  )
}
