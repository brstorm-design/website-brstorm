import React from 'react';
import styles from './AddOns.module.scss';

export default function AddOns({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.row}>
              <div>
                <h2>{content.title}</h2>
                <p className="details">{content.text}</p>
              </div>
              <div>
                <h3>{content.blog.title}</h3>
                <p className="details">{content.blog.body}</p>
              </div>
              <div>
                <h3>{content.langs.title}</h3>
                <p className="details">{content.langs.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
