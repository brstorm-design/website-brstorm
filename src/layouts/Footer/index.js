import React from 'react';
import AnchorButton from 'src/components/common/AnchorButton';
import { inOutQuad } from 'src/utils/easings';
import styles from './Footer.module.scss';
export default function Footer({ content, common }) {
  return (
    <footer className={styles.section} id="footer">
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
            <AnchorButton className="small d-none d-md-inline-block" easing={inOutQuad} duration={2100}>
              {common.scrollToTop}
            </AnchorButton>
          </div>
        </div>
      </div>
    </footer>
  )
}