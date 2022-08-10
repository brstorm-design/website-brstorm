import React from 'react';
import styles from './Portfolio.module.scss';
import { rootPath } from 'src/utils/env';

export default function MapTrack() {
  return (
    <img className={styles.project} src={`${rootPath}/images/portfolio/single/maptrack-1.png`} alt="" style={{backgroundColor: 'white'}} />
  )
}
