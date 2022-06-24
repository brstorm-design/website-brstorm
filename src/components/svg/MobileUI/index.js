import React from 'react';
import styles from './MobileUI.module.scss';
import InterfaceMobile from 'public/images/cover/web/mobile.svg';

export default function MobileUI() {
  return (
    <InterfaceMobile className={`${styles.interface} track`} />
  )
}
