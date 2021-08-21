import React from 'react';
import styles from './ImagePlaceholder.module.scss';
import icon from '../../../../public/images/icon-image.svg';
import Image from 'next/image';

export default function ImagePlaceholder({ width, height }) {
  return (
    <div className={styles.image} style={{width: width + 'px', height: height + 'px'}}>
      <Image src={icon} alt="" />
    </div>
  )
}