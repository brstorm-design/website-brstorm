import React, { useEffect, useRef, useState } from 'react';
import styles from './Testimonials.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';

export default function Testimonials({ content }) {
  const element = useRef(null);
  const refs = [element.current];
  const [animations, setAnimations] = useState(null);

  useEffect(() => {
    let targets = Array.from(element.current.firstChild.children);
    let opt = {
      duration: 1200,
      easing: 'cubic-bezier(0.02, 0.62, 0.04, 1.01)',
      fill: 'backwards',
      delay: 0
    };
    let keyframes = {
      opacity: [0, 1],
      transform: ['translateY(+500px)', 'initial']
    };

    let textAnimation = constructSequentialAnimation(targets, keyframes, opt, 200)
    setAnimations([textAnimation]);
  }, [])

  useEffect(() => {
    if (animations) {
      handleIntersection(refs, animations);
    }
  }, [animations])

  function handleClick(e) {
    const swiper = document.querySelector('.swiper-container').swiper;
    const action = e.currentTarget.id;
    if (action === 'next') {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  }

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-2">
            <div className={styles.titleSection}>
              <h1>{'What People \nSay About Us'}</h1>
              <div className={`d-none d-lg-block ${styles.nav}`}>
                <button onClick={handleClick} id="prev">
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="currentColor" /></svg>
                </button>
                <button onClick={handleClick} id="next">
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.93394 6.35317L5.28634 6L4.93394 5.64683L0.706722 1.41039L1.41 0.707107L6.7029 6L1.41 11.2929L0.706722 10.5896L4.93394 6.35317Z" stroke="currentColor" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Swiper spaceBetween={24} slidesPerView={'auto'} ref={element}>
          {
            content.map((item, index) => {
              return (
                <SwiperSlide key={`testimonial-${index}`}>
                  <div className={styles.testimonial}>
                    <img src="/images/testimonials/quotation.svg" alt="" />
                    <small>{item.body}</small>
                    <div>
                      <img src="/images/testimonials/client-picture.svg" alt="Client Photo" />
                      <div>
                        <strong className="details">{item.author}</strong>
                        <div className="details">{item.company}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        <div className={`d-block d-lg-none mt-4 ${styles.nav}`}>
          <button onClick={handleClick} id="prev">
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="currentColor" /></svg>
          </button>
          <button onClick={handleClick} id="next">
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.93394 6.35317L5.28634 6L4.93394 5.64683L0.706722 1.41039L1.41 0.707107L6.7029 6L1.41 11.2929L0.706722 10.5896L4.93394 6.35317Z" stroke="currentColor" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}