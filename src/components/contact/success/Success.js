import React from 'react';
import styles from './Success.module.scss';
import Behance from 'public/images/socials/behance.svg';
import Dribbble from 'public/images/socials/dribbble.svg';
import Instagram from 'public/images/socials/instagram.svg';
import Website from 'public/images/socials/website.svg';

const socialIcons = {
  Behance,
  Dribbble,
  Instagram,
  Website,
};

export default function Success({ content }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h4 className="gradient-bg">{content.title.thanks}</h4>
          <h2>{content.title.contactYou}</h2>
          <p>{content.title.socialText}</p>

          <div className="row gy-4">
            {
              content.socials.map((social, index) => {
                const SocialIcon = socialIcons[social.name];
                return (
                  <div className="col-12 col-md-6" key={`social-${index}`}>
                    <a className="btn" href={'asd'}>
                      <SocialIcon />
                      {social.name}
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}
