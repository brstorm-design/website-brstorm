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
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button> */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/#purpose">
                  <a className="nav-link">Purpose</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#what-we-do">
                  <a className="nav-link">What We Do</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#projects">
                  <a className="nav-link">Projects & Reviews</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#why-us">
                  <a className="nav-link">Why Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#contact">
                  <a className="nav-link">Get in Touch</a>
                </Link>
              </li>
            </ul>
          </div>
          <a href="https://calendly.com/br-storm/presentation" target="_blank" rel="noopener noreferrer" className="btn small">Book a Meeting</a>
        </div>
      </nav>
    </header>
  )
}