import { React, useEffect, useRef } from 'react';
import AnchorButton from 'src/components/common/AnchorButton';
import AnimatedLogo from 'src/components/svg/AnimatedLogo';
import Circle from 'public/images/cover/circle.svg';
import Square from 'public/images/cover/square.svg';
import Triangle from 'public/images/cover/triangle.svg';
import { inOutQuad } from 'src/utils/easings';
import styles from './Cover.module.scss';
import Arrow from 'public/images/arrow-down.svg';
import usePausableAnimation from 'src/hooks/usePausableAnimations';
import { rootPath } from 'src/utils/env';
import MobileUI from 'src/components/svg/MobileUI';
import DesktopUI from 'src/components/svg/DesktopUI';
import Link from 'next/link';
import { fillPlaceholders } from 'src/modules/App';

export default function Cover({ content, common, service, client }) {
  let { name, businessName } = client ?? {};

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
  }, []);

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
      let track = section.current.querySelectorAll('.container > *');
      track[0].style.transform = `translate3d(${translateX1}px, ${translateY1}px, 0)`;
      track[2].style.transform = `translate3d(${translateX2}px, ${translateY2}px, 0)`;
      track[3].style.transform = `translate3d(${translateX3}px, ${translateY3}px, 0)`;
    })
  }

  const section = useRef(null);

  usePausableAnimation(section.current);

  return (
    <div ref={section} className={styles.section} id="cover">
      <div className="container">
        <AnimatedLogo />
        <img className={`${styles.topRight}`} data-animated src={`${rootPath}/images/cover/logo-rotate-360.svg`} alt="" />
        {
          service === 'web' ? (
            <DesktopUI />
          ) : (
            <img className={`${styles.bottomLeft} track`} src={`${rootPath}/images/cover/grids-design.svg`} alt="" />
          )
        }
        {
          service === 'web' ? (
            <MobileUI />
          ) : (
            <img className={`${styles.bottomRight} track`} src={`${rootPath}/images/cover/mobile-ui.svg`} alt="" />
          )
        }

        <div className="row">
          <div className="col-12 col-lg-9">
            <div className={styles.content}>
              {
                service === 'web' ? (
                  <>
                    <h1>
                      {
                        fillPlaceholders(content.title, { name })
                      }
                    </h1>
                    <h2>
                      {
                        fillPlaceholders(content.subtitle, { businessName })
                      }
                    </h2>
                    <p>{'We prepared a brief presentation for you to better\n know us and the solutions we provide.'}</p>
                    <Link href="#about" scroll={false}>
                      <a className="btn large ghost">
                        {common.seeHow}
                        <Arrow />
                      </a>
                    </Link>
                  </>
                ) : (
                  <>
                    <h1>{content.title}</h1>
                    <h4>{content.subtitle}</h4>
                    <Link href="#purpose" scroll={false}>
                      <a className="btn large ghost">
                        {common.seeMore}
                        <Arrow />
                      </a>
                    </Link>
                  </>
                )
              }

              <div>
                <div className="d-none d-md-block">
                  <a href="https://brstorm.design">brstorm.design</a>
                </div>
                <div className="d-none d-md-block">
                  <Circle />
                  <Triangle />
                  <Square />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}