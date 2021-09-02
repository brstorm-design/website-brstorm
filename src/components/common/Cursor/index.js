import React, { useEffect } from 'react';
import styles from './Cursor.module.scss';

export default function Cursor() {

  useEffect(() => {
    const cursor = document.getElementById('cursor');
    window.onmousemove = e => {
      window.requestAnimationFrame(() => {
        if (e.target.localName === 'a') {
          cursor.style.transform = `translate3d(${e.pageX}px, ${e.pageY}px, 0) scale(20)`;          
        }
        else {
          cursor.style.transform = `translate3d(${e.pageX}px, ${e.pageY}px, 0) scale(10)`;
        }
      })
    }
  }, [])

  return (
    <div id="cursor" className={styles.cursor} />
  )
}