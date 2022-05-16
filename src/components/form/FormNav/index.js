import React from 'react';
import styles from './FormNav.module.scss';
import Chevron from 'public/images/chevron-up.svg';
import AnchorButton from 'src/components/common/AnchorButton';
import { inOutQuad } from 'src/utils/easings';

export default function FormNav({ activeField }) {
  
  let prevId = activeField?.previousElementSibling.id || undefined;
  let nextId = activeField?.nextElementSibling.id || undefined;

  return (
    <div className={styles.formNav}>

      <AnchorButton href={`#${prevId}`} offset="center" easing={inOutQuad} dur={500}>
        <Chevron />
      </AnchorButton>

      <AnchorButton href={`#${nextId}`} offset="center" easing={inOutQuad} dur={500}>
        <Chevron />
      </AnchorButton>
      
    </div>
  )
}
