import React, { useEffect, useRef, useState } from 'react';
import styles from './Slider.module.scss';
import images from 'src/utils/images';
import Image from 'next/image';
import webImages from 'src/utils/webImages';

export default function Slider({ content }) {
  const topRow = useRef(null);
  const bottomRow = useRef(null);
  const [topAnimation, setTopAnimation] = useState(null);
  const [bottomAnimation, setBottomAnimation] = useState(null);

  const translateValue = 125 + ((content.portfolio.length - 2) * 50);
  function animateSlider(target, direction) {
    return target.animate([
      { transform: `translate3d(calc(-50% / 2), 0, 0)` },
      { transform: `translate3d(calc(-${translateValue}%), 0, 0)` },
    ], {
      duration: 30000,
      iterations: Infinity,
      easing: 'linear',
      direction: direction,
    })
  }

  useEffect(() => {
    setTopAnimation(animateSlider(topRow.current, 'normal'));
    setBottomAnimation(animateSlider(bottomRow.current, 'reverse'));
  }, []);

  function handleEnter() {
    topAnimation.pause();
    bottomAnimation.pause();
  }
  function handleLeave() {
    topAnimation.play();
    bottomAnimation.play();
  }

  const firstRow = content.portfolio.concat(content.portfolio);
  const secondRow = content.portfolio.concat(content.portfolio).reverse();

  return (
    <section className={styles.section} id="slider" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div className={`row gy-4 flex-nowrap ${styles.row1}`} ref={topRow}>
        {
          firstRow.map((img, index) => {
            return (
              <div key={`top-row-${index}`} className="col-12 col-lg-6">
                <a href={img.url} rel="noopener noreferrer" target="_blank" className={styles.link}>
                  <Image placeholder="blur" src={webImages[img.slug]} layout="responsive" />
                  <div id="overlay-details">
                    <h5>{img.name}</h5>
                    <span className="details">{img.type}</span>
                  </div>
                </a>
              </div>
            )
          })
        }
      </div>
      <div className={`row gy-4 flex-nowrap ${styles.row2}`} ref={bottomRow}>
        {
          secondRow.map((img, index) => {
            return (
              <div key={`bottom-row-${index}`} className="col-12 col-lg-6">
                <a href={img.url} rel="noopener noreferrer" target="_blank" className={styles.link}>
                  <Image placeholder="blur" src={webImages[img.slug]} layout="responsive" />
                  <div id="overlay-details">
                    <h5>{img.name}</h5>
                    <span className="details">{img.type}</span>
                  </div>
                </a>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}