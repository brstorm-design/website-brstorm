import React from 'react';
import CMSModal from '../CMSModal';
import styles from './ContentManager.module.scss';

export default function ContentManager({ /*content*/ }) {
  const content = {
    title: "Take Full Control of your Website",
    subtitle: "Content Manager",
    text: "Through an <strong>administrative panel</strong>, you can add texts, posts, photos, videos, promotions and other content with <strong>ease and autonomy</strong>.",
    knowMore: {
      title: "Want to Know More?",
      text: "Access a preview of the site's content management system and see the provided interface",
      preview: "Launch Live Preview",
    }
  }
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7">
            <div className={styles.placeholder}>
              <img src="/images/wireframes/img-icon.svg" alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-4 offset-lg-1">
            <div className={styles.textContent}>
              <div>
                <h4 className="gradient-bg">{content.subtitle}</h4>
                <h1>{content.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: content.text }} />
              </div>
              <div>
                <h2>{content.knowMore.title}</h2>
                <p>{content.knowMore.text}</p>
                <button className="btn" data-bs-toggle="modal" data-bs-target="#cms-modal">{content.knowMore.preview}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CMSModal />
    </section>
  )
}
