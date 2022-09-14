import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './PriceCircle.module.scss';
import Ellipse from 'public/images/landing-pages/web/b/ellipse.svg';
import CostCircle from 'public/images/landing-pages/web/b/circle-new.svg';
import CostCircleMobile from 'public/images/landing-pages/web/b/cost-circle-mobile.svg';
import { CountUp } from 'countup.js';
import { SmoothScrollContext } from 'src/contexts/SmoothScrollContext';
import useMediaQuery from 'src/hooks/useMediaQuery';

export default function PriceCircle() {
  const { scroll } = useContext(SmoothScrollContext);
  const brPriceCount = useRef(null);
  const othersPriceCount = useRef(null);
  const [cycleComplete, setCycleComplete] = useState(false);
  const isMobile = useMediaQuery('lg');

  /*** trigger counter animations ***/
  useEffect(() => {
    if (!cycleComplete || isMobile) return;

    const brPriceEl = document.getElementById('brstorm-price');
    brPriceCount.current = new CountUp(brPriceEl, 997, {
      duration: 1.5,
      startVal: 0,
    });

    const othersPriceEl = document.getElementById('others-price');
    othersPriceCount.current = new CountUp(othersPriceEl, 19320, {
      duration: 3,
      startVal: 0,
      separator: '.',
    });

    document.querySelector('.othersPrice').style.opacity = '1';

    othersPriceCount.current.start(() => {
      document.querySelector('.brPrice').style.opacity = '1';
      brPriceCount.current.start();
    });

  }, [cycleComplete, isMobile])

  /*** draw timeline ***/
  useEffect(() => {
    if (isMobile) return;

    const circleFill = document.querySelector('.circleFill');
    const startLineFill = document.querySelector('.startLineFill');

    function drawCircle(e) {
      const animationNumber = parseInt(e.animationName.at(-1));
      if (animationNumber === 8) {
        setCycleComplete(true);
      } else {
        e.target.style.animationName = `circle-fill_${animationNumber + 1}`;
        document.querySelector(`.timeline-item-${animationNumber}`).classList.add('active');
      }
    }

    function fillStartLine() {
      document.querySelector('.timeline-item-8').classList.add('active');
      circleFill.style.animationName = 'circle-fill_1';
    }

    circleFill.addEventListener('animationend', drawCircle);
    startLineFill.addEventListener('transitionend', fillStartLine);

    return () => {
      circleFill.removeEventListener('animationend', drawCircle);
      startLineFill.removeEventListener('transitionend', fillStartLine);
    }
  }, [isMobile]);

  /*** scroll on button click ***/
  useEffect(() => {
    const button = document.getElementById('Button');
    const handleClick = () => {
      if (scroll && !isMobile) {
        scroll.scrollTo('#pricing', { offset: -100 });
      } else {
        document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
      }
    }

    button.addEventListener('click', handleClick);
    return () => {
      button.removeEventListener('click', handleClick);
    }
  }, [scroll, isMobile]);


  useEffect(() => {

  }, []);

  return (
    <div style={{ padding: '980px 0' }}>
      {/* <div className="container">
        <div className="row">
          <div className="col-8 offset-2 p-0">
            <div>
              <div className={styles.professionals}>
                <div />
              </div>
              <Ellipse className={styles.ellipse} />
            </div>
          </div>
        </div>
      </div> */}

      {
        isMobile ? (
          <div>
            <CostCircleMobile className={styles.circleMobile} />
          </div>
        ) : (
          <div data-scroll data-scroll-call data-scroll-offset="70%">
            <div className="container">
              <CostCircle className={styles.circle} />
            </div>
          </div>
        )
      }

    </div>
  )
}
