import React from 'react';
import styles from './Header.module.scss';

export default function ProjectHeader() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div>
            <h4>Maptrack</h4>
            <small>Rastreamento de Ativos</small>
          </div>
          <div>
            <small><strong>Identidade Visual • 2021</strong></small>
            <small>Coorparoo / Austrália</small>
          </div>
        </div>
      </div>
    </header>
  )
}
