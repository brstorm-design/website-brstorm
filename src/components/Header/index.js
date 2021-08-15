import React, { useEffect } from 'react';
import styles from './Header.module.scss';

export default function Header() {

  useEffect(() => {
    const header = document.querySelector('header');

    window.onscroll = () => {
      if (window.pageYOffset > 24) {
        header.classList.add(styles.shrink);
      }
      else {
        header.classList.remove(styles.shrink);
      }
    }
  }, [])

  return (
    <header className={styles.header}>
      <span className="text-white">Header</span>
    </header>
  )
}