import React, { useEffect, useRef, useState } from 'react';
import styles from './Slider.module.scss';
import images from 'src/utils/images';
import Image from 'next/image';
import webImages from 'src/utils/webImages';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';

export default function Slider({ content }) {
  const topSwiper = useRef(null);
  const bottomSwiper = useRef(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    let mobile = window.matchMedia('(max-width: 992px)').matches;
    setIsMobile(mobile);

    if (mobile) {
      topSwiper.current.swiper.destroy();
    }
  }, []);

  return (
    <section className={styles.section} id="slider">
      <div className={`row gy-4 ${styles.row1}`}>
        <Swiper
          ref={topSwiper}
          spaceBetween={24}
          slidesPerView={'auto'}
          modules={[Autoplay, FreeMode]}
          loop
          speed={800}
          freeMode
          autoplay={{
            delay: 200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
        >
          {
            content.portfolio.map((img, index) => {
              return (
                <SwiperSlide key={`top-row-${index}`}>
                  <a href={img.url} rel="noopener noreferrer" target="_blank" className={styles.link}>
                    <Image src={webImages[img.slug]} layout="responsive" objectFit="cover" />
                    <div id="overlay-details">
                      <h5>{img.name}</h5>
                      <span className="details">{img.type}</span>
                    </div>
                  </a>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>

      <div style={{ display: isMobile ? 'none' : 'flex' }} className={`row gy-4 flex-nowrap ${styles.row2}`}>
        <Swiper
          initialSlide={4}
          spaceBetween={24}
          slidesPerView={'auto'}
          modules={[Autoplay, FreeMode]}
          loop
          speed={800}
          freeMode
          autoplay={{
            delay: 200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
        >
          {
            content.portfolio.map((img, index) => {
              return (
                <SwiperSlide key={`bottom-row-${index}`}>
                  <a href={img.url} rel="noopener noreferrer" target="_blank" className={styles.link}>
                    <Image src={webImages[img.slug]} layout="responsive" objectFit="cover" />
                    <div id="overlay-details">
                      <h5>{img.name}</h5>
                      <span className="details">{img.type}</span>
                    </div>
                  </a>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}