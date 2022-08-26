import Link from 'next/link';
import React from 'react';
import Thinker from 'src/components/illustrations/Thinker';
import { rootPath } from 'src/utils/env';
import styles from './About.module.scss';
import Arrow from 'public/images/arrow-forward.svg';

export default function About({ content, common }) {
  return (
    <div className={styles.section} id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-1 d-flex justify-content-center flex-column order-2 order-lg-1">
            <div className={styles.textContent}>
              <p className="gradient-bg mr-auto">{content.overline}</p>
              <h2>{content.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: content.firstParagraph }} />
              <p dangerouslySetInnerHTML={{ __html: content.secondParagraph }} />
            </div>
            <div className={styles.callToAction}>
              <Link href="/form/contact">
                <a className="btn">
                  {common.startProject}
                </a>
              </Link>
              <Link href="#">
                <a className="btn ghost">
                  {content.ctaText}
                  <Arrow />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-5 order-1 order-lg-2">
            <Thinker />
          </div>
        </div>
      </div>
    </div>
  )
}