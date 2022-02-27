import { React, useEffect } from 'react';
import AnchorButton from 'src/components/common/AnchorButton';
import AnimatedLogo from 'src/components/svg/AnimatedLogo';
import Circle from 'public/images/cover/circle.svg';
import Square from 'public/images/cover/square.svg';
import Triangle from 'public/images/cover/triangle.svg';
import { inOutQuad } from 'src/utils/easings';
import styles from './Cover.module.scss';
import Arrow from 'public/images/arrow-down.svg';
import MobileUI from 'public/images/cover/mobile-ui.svg'

export default function Cover({content, common}) {
  useEffect(() => {
    function cleanup() {
      document.getElementById('cover').removeEventListener('mousemove', e => {
        getMousePos(e)
      });
    }

    document.getElementById('cover').addEventListener('mousemove', e => {
      getMousePos(e)
    })

    return cleanup();
  }, [])

  function getMousePos(e) {
    let relX = (e.clientX * 100) / window.innerWidth;
    let relY = (e.clientY * 100) / window.innerHeight;
    let translateX1 = - (((50 * relX) / 100) - 25); // [50, 50, 90]
    let translateY1 = - (((50 * relY) / 100) - 25);
    let translateX2 = (((50 * relX) / 100) - 25);
    let translateY2 = (((50 * relY) / 100) - 25);
    let translateX3 = (((90 * relX) / 100) - 45);
    let translateY3 = - (((90 * relY) / 100) - 45);

    window.requestAnimationFrame(() => {
      let track = document.querySelectorAll('.track');
      track[0].style.transform = `translate3d(${translateX1}px, ${translateY1}px, 0)`;
      track[1].style.transform = `translate3d(${translateX2}px, ${translateY2}px, 0)`;
      track[2].style.transform = `translate3d(${translateX3}px, ${translateY3}px, 0)`;
    })
  }

  return (
    <section className={styles.section} id="cover">
      <div className="container">

        <AnimatedLogo />
        <img className={`${styles.topRight}`} src="/images/cover/logo-rotate-360.svg" alt="" />
        <img className={`${styles.bottomLeft} track`} src="/images/cover/grids-design.svg" alt="" />
        <a href="https://instagram.com/brstorm.design" target="_blank" rel="noopener noreferrer">
          <div className={`${styles.bottomRight} track`}>
            <MobileUI />
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
                  <Circle />
                  <Triangle />
                  <Square />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}