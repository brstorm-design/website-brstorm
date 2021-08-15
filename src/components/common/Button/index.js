import React from 'react';
import styles from './Button.module.scss';

export default function Button(props) {
  if (props.size === 'small') {
    return <button className={`${styles.button} ${styles.small}`}>{props.children}</button>
  }

  if (props.size === 'large') {
    return <button className={`${styles.button} ${styles.large}`}>{props.children}</button>
  }

  else {
    return <button className={styles.button}>{props.children}</button>
  }
}