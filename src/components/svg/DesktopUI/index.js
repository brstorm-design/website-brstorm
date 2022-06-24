import React from 'react';
import styles from './DesktopUI.module.scss';
import InterfaceDesktop from 'public/images/cover/web/desktop.svg';

export default function DesktopUI() {
  return (
    <InterfaceDesktop className={`${styles.interface} track`} />
  )
}
