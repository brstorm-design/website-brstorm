import React, { useEffect, useRef } from 'react';
import TypeEffect from 'src/components/common/TypeEffect';
import { applyStyles } from 'src/modules/App';
import styles from './Samothrace.module.scss';

export default function Samothrace({ translateValues }) {
  const container = useRef(null);

  useEffect(() => {
    let targets = container.current.querySelectorAll('img[alt="picker"], img[alt="grayscale"]');
    window.requestAnimationFrame(() => {
      applyStyles(targets, translateValues);
    });
  });

  useEffect(() => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      setTimeout(function toggle() {
        let words = document.getElementById('obj-tech').contentDocument.firstChild;
        words.classList.toggle('active');
        setTimeout(() => {
          toggle();
        }, 5000);
      }, 2000);
    }
  }, []);

  return (
    <div className={styles.image}>
      <div ref={container}>
        <img src="/images/whatWeDo/samothrace.png" alt="samothrace" />
        <svg width="156" height="127" viewBox="0 0 156 127" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: 'multiply' }}>
            <path d="M25.5 57.5C38.3 11.9 15.5 8.83331 2.5 13C18 4.50001 41 -2.00005 44.5 1.99995C47.3 5.19995 54 13.6667 56.5 18C67.7 26.4 80 30.5 85 31.5L93.5 39L104.5 43C115.5 52.5 134 52.5 141 57C146.6 60.6 151.5 62.6666 153.5 63C160.7 84.2 146.167 105.833 138 114V121C136.833 120.167 132.7 119 125.5 121C116.5 123.5 95.5 127.5 86.5 126C77.5 124.5 51 124.5 44.5 126C39.3 127.2 27.6667 126.5 22.5 126C16.8333 118.167 6.4 99.3 10 86.5C13.0872 75.5233 7.08002 65.9684 2.25786 61.0516C1.50218 60.4322 0.748655 59.7486 0 59C0.688509 59.546 1.45683 60.2348 2.25786 61.0516C11.1923 68.3743 20.4289 66.7201 25.5 57.5Z" fill="#59CBE8" />
          </g>
        </svg>
        <img src="/images/whatWeDo/pattern.svg" alt="pattern" />
        <img src="/images/whatWeDo/grayscale.svg" alt="grayscale" />
        <img src="/images/whatWeDo/picker.svg" alt="picker" />
        <div>
          <object id="obj-tech" data="/images/whatWeDo/tech-creativity.svg" type="image/svg+xml" />
        </div>
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
  )
}
