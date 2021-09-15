import React from 'react';
import AnchorButton from 'src/components/common/AnchorButton';
import { inOutQuad } from 'src/utils/easings';
import styles from './Footer.module.scss';

export default function Footer({ content, common }) {
  return (
    <footer className={styles.section}>
      <div className="container">
        <div className="row">
          <div className={styles.footer}>
            <small>{content.copyright}</small>
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
                      dangerouslySetInnerHTML={{__html: item.icon}}
                    />
                  )
                })
              }
            </div>
            <AnchorButton className="small d-none d-md-inline-block" easing={inOutQuad} href="#cover" duration={2500}>
              <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 11.2914L1.20858 12.4999L5.14291 8.57418L9.07724 12.4999L10.2858 11.2914L5.14291 6.14844L0 11.2914Z" fill="currentColor" /><path d="M0 5.64291L1.20858 6.8515L5.14291 2.92574L9.07724 6.8515L10.2858 5.64291L5.14291 0.5L0 5.64291Z" fill="currentColor" /></svg>
              {common.scrollToTop}
            </AnchorButton>
          </div>
        </div>
      </div>
    </footer>
  )
}