import Image from 'next/image';
import { useEffect } from 'react';
import { applyStyles } from 'src/modules/App';
import styles from './David.module.scss';
import david from 'public/images/purpose/david.png';

export default function David({ forwardedRef, translate }) {

  useEffect(() => {
    let targets = forwardedRef.current.querySelectorAll('img[alt="comment"]');
    window.requestAnimationFrame(() => {
      applyStyles(targets, translate);
    });
  });

  const options = {
    rootMargin: '-200px 0px -200px 0px'
  }


  return (
    <div className={styles.image}>
      <div ref={forwardedRef} id="purpose-image">
        <Image src={david} alt="David" />
        <img src="/images/purpose/seal.svg" alt="seal" />
        <img src="/images/purpose/comment-michelangelo.svg" alt="comment" />
        <img src="/images/purpose/pattern.svg" alt="pattern" />
        <img src="/images/purpose/pin.svg" alt="pin" />
        <img src="/images/purpose/exploring-the-infinite.svg" alt="writing" />
      </div>
    </div>
  )
}
