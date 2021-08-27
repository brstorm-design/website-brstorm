import React, { useEffect } from 'react';
import styles from './Cursor.module.scss';

export default function Cursor() {

  useEffect(() => {
    

    window.addEventListener('mousemove', e => {
      console.log(e.pageX);
      console.log(e.pageY);
    })
  }, [])

  return (
    <svg className={styles.cursor} width="20" height="20" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.5" cy="8.39331" r="4.8033" transform="rotate(135 7.5 8.39331)" stroke="white" />
      <path d="M4.47529 12.1251L11.2318 5.3686C12.7647 7.25509 12.6529 10.0333 10.8964 11.7898C9.14003 13.5462 6.36178 13.658 4.47529 12.1251Z" fill="white" stroke="white" />
    </svg>
  )
}