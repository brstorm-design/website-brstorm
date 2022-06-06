import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Modal.module.scss';
import Close from 'public/images/close.svg';
import ProjectHeader from 'src/components/portfolio/single/Header';

function Modal({ children, open, toggleOpen }) {
  const [animation, setAnimation] = useState(null);
  const modalElement = useRef(null);

  useEffect(() => {
    const ani = modalElement.current.animate(
      [
        {
          opacity: '0',
          transform: 'translateY(50%)',
        },
        {
          opacity: '1',
          transform: 'translateY(0%)',
        }
      ],
      {
        duration: 350,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        fill: 'forwards',
      })
    ani.onfinish = handleFinish;
    setAnimation(ani);
  }, []);

  const handleKeyDown = useCallback(e => {
    if (e.key === 'Escape') {
      toggleOpen();
    }
  }, []);

  useEffect(() => {
    if (animation && animation.startTime) {
      if (open) {
        modalElement.current.style.display = 'flex';
        document.documentElement.style.overflowY = 'hidden';
        document.documentElement.style.paddingRight = '5px';
        document.documentElement.addEventListener('keydown', handleKeyDown, false);
        animation.play();
      } else {
        document.documentElement.removeEventListener('keydown', handleKeyDown, false);
        animation.reverse();
      }
    }
  }, [open]);

  function handleFinish(playback) {
    if (playback.currentTime === 0) {
      modalElement.current.style.display = 'none';
      document.documentElement.style.overflowY = 'auto';
      document.documentElement.style.paddingRight = '0px';
      playback.currentTarget.playbackRate = 1;
    }
  }

  return (
    <div ref={modalElement} className={styles.modal}>
      <div className={styles.button} onClick={toggleOpen}>
        <Close />
      </div>
      
      <div className={styles.modalContent}>
        {children}
      </div>

    </div>
  )
}

export default Modal;