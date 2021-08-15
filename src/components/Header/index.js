import Link from 'next/link';
import React, { useEffect } from 'react';
import Logo from '../common/Logo';
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
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Solutions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Projects & Reviews</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Advantages</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacts</a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn small">Book a Meeting</a>
        </div>
      </nav>
    </header>
  )
}