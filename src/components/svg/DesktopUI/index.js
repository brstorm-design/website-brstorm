import React from 'react';
import styles from './DesktopUI.module.scss';
import InterfaceDesktop from 'public/images/cover/web/desktop.svg';

export default function DesktopUI({ width = 285, height = 180 }) {
  return (
    <div className={`${styles.interface} track`} style={{ width: `${width}px`, height: `${height}px` }}>
      <InterfaceDesktop />
    </div>
  )
}
