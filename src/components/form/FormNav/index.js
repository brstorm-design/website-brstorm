import React from 'react';
import styles from './FormNav.module.scss';
import Chevron from 'public/images/chevron-up.svg';
import AnchorButton from 'src/components/common/AnchorButton';
import { inOutCube } from 'src/utils/easings';

export default function FormNav() {
  return (
    <div className={styles.formNav}>

      <AnchorButton href="#" duration={1500} easing={inOutCube}>
        <Chevron />
      </AnchorButton>

      <AnchorButton href="#" duration={1500} easing={inOutCube}>
        <Chevron />
      </AnchorButton>
      
    </div>
  )
}
