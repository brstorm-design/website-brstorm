import React from 'react';
import styles from './Body.module.scss';

export default function ProjectBody({ children }) {
  return (
    <div className={`${styles.container} container`}>
      { children }
    </div>
  )
}
