import React from 'react';
import { rootPath } from 'src/utils/env';
import styles from './Portfolio.module.scss';

export default function Rivana() {
  return (
    <img className={styles.project} src={`${rootPath}/images/portfolio/single/rivana.png`} alt="" />
  )
}
