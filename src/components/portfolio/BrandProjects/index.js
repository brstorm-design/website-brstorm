import React from 'react';
import { rootPath } from 'src/utils/env';
import styles from './BrandProjects.module.scss'

export default function BrandProjects() {

  let projectList = [
    {
      teste: 'testando',
    },
    {
      teste: 'testando',
    },
    {
      teste: 'testando',
    },
    {
      teste: 'testando',
    },
    {
      teste: 'testando',
    },
    {
      teste: 'testando',
    },
    {
      teste: 'testando',
    },
    {
      teste: 'testando',
    },
  ]

  const sizeSequence = [7, 5, 6, 6, 5, 7, 6, 6];

  function getSequenceIndex(i) {
    if (i < 8) {
      return i;
    } else {
      while (i >= 8) {
        i = i - 8;
      }
      return i;
    }
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row gy-4">
          {
            projectList.map((project, index) => {
              let size = sizeSequence[getSequenceIndex(index)];
              return (
                <div key={`proj-${index}`} className={`col-12 col-lg-${size}`}>
                  <div className={styles.placeholder}>
                    <img src={`${rootPath}/images/wireframes/img-icon.svg`} alt="" />
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </section>
  )
}
