import React from 'react';
import styles from './FormNav.module.scss';
import Chevron from 'public/images/chevron-up.svg';
import AnchorButton from 'src/components/common/AnchorButton';
import { inOutQuad } from 'src/utils/easings';

export default function FormNav() {
  return (
    <div className={styles.formNav}>

      <AnchorButton href="#businessSize" offset="center" easing={inOutQuad} dur={800}>
        <Chevron />
      </AnchorButton>

      <AnchorButton href="#" offset="center">
        <Chevron />
      </AnchorButton>
      
    </div>
  )
}
