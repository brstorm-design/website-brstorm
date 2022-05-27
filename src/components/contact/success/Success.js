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

        <div className="row">
          <div className="col-12">
            <div className={styles.content}>
              <h4 className="gradient-bg">{content.title.thanks}</h4>
              <h2>{content.title.contactYou}</h2>
              <p>{content.title.socialText}</p>
            </div>
          </div>
        </div>

        <div className={`row gy-4 ${styles.socials}`}>
          {
            content.socials.map((social, index) => {
              const SocialIcon = socialIcons[social.name];
              const even = index % 2 === 0;
              return (
                <div className={`col-12 col-md-3 ${even && 'offset-md-3'}`} key={`social-${index}`}>
                  <a className="btn" href={social.url} target="_blank" rel="noopener noreferrer" >
                    <SocialIcon />
                    <strong>
                      {social.name}
                    </strong>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
