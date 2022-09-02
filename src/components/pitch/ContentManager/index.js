import React, { useState } from 'react';
import CMS from 'src/components/illustrations/CMS';
import CMSModal from '../CMSModal';
import styles from './ContentManager.module.scss';
import ArrowIcon from 'public/images/arrow-forward.svg';

export default function ContentManager({ content }) {
  const [show, setShow] = useState(false);

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
                <p className="overline gradient-bg">{content.overline}</p>
                <h2>{content.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: content.about }} />
              </div>
              <div>
                <h2>{content.knowMore}</h2>
                <p>{content.knowMoreText}</p>
                <button className="btn secondary" onClick={() => showModal()}>
                  {content.button}
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CMSModal show={show} handleClose={hideModal} />
    </section>
  )
}
