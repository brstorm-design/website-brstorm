import React from 'react';
import styles from './MobileUI.module.scss';
import InterfaceMobile from 'public/images/cover/web/mobile.svg';

export default function MobileUI({ width = 185, height = 310 }) {
  return (
    <div className={`${styles.interface} track`} style={{ width: `${width}px`, height: `${height}px` }}>
      <InterfaceMobile />
    </div>
  )
}
