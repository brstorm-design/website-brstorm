import React, { useEffect, useRef, useState } from 'react';
import Samothrace from 'src/components/illustrations/Samothrace';
import { getMaxHeight, getTranslateValue } from 'src/modules/App';
import Timeline from '../Timeline';
import styles from './Methodology.module.scss';

export default function Methodology({ content, pitch }) {
  const [mousePosition, setMousePosition] = useState(null);

  function move(e) {
    setMousePosition(getTranslateValue(e, [-40, 40]));
  }

  return (
    <section className={styles.section} onMouseMove={move}>
      {
        pitch ? (
          <div className={styles.title}>
            <h3 className="gradient-bg">{content.subtitle}</h3>
            <h1>{content.title}</h1>
          </div>
        ) : null
      }
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            {/* <Samothrace translateValues={mousePosition} /> */}
            <div className={styles.primaryContent}>
              {
                pitch ? (
                  <Samothrace translateValues={mousePosition} />
                ) : (
                  <div>
                    <h3>Your brand goes beyond the visual!</h3>
                    <h1>About a Brand Project</h1>
                    <p>
                      A <strong>well-planned and striking visual identity</strong> is a fundamental step to present
                      yourself to your client as a company in which he can <strong>believe</strong> and <strong>invest</strong>.
                    </p>
                    <p>
                      Big names in the market are represented by images and colors that <strong>awaken our memory</strong>, even
                      unconsciously. It is this type of impact that you must make on your audience: a visual identity that
                      <strong>makes your mission visible and makes you recognizable anywhere. Meet our method:</strong>
                    </p>
                  </div>
                )
              }
            </div>
          </div>
          <div className="col-12 col-lg-4 offset-lg-2">
            <Timeline steps={content.steps} />
          </div>
        </div>
      </div>
    </section>
  )
}