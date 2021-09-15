import { React, useEffect } from 'react';
import AnchorButton from 'src/components/common/AnchorButton';
import AnimatedLogo from 'src/components/svg/AnimatedLogo';
import Circle from 'src/components/svg/Circle';
import Square from 'src/components/svg/Square';
import Triangle from 'src/components/svg/Triangle';
import { inOutQuad } from 'src/utils/easings';
import styles from './Cover.module.scss';

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

    setTimeout(function toggle() {
      let logo = document.querySelector('#cover svg');
      logo.classList.toggle('active');
      setTimeout(() => {
        toggle();
      }, 4000);
    }, 2000);

    return cleanup();
  }, [])

  function getMousePos(e) {
    let relX = (e.clientX * 100) / window.innerWidth;
    let relY = (e.clientY * 100) / window.innerHeight;
    let translateX1 = - (((50 * relX) / 100) - 25);
    let translateY1 = - (((50 * relY) / 100) - 25);
    let translateX2 = (((50 * relX) / 100) - 25);
    let translateY2 = (((50 * relY) / 100) - 25);
    let translateX3 = (((90 * relX) / 100) - 45);
    let translateY3 = (((90 * relY) / 100) - 45);

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

        <AnimatedLogo className={`${styles.topLeft} track`} />
        <img className={`${styles.topRight}`} src="/images/cover/logo-rotate-360.svg" alt="" />
        <img className={`${styles.bottomLeft} track`} src="/images/cover/grids-design.svg" alt="" />
        <a href="https://instagram.com/brstorm.design" target="_blank" rel="noopener noreferrer">
          <img className={`${styles.bottomRight} track`} src="/images/cover/mobile-ui.svg" alt="" />
        </a>

        <div className="row">
          <div className="col-12 col-lg-9">
            <div className={styles.content}>
              <h1>{content.title}</h1>
              <h4>{content.subtitle}</h4>
              <AnchorButton className="btn large ghost" href="#purpose" easing={inOutQuad} duration={1000}>
                {common.seeMore}
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8333 6L9.89332 5.06L6.16666 8.78V0.666668H4.83332V8.78L1.11332 5.05333L0.166656 6L5.49999 11.3333L10.8333 6Z" fill="#555" /></svg>
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