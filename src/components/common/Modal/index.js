import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from './Modal.module.scss';
import Close from 'public/images/close.svg';
import { SmoothScrollContext } from 'src/contexts/SmoothScrollContext';

function Modal({ children, open, toggleOpen }) {
  const [animation, setAnimation] = useState(null);
  const [modalScroll, setModalScroll] = useState(null);
  const modalElement = useRef(null);

  const { scroll } = useContext(SmoothScrollContext);

  /*** create and set modal `locomotive-scroll` instance ***/
  useEffect(() => {
    if (!modalScroll) {
      (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const modalScrollContainer = modalElement.current.querySelector('[data-scroll-container]');

        const options = {
          el: modalScrollContainer,
          smooth: true,
        }

        const modalLocomotive = new LocomotiveScroll(options);
        modalLocomotive?.scroll?.scrollbar?.classList.add('modal-scrollbar')
        setModalScroll(modalLocomotive)
      })();
    }

    return () => {
      if (modalScroll) {
        modalScroll.destroy();
        document.documentElement.classList.add(modalScroll.smoothClass, 'has-scroll-init');
      }
    }

  }, [modalScroll]);

  /*** create and set animation ***/
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
      animation.reverse();
    }
  }, [animation]);

  useEffect(() => {
    if (animation && animation.startTime) {
      if (open) {
        modalElement.current.style.display = 'flex';
        modalElement.current.style.top = Math.abs(modalElement.current.getBoundingClientRect().top) + 'px';
        document.body.classList.add('modal-open');
        document.addEventListener('keydown', handleKeyDown, false);
        scroll.stop();
        document.querySelector('#header')?.style.transform = 'translateY(-100%)';
        modalScroll.start();
        modalScroll.update();
        animation.play();
      } else {
        document.removeEventListener('keydown', handleKeyDown, false);
        scroll.start();
        modalScroll.stop();
      }
    }
  }, [open]);

  function handleFinish(playback) {
    if (playback.currentTime === 0) {
      toggleOpen();
      modalElement.current.style.display = 'none';
      modalElement.current.style.top = '0px';
      document.querySelector('#header')?.style.transform = 'translateY(0%)';
      playback.currentTarget.playbackRate = 1;
      document.body.classList.remove('modal-open');
    }
  }

  return (
    <div ref={modalElement} className={styles.modal} role="dialog">
      <div className={styles.button} onClick={() => {
        animation.reverse();
      }}>
        <Close />
      </div>

      <div data-scroll-container style={{ marginTop: '-12px' }}>
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>

    </div>
  )
}

export default Modal;