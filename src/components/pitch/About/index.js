import React from 'react';
import Thinker from 'src/components/illustrations/Thinker';
import { rootPath } from 'src/utils/env';
import styles from './About.module.scss';

export default function About({ content }) {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-center order-2 order-lg-1">
            <div className={styles.content}>
              <h1>{content.title}</h1>
              <h2>{content.subtitle}</h2>
              <div dangerouslySetInnerHTML={{__html: content.text}} />
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1 order-1 order-lg-2">
            {/* <img className="img-fluid d-block mx-auto" src={`${rootPath}/images/illustrations/the-thinker.png`} alt="" /> */}
            <Thinker />
          </div>
        </div>
      </div>
    </section>
  )
}