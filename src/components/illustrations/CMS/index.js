import React, { useEffect } from 'react';
import styles from './CMS.module.scss';
import Screens from 'public/images/illustrations/cms/screens.svg';
import Typewriter from 'typewriter-effect/dist/core';
import TextScramble from 'src/utils/TextScramble';

export default function CMS() {

  useEffect(() => {
    const text = document.getElementById('front-end-text');
    const scrambleTop = new TextScramble(text.children[0]);
    const scrambleBottom = new TextScramble(text.children[1]);

    let type = new Typewriter('#cms-text', {
      loop: true,
      wrapperClassName: 'writer-wrapper',
      cursorClassName: 'writer-cursor',
    })

    type
      .callFunction(() => {
        scrambleTop.setText('');
        scrambleBottom.setText('');
      })

      .pauseFor(2500)
      .typeString('Be Unique & Memorable')
      .pauseFor(100)

      .callFunction(() => {
        scrambleTop.setText('Be Unique');
        scrambleBottom.setText('&amp; Memorable');
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
