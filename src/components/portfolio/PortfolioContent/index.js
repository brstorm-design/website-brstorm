import React from 'react';
import { rootPath } from 'src/utils/env';
import styles from './PortfolioContent.module.scss';

export default function PortfolioContent() {
  return (
    <section className={styles.section}>
      <div className={styles.placeholder}>
        <img src={`${rootPath}/images/wireframes/img-icon.svg`} alt="" />
      </div>
    </section>
  )
}
