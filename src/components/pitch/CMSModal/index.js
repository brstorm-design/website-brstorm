import React, { useEffect, useRef, useState } from 'react';
import styles from './CMSModal.module.scss';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Close from 'public/images/close.svg';
import cmsImages from 'src/utils/cmsImages';
import Image from 'next/image';

export default function CMSModal({ show, handleClose }) {
  const [animation, setAnimation] = useState(null);
  const modal = useRef(null);

  function handleFinish(playback) {
    if (playback.currentTime === 0) {
      modal.current.style.display = 'none';
      document.documentElement.style.overflowY = 'auto';
      playback.currentTarget.playbackRate = 1;
    }
  }

  useEffect(() => {
    const ani = document.getElementById('cms-modal').animate(
      [
        {
          opacity: '0',
          transform: 'translateY(100%)',
        },
        {
          opacity: '1',
          transform: 'translateY(0%)',
        }
      ],
      {
        duration: 350,
        easing: 'ease',
        fill: 'both',
      })
    ani.onfinish = handleFinish;
    setAnimation(ani);
  }, []);

  useEffect(() => {
    if (animation && animation.startTime) {
      if (show) {
        modal.current.style.display = 'block';
        document.documentElement.style.overflowY = 'hidden';
        animation.play();
      } else {
        animation.reverse();
      }
    }
  }, [show]);

  const images = ['screen1', 'screen2', 'screen3'];

  return (
    <div ref={modal} className={styles.modal} id="cms-modal">
      <Swiper
        slidesPerView={1}
        spaceBetween={48}
        observer
        observeParents
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={true}
      >
        {
          images.map((img, index) => {
            return (
              <SwiperSlide key={`screen_${index}`}>
                <div className={styles.slide}>
                  <div>
                    <Image
                      /* style={{ maxHeight: '500px' }} */
                      objectFit="contain"
                      src={cmsImages[img]}
                      layout="responsive"
                      placeholder="blur"
                      quality={40}
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <button onClick={() => handleClose()}>
        <Close />
      </button>
    </div>
  )
}
