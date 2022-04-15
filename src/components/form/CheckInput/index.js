import React from 'react';
import styles from './CheckInput.module.scss';

export default function CheckInput({ name, type, required }) {
  const props = arguments[0];

  return (
    <input {...props} className={styles.input} id={name} />
  )
}
