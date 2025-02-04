import React, { useRef, useState } from 'react';
import David from 'src/components/illustrations/David';
import { getTranslateValue } from 'src/modules/App';
import styles from './Details.module.scss';

export default function Details({ content }) {
  const element = useRef(null);
  const [mousePosition, setMousePosition] = useState(null);

  function move(e) {
    setMousePosition(getTranslateValue(e, [40]));
  }

  return (
    <div className={styles.section} id="details" onMouseMove={move}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <David forwardedRef={element} translate={mousePosition} />
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 d-flex align-items-center">
            <article>
              <p className="overline gradient-bg">{content.subtitle}</p>
              <h2>{content.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: content.text }} />
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}