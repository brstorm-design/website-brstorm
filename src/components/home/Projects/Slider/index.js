import React, { useEffect, useRef } from 'react';
import styles from './Slider.module.scss';
import images from 'src/utils/images';
import Image from 'next/image';

export default function Slider({ content }) {
  const topRow = useRef(null);
  const bottomRow = useRef(null);

  const translateValue = 150 + ((content.portifolio.length - 4) * 33.33);
  function animateSlider(target, direction) {
    target.animate([
      { transform: `translate3d(calc(-33.33% / 2), 0, 0)` },
      { transform: `translate3d(calc(-${translateValue}%), 0, 0)` },
    ], {
      duration: 15000,
      iterations: Infinity,
      easing: 'linear',
      direction: direction,
    })
  }

  useEffect(() => {
    animateSlider(topRow.current, 'normal');
    animateSlider(bottomRow.current, 'reverse');
  }, [])

  const firstRow = content.portifolio.concat(content.portifolio);
  const secondRow = content.portifolio.concat(content.portifolio).reverse();

  return (
    <section className={styles.section}>
      <div className={`row gy-4 flex-nowrap ${styles.row1}`} ref={topRow}>
        {
          firstRow.map((img, index) => {
            return (
              <div className="col-4" key={`item-${index}`}>
                <Image placeholder="blur" src={images[img.slug]} layout="responsive" />
              </div>
            )
          })
        }
      </div>
      <div className={`row gy-4 flex-nowrap ${styles.row2}`} ref={bottomRow}>
        {
          secondRow.map((img, index) => {
            return (
              <div className="col-4" key={`item-${index}`}>
                <Image placeholder="blur" src={images[img.slug]} layout="responsive" />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}