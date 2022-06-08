import React, { useState } from 'react';
import CMS from 'src/components/illustrations/CMS';
import CMSModal from '../CMSModal';
import styles from './ContentManager.module.scss';

export default function ContentManager({ /*content*/ }) {
  const [show, setShow] = useState(false);
  const content = {
    title: "Take Full Control of your Website",
    subtitle: "Content Manager",
    text: "Through an <strong>administrative panel</strong>, you can add texts, posts, photos, videos, promotions and other content with <strong>ease and autonomy</strong>.",
    knowMore: {
      title: "Want to Know More?",
      text: "Access a preview of the site's content management system and see the provided interface",
      preview: "See a Preview",
    }
  }

  function showModal() {
    setShow(true);
  }
  function hideModal() {
    setShow(false);
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 order-1 order-lg-0">
            <CMS />
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
                <button className="btn" onClick={() => showModal()} >{content.knowMore.preview}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CMSModal show={show} handleClose={hideModal} />
    </section>
  )
}
