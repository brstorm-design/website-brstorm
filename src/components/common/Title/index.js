import React from 'react';
import styles from './Title.module.scss';

export default function Title({ children, subTitle = '', mainTitle = '', align = 'left' }) {
  return (
    <div className={styles.title} style={{ textAlign: align }}>
      <div className="container">
        <h4 className="gradient-bg">{subTitle}</h4>
        <h1>{mainTitle}</h1>
        {
          subTitle && mainTitle ? null : (
            {
              children
            }
          )
        }
      </div>
    </div>
  )
}