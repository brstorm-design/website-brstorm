import React, { useEffect } from 'react';
import styles from './GoogleSearch.module.scss';
import SearchBox from 'public/images/illustrations/the-thinker/search-box.svg';
import FirstResult from 'public/images/illustrations/the-thinker/result-1.svg';
import SecondResult from 'public/images/illustrations/the-thinker/result-2.svg';
import { constructAnimation } from 'src/modules/App';
import Typewriter from 'typewriter-effect/dist/core';

export default function GoogleSearch() {

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
    const searchResults = document.querySelectorAll('.searchResult');
    const animations = [];
    searchResults.forEach((target, index) => {
      let ani = constructAnimation(target, keyframes, { ...options, delay: 3.25 + (index * 200) });
      ani.onfinish = handleFinish;
      animations.push(ani);
    });

    let type = new Typewriter('#search-text', {
      wrapperClassName: 'writer-wrapper',
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
    <div className={styles.search}>
      <SearchBox />
      <FirstResult />
      <SecondResult />
    </div>
  )
}
