import React from 'react';
import styles from './TypeEffect.module.scss';
import Typewriter from 'typewriter-effect';

export default function TypeEffect({ strings }) {

  const options = {
    strings,
    autoStart: true,
    loop: true,
  }

  return (
    <Typewriter options={options} />
  )
}