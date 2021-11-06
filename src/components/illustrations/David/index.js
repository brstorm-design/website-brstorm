import { useEffect } from 'react';
import styles from './David.module.scss';

export default function David({ forwardedRef, x, y }) {

  useEffect(() => {
    window.requestAnimationFrame(() => {
      let comment = forwardedRef.current.querySelector('img[alt="comment"]');
      comment.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    })
  })

  return (
    <div className={styles.image}>
      <div ref={forwardedRef} id="purpose-image">
        <img src="/images/purpose/david.png" alt="david" />
        <svg id="color" width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: 'overlay' }}>
            <rect width="150" height="40" fill="#E93CAC" />
          </g>
          <g style={{ mixBlendMode: 'multiply' }}>
            <rect width="150" height="40" fill="#E93CAC" />
          </g>
        </svg>
        <img src="/images/purpose/seal.svg" alt="seal" />
        <img src="/images/purpose/comment-michelangelo.svg" alt="comment" />
        <img src="/images/purpose/pattern.svg" alt="pattern" />
        <img src="/images/purpose/pin.svg" alt="pin" />
        <img src="/images/purpose/exploring-the-infinite.svg" alt="writing" />
        <div>
          <object id="obj" data="/images/purpose/words.svg" type="text/svg+xml" />
        </div>
      </div>
    </div>
  )
}
