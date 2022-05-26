import React from 'react';
import AnchorButton from 'src/components/common/AnchorButton';
import { inOutQuad } from 'src/utils/easings';
import styles from './Footer.module.scss';
import ArrowUp from 'public/images/double-arrow-up.svg';

export default function Footer({ content, common, variant, ...props }) {
  return (
    <footer {...props} className={styles.section} id="footer">
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
                  <AnchorButton className="small d-none d-md-inline-block" easing={inOutQuad} duration={2100}>
                    <ArrowUp />
                    {common.scrollToTop}
                  </AnchorButton>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </footer>
  )
}