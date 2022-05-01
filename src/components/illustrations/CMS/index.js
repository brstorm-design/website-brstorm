import React, { useEffect } from 'react';
import styles from './CMS.module.scss';
import Screens from 'public/images/illustrations/cms/screens.svg';
import Typewriter from 'typewriter-effect/dist/core';
import TextScramble from 'src/utils/TextScramble';

export default function CMS() {

  useEffect(() => {
    const text = document.getElementById('front-end-text');
    const scramble = new TextScramble(text);

    let type = new Typewriter('#cms-text', {
      loop: true,
      wrapperClassName: 'writer-wrapper',
      cursorClassName: 'writer-cursor',
    })

    type
      .callFunction(() => {
        scramble.setText('');
      })

      .pauseFor(2500)
      .typeString('Be Unique & Memorable')
      .pauseFor(100)

      .callFunction(() => {
        scramble.setText('Be Unique &amp; Memorable');
      })

      .pauseFor(3000)
      .start()
  }, [])

  return (
    <div className={styles.illustration}>
      <Screens />
      <div className={styles.gradients}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
