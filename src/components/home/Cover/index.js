import { React, useEffect } from 'react';
import AnchorButton from 'src/components/common/AnchorButton';
import { inOutQuad } from 'src/utils/easings';
import styles from './Cover.module.scss';
import Arrow from 'public/images/arrow-down.svg';

export default function Cover({content, common}) {

  return (
    <section className={styles.section} id="cover">
      <div className="container">
        <img className={`${styles.topRight}`} src="/images/cover/logo-rotate-360.svg" alt="" />
        <img className={`${styles.bottomLeft} track`} src="/images/cover/grids-design.svg" alt="" />
        <a href="https://instagram.com/brstorm.design" target="_blank" rel="noopener noreferrer">
          <div className={`${styles.bottomRight} track`}>
          </div>
        </a>

        <div className="row">
          <div className="col-12 col-lg-9">
            <div className={styles.content}>
              <h1>{content.title}</h1>
              <h4>{content.subtitle}</h4>
              <AnchorButton className="btn large ghost" href="#purpose" easing={inOutQuad} duration={1000}>
                {common.seeMore}
                <Arrow />
              </AnchorButton>

              <div>
                <div>
                  <a href="https://brstorm.design">brstorm.design</a>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}