import React, { useEffect, useRef, useState } from 'react';
import Samothrace from 'src/components/illustrations/Samothrace';
import { getMaxHeight, getTranslateValue } from 'src/modules/App';
import Timeline from '../Timeline';
import TimelineBrand from '../TimelineBrand';
import styles from './Methodology.module.scss';

export default function Methodology({ content, pitch, service }) {
  const [mousePosition, setMousePosition] = useState(null);

  function move(e) {
    setMousePosition(getTranslateValue(e, [-40, 40]));
  }

  return (
    <div className={styles.section} onMouseMove={move} id="methodology">
      <div className="container">
        {
          pitch ? (
            <div className={styles.title}>
              <h4 className="gradient-bg">{content.subtitle}</h4>
              <h1>{content.title}</h1>
            </div>
          ) : null
        }
        <div className="row">
          <div className="col-12 col-lg-6">
            {/* <Samothrace translateValues={mousePosition} /> */}
            <div className={styles.primaryContent}>
              {
                pitch ? (
                  <Samothrace translateValues={mousePosition} />
                ) : (
                  <div>
                    <h3>{content.subtitle}</h3>
                    <h1>{content.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: content.text}} />
                  </div>
                )
              }
            </div>
          </div>
          {
            service === 'web' ? (
              <div className="col-12 col-lg-5 offset-lg-1">
                <Timeline steps={content.steps} service="web" />
              </div>
            ) : (
              <div className="col-12 col-lg-4 offset-lg-2">
                <TimelineBrand steps={content.steps} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}