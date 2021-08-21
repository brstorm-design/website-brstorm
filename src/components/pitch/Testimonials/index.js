import React, { useEffect } from 'react';
import styles from './Testimonials.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Testimonials({ content }) {

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
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-2">
            <div className={styles.titleSection}>
              <h1>What People Say About Us</h1>
              <div>
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
        <Swiper spaceBetween={24} slidesPerView={'auto'}>
          {
            content.map((item, index) => {
              return (
                <SwiperSlide key={`testim-${index}`}>
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
      </div>
    </section>
  )
}