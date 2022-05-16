import React, { useEffect } from 'react';
import styles from './FormQuestion.module.scss';

export default function FormQuestion({ children, title, helperText, required, name, type, id }) {
  name === '' ? name = '_____' : name = name;
  const display = type === 'checkbox' ? 'none' : 'inline-block';

  return (
    <div className={styles.question} id={id}>
      <h3>{name ? name : ''}{title} {required ? '' : <small style={{display: display}}>(Opcional)</small>}</h3>
      {children}
      {helperText && <small>{helperText}</small>}
    </div>
  )
}
