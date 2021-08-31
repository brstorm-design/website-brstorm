import Link from 'next/link';
import React, { useEffect } from 'react';
import Logo from '../common/Logo';
import styles from './Header.module.scss';

export default function Header({ content, common }) {

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
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              {
                content.items.map((link, index) => {
                  return (
                    <li className="nav-item" key={`link-${index}`}>
                      <Link href={link.href}>
                        <a className="nav-link">{link.name}</a>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <a href="https://calendly.com/br-storm/presentation" target="_blank" rel="noopener noreferrer" className="btn small">
            {common.bookMeeting}
          </a>
        </div>
      </nav>
    </header>
  )
}