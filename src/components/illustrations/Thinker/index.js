import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import styles from './Thinker.module.scss';
import thinker from 'public/images/illustrations/the-thinker/thinker-front.png';
import thinkerBack from 'public/images/illustrations/the-thinker/thinker-back.png';
//SVGs
import DigitalDesign from 'public/images/illustrations/the-thinker/digital-design.svg';
import Logo from 'public/images/illustrations/the-thinker/logo.svg';
import SearchBox from 'public/images/illustrations/the-thinker/search-box.svg';
import FirstResult from 'public/images/illustrations/the-thinker/result-1.svg';
import SecondResult from 'public/images/illustrations/the-thinker/result-2.svg';
import Snippet from 'public/images/illustrations/the-thinker/snippet.svg';
import Typewriter from 'typewriter-effect/dist/core';
import { constructAnimation } from 'src/modules/App';

export default function Thinker() {
  const search = useRef(null);

  const keyframes = {
    opacity: [0, 0.1, 0.2, 0.3, 1],
    transform: ['translate3d(0, 35px, 0)', 'translate3d(0, 0, 0)'],
  }

  const options = {
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    duration: 1500,
    fill: 'both',
  }

  function handleFinish(playback) {
    if (playback.currentTime === 0) {
      playback.currentTarget.playbackRate = 1;
      playback.currentTarget.pause();
    }
  }

  function playAnimations(animations, direction) {
    animations.forEach(animation => {
      if (direction === 'normal') {
        animation.play();
      } else if (direction === 'reverse') {
        animation.reverse();
      } else {
        return;
      }
    })
  }

  useEffect(() => {
    const children = search.current.children;
    const targets = [children[1], children[2]];
    const animations = [];
    targets.forEach((target, index) => {
      let ani = constructAnimation(target, keyframes, { ...options, delay: index * 200 });
      ani.onfinish = handleFinish;
      animations.push(ani);
    });


    let type = new Typewriter('#search-text', {
      wrapperClassName: 'writer-wrapper',
      cursorClassName: 'writer-cursor',
      loop: true,
    })

    type
      .pauseFor(1000)
      .typeString('Br.Storm Design')
      .pauseFor(400)
      .callFunction(() => playAnimations(animations, 'normal'))
      .pauseFor(1700 + 400)
      .callFunction(() => playAnimations(animations, 'reverse'))
      .pauseFor(1700 + 400)
      .start()
  }, []);

  return (
    <div className={styles.illustration}>
      <Image className={styles.statue} placeholder="blur" src={thinker} alt="The Thinker Sculpture" />
      <DigitalDesign />
      <Logo />
      <Snippet />

      <div className={styles.search} ref={search}>
        <SearchBox />
        <FirstResult />
        <SecondResult />
      </div>
      <Image className={styles.headBack} placeholder="blur" src={thinkerBack} alt="" />
    </div>
  )
}
