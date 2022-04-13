import Link from 'next/link';
import React from 'react';
import { rootPath } from 'src/utils/env';
import styles from './RecentProjects.module.scss';
import Arrow from 'public/images/arrow-forward.svg';
import SeeMore from 'src/components/common/SeeMore';

export default function RecentProjects() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.title}>
          <h1>Projetos Recentes</h1>
          <SeeMore linkText="Ver Mais" href="/portfolio" className="d-none d-md-block">
            Portfólio Completo
          </SeeMore>
        </div>
        <div className="row gy-4">
          <div className="col-12 col-lg-6">
            <div className={styles.placeholder}>
              <img src={`${rootPath}/images/wireframes/img-icon.svg`} alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.placeholder}>
              <img src={`${rootPath}/images/wireframes/img-icon.svg`} alt="" />
            </div>
          </div>
        </div>
      </div>
      <SeeMore linkText="Ver Mais" href="/portfolio" className="d-block d-md-none text-center">
        Portfólio Completo
      </SeeMore>
    </section>
  )
}
