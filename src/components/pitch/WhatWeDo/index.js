import React, { useEffect, useRef, useState } from 'react';
import TypeEffect from 'src/components/common/TypeEffect';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import styles from './WhatWeDo.module.scss';

export default function WhatWeDo() {
  const element = useRef(null);
  const refs = [element.current];
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    let articles = Array.from(element.current.children);
    articles.forEach(art => {
      let target1 = Array.from(art.children).slice(0, 3);
      let target2 = Array.from(art.children).slice(3);

      let opt = {
        duration: 800,
        easing: 'cubic-bezier(0.02, 0.62, 0.04, 1.01)',
        fill: 'both',
        delay: 0
      };
      let keyframes = {
        opacity: [0, 1],
        transform: ['translateY(+100px)', 'initial']
      };

      let introAnimation = constructSequentialAnimation(target1, keyframes, opt, 200);
      opt.delay += opt.duration;
      keyframes.transform = ['translateX(+150px)', 'initial']
      let listAnimation = constructSequentialAnimation(target2, keyframes, opt, 200);

      setAnimations(oldArrray => [...oldArrray, introAnimation, listAnimation]);
    })
  }, [])

  useEffect(() => {
    if (animations && animations.length > 3) {
      handleIntersection(Array.from(element.current.children), animations);
    }
  }, [animations])

  /* useEffect(() => {
    function cleanup() {
      document.getElementById('what-we-do').removeEventListener('mousemove', e => {
        getMousePos(e);
      })
    }

    document.getElementById('what-we-do').addEventListener('mousemove', e => {
      getMousePos(e);
    })

    return cleanup();
  }, [])

  function getMousePos(e) {
    let relX = (e.pageX * 100) / window.innerWidth;
    let relY = (e.pageY * 100) / window.innerHeight;
    let translateX1 =  (((50 * relX) / 100) - 25);
    let translateY1 =  (((50 * relY) / 100) - 25);
    let translateX2 = -(((50 * relX) / 100) - 25);
    let translateY2 = -(((50 * relY) / 100) - 25);

    window.requestAnimationFrame(() => {
      let grayscale = document.querySelector('#what-we-do img[alt="grayscale"]');
      let picker = document.querySelector('#what-we-do img[alt="picker"]');
      grayscale.style.transform = `translateX(${translateX1}px) translateY(${translateY1}px)`;
      picker.style.transform = `translateX(${translateX2}px) translateY(${translateY2}px)`;
    })
  } */

  return (
    <section className={styles.section} id="what-we-do">
      <div className="container">
        <div className={`d-none d-lg-block ${styles.title}`}>
          <h3 className="gradient-bg">Don't know where to start?</h3>
          <h1>We're here to help!</h1>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={styles.image}>
              <div>
                <img src="/images/whatWeDo/samothrace.png" alt="samothrace" />
                <svg width="156" height="127" viewBox="0 0 156 127" fill="none" xmlns="http://www.w3.org/2000/svg"><g style={{mixBlendMode: 'multiply'}}><path d="M25.5 57.5C38.3 11.9 15.5 8.83331 2.5 13C18 4.50001 41 -2.00005 44.5 1.99995C47.3 5.19995 54 13.6667 56.5 18C67.7 26.4 80 30.5 85 31.5L93.5 39L104.5 43C115.5 52.5 134 52.5 141 57C146.6 60.6 151.5 62.6666 153.5 63C160.7 84.2 146.167 105.833 138 114V121C136.833 120.167 132.7 119 125.5 121C116.5 123.5 95.5 127.5 86.5 126C77.5 124.5 51 124.5 44.5 126C39.3 127.2 27.6667 126.5 22.5 126C16.8333 118.167 6.4 99.3 10 86.5C13.0872 75.5233 7.08002 65.9684 2.25786 61.0516C1.50218 60.4322 0.748655 59.7486 0 59C0.688509 59.546 1.45683 60.2348 2.25786 61.0516C11.1923 68.3743 20.4289 66.7201 25.5 57.5Z" fill="#59CBE8"/></g></svg>
                <img src="/images/whatWeDo/pattern.svg" alt="pattern" />
                <img src="/images/whatWeDo/grayscale.svg" alt="grayscale" />
                <img src="/images/whatWeDo/picker.svg" alt="picker" />
                <img src="/images/whatWeDo/tech-creativity.svg" alt="tech-creativity" />
                <img src="/images/whatWeDo/pin.svg" alt="pin" />
                <div>
                  <code>
                    <span>&lt;title&gt;</span>
                    <TypeEffect />
                    <span>&lt;/title&gt;</span>
                  </code>
                  <object data="/images/whatWeDo/code.svg" type="image/svg+xml" />
                </div>
              </div>
            </div>
            <div className={`d-block d-lg-none ${styles.title}`}>
              <h3 className="gradient-bg">Don't know where to start?</h3>
              <h1>We're here to help!</h1>
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1" ref={element}>
            <article id="art1">
              <h2>Branding</h2>
              <h4>Your Brand goes beyond the visual!</h4>
              <p>
                It's not enough to have only a basic logo to represent your company. Your brand needs to communicate your company values, it is your customer's first contact with you. We study and elaborate every detail so that your company has a strong, cohesive, and eye-catching brand. <strong>Here’s what we offer</strong>:
              </p>
              <div>
                <h5>Logo Design</h5>
                <small>Symbol and Type Design Variations</small>
              </div>
              <div>
                <h5>Visual Identity</h5>
                <small>Color Scheme, Typography, Patterns, and More</small>
              </div>
              <div>
                <h5>Brandbook</h5>
                <small>Instructions for Brand Applications</small>
              </div>
              <div>
                <h5>Brand Collaterals</h5>
                <small>Stationery, Packaging, Signage, and Any Other Materials You Might Need</small>
              </div>
              <a href="#">
                See More
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 0L4.11875 0.88125L7.60625 4.375H0V5.625H7.60625L4.11875 9.11875L5 10L10 5L5 0Z" fill="#555555" /></svg>
              </a>
            </article>

            <article id="art2">
              <h2>Web Design</h2>
              <h4>What is not registered is not remembered!</h4>
              <p>
                Where people can learn more about your company's history, values, or even about your products and services. What big business you know doesn't have a website? You need one too, and we can help you with that. <strong>Here’s what we offer</strong>:
              </p>
              <div>
                <h5>Website</h5>
                <small>Responsive Design for Desktop and Mobile Devices</small>
              </div>
              <div>
                <h5>Blogs</h5>
                <small>Made for Content Creation with our Management System Integration</small>
              </div>
              <div>
                <h5>Landing Pages</h5>
                <small>Focus on Marketing or Advertising Campaign</small>
              </div>
              <div>
                <h5>E-commerce</h5>
                <small>Web Store for Selling Products and Services</small>
              </div>
              <a href="#">
                See More
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 0L4.11875 0.88125L7.60625 4.375H0V5.625H7.60625L4.11875 9.11875L5 10L10 5L5 0Z" fill="#555555" /></svg>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}