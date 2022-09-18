import React from 'react';
import styles from './WebDevelopment.module.scss';
import AnimatedLogo from 'src/components/svg/AnimatedLogo';
import MobileUI from 'src/components/svg/MobileUI';
import DesktopUI from 'src/components/svg/DesktopUI';
import GoogleSearch from 'src/components/svg/GoogleSearch';
import Snippet from 'public/images/illustrations/web-dev/snippet.svg';
import Tools from 'public/images/illustrations/web-dev/tools.svg';

export default function WebDevelopment() {
  return (
    <div className={styles.webDev}>
      <div className={styles.search}>
        <GoogleSearch />
      </div>

      <div className={styles.logo}>
        <AnimatedLogo />
      </div>

      <div className={styles.mobile}>
        <MobileUI />
      </div>

      <div className={styles.desktop}>
        <DesktopUI style={{width: '100%', height: '100%'}} />
      </div>

      <div className={styles.snippet}>
        <Snippet />
      </div>

      <div className={styles.tools}>
        <Tools />
      </div>
    </div>
  )
}
