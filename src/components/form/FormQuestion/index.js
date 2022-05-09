import React from 'react';
import styles from './FormQuestion.module.scss';

export default function FormQuestion({ children, title, helperText, required }) {
  return (
    <div className={styles.question}>
      <h3>{title} {required ? '' : <small>(Opcional)</small>}</h3>
      {children}
      {helperText && <small>{helperText}</small>}
    </div>
  )
}
