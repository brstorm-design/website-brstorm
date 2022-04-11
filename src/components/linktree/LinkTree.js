import React from 'react'
import { rootPath } from 'src/utils/env';
import Logo from '../common/Logo';
import Svg from '../svg/Svg';
import styles from './LinkTree.module.scss';

export default function LinkTree({ content }) {
  return (
    <section className={styles.section}>
      <div className="container h-100">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 offset-md-1">
            <div className={styles.article}>
              <img className="img-fluid" src={rootPath + content.logo} alt="Logo" />
              <h4 className="d-none d-md-block">{content.desktopTitle}</h4>
              <h4 className="d-block d-md-none">{content.mobileTitle}</h4>
              <p>We specialize in creating unique and memorable projects exploring the best in each business.</p>
              <strong>Let's do a remarkable project?</strong>
              <p>
                <a href={content.bookBtn.href}>
                  {content.bookBtn.text}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 0L4.11875 0.88125L7.60625 4.375H0V5.625H7.60625L4.11875 9.11875L5 10L10 5L5 0Z" fill="currnetColor" /></svg>
                </a>
              </p>
            </div>
          </div>

          <div className="col-12 col-xxl-4 col-md-5 offset-md-1">
            <div className={styles.links}>
              {
                content.links.map((link, index) => {
                  let slug = link.name.toLowerCase();
                  return (
                    <a target="_blank" rel="noreferrer noopener" className={`btn ${slug}`} href={link.href} key={`link-${index}`}>
                      <Svg code={link.logo} />
                      <strong>{link.name}</strong>   <span>|</span>   <small>{link.text}</small>
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className="container-md">
          <div className={styles.footerText}>
            <small>
              <a href={content.instagram.href} className="d-none d-md-flex">
                <Svg code={content.instagram.logo} />
                {content.instagram.text}
              </a>
            </small>
            <small>{content.copyright}</small>
          </div>
        </div>
      </footer>
    </section>
  )
}
