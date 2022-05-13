import React from 'react';
import styles from './FilledFields.module.scss';

export default function FilledFields({ filled, total }) {
  return (
    <div className={styles.filledFields}>
      <small><strong>2</strong> / 6</small>
      <small>Campos Respondidos</small>
    </div>
  )
}
