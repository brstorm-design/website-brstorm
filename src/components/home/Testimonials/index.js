import React, { useEffect, useRef, useState } from 'react';
import styles from './Testimonials.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import QuoteIcon from 'public/images/testimonials/quotation.svg';
import Chevron from 'public/images/chevron-up.svg';
//
import paras from 'public/images/testimonials/paras.png';
import michael from 'public/images/testimonials/michael.png';
import willian from 'public/images/testimonials/willian.png';
import jarrod from 'public/images/testimonials/jarrod.png';
import hazem from 'public/images/testimonials/hazem.png';
import Image from 'next/image';

const clients = {
  'Paras Mehta': paras,
  'Michael Smith': michael,
  'Willian Medeiros': willian,
  'Jarrod Milford': jarrod,
  'Hazem Alshakr': hazem,
}

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
    const swiper = document.querySelector('.swiper').swiper;
    const action = e.currentTarget.id;
    if (action === 'next') {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  }

  return (
    <div className={styles.section} id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-2">
            <div className={styles.titleSection}>
              <h2>{content.title}</h2>
              <div className={`d-none d-lg-block ${styles.nav}`}>
                <button onClick={handleClick} id="prev">
                  <Chevron />
                </button>
                <button onClick={handleClick} id="next">
                  <Chevron />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Swiper spaceBetween={24} slidesPerView={'auto'} ref={element}>
          {
            content.cards.map((item, index) => {
              return (
                <SwiperSlide key={`testimonial-${index}`}>
                  <figure className={styles.testimonial}>
                    <QuoteIcon />
                    <blockquote>
                      <p className="small">
                        {item.body}
                      </p>
                    </blockquote>
                    <figcaption>
                      <div>
                        <Image src={clients[item.author]} width={35} height={35} />
                      </div>
                      <div>
                        <p className="details">{item.author}</p>
                        <p className="details">{item.company}</p>
                      </div>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}