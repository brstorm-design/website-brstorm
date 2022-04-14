import React from 'react';
import styles from './TextInput.module.scss';

export default function TextInput({ name, type, placeholder, required }) {
  const props = arguments[0];
  
  return (
    <input {...props} className={styles.field} />
  )
}
