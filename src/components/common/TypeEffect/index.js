import React from 'react';
import styles from './TypeEffect.module.scss';
import Typewriter from 'typewriter-effect';

export default function TypeEffect() {

  const options = {
    strings: [
      'Focus on details',
      'Superb design',
      'Stunning websites',
      'Great client experience'
    ],
    autoStart: true,
    loop: true,
  }

  return (
    <Typewriter options={options} />
  )
}