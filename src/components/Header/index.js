import Link from 'next/link';
import React, { useEffect } from 'react';
import Logo from '../common/Logo';
import styles from './Header.module.scss';

export default function Header() {

  useEffect(() => {
    const header = document.querySelector('header');
    console.log(header);
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
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Purpose</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">What We Do</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects & Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Why Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacts</a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn small">Book a Meeting</a>
        </div>
      </nav>
    </header>
  )
}