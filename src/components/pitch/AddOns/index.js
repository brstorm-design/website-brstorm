import React from 'react';
import styles from './AddOns.module.scss';

export default function AddOns({ content }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.row}>
          <div>
            <h3>{content.title}</h3>
            <p className="details">{content.text}</p>
          </div>
          <div>
            <h6>{content.blog.title}</h6>
            <p className="details">{content.blog.body}</p>
          </div>
          <div>
            <h6>{content.langs.title}</h6>
            <p className="details">{content.langs.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
