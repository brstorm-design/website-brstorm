import React, { useContext, useEffect } from 'react';
import styles from './Footer.module.scss';
import ArrowUp from 'public/images/double-arrow-up.svg';
import { SmoothScrollContext } from 'src/contexts/SmoothScrollContext';

export default function Footer({ content, common, variant, fullPage, ...props }) {

  useEffect(() => {
    if (fullPage) {
      document.querySelector('footer').classList.add('fullpage');
    }
  }, []);

  const { scroll } = useContext(SmoothScrollContext);

  return (
    <footer className={styles.section} id="footer" data-scroll-section {...props}>
      <div className="container">
        <div className="row">
          <div className={styles.footer}>
            <small>{content.copyright}</small>
            {
              variant !== 'success' && (
                <div className={styles.socials}>
                  {
                    content.socials.map((item, index) => {
                      return (
                        <a
                          key={`social-${index}`}
                          title={item.name}
                          href={item.href}
                          rel="noopener noreferrer"
                          target="_blank"
                          dangerouslySetInnerHTML={{ __html: item.icon }}
                        />
                      )
                    })
                  }
                </div>
              )
            }
            {
              variant !== 'success' && (
                <div>
                  <a
                    href="#"
                    className="small d-none d-md-inline-block"
                    onClick={ () => scroll?.scrollTo(0) }>
                    <ArrowUp />
                    {common.scrollToTop}
                  </a>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </footer>
  )
}