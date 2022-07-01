import React from 'react';
import { rootPath } from 'src/utils/env';
import styles from './RecentProjects.module.scss';
import SeeMore from 'src/components/common/SeeMore';
import { Swiper, SwiperSlide } from 'swiper/react';
//
import daia from 'public/images/portfolio/daia.png';
import catarge from 'public/images/portfolio/catarge.png';
import petsvida from 'public/images/portfolio/petsvida.png';
import Link from 'next/link';
import Image from 'next/image';

export default function RecentProjects({ modal }) {
  const portfolio = [
    {
      id: 1,
      name: 'Daia',
      cover: daia,
    },
    {
      id: 2,
      name: 'Catarge',
      cover: catarge,
    },
    {
      id: 3,
      name: 'PetsVida',
      cover: petsvida,
    },
  ]

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col offset-lg-1">
            <div className={styles.title}>
              {
                modal ? <h2>Projetos Recentes</h2> : <h1>Projetos Recentes</h1>
              }
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <SeeMore linkText="Ver Mais" href="/portfolio" className="d-none d-md-block">
              Portfólio Completo
            </SeeMore>
          </div>
          <div className="col-lg-1"></div>
        </div>

        <Swiper spaceBetween={24} slidesPerView="auto" className="d-none d-md-block">
          {
            portfolio.map(item => {
              return (
                <SwiperSlide key={`project-${item.id}`}>
                  <Link href={`/portfolio/${item.name.toLowerCase()}`}>
                    <a className={styles.project}>
                      <Image objectFit="cover" src={item.cover} layout="responsive" />
                      <div>
                        <h5>{item.name}</h5>
                        <span className="details">{item.type}</span>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
              )
            })
          }
        </Swiper>

        <div className={styles.mobileProjects}>
          {
            portfolio.map(item => {
              return (
                <div className="" key={`project-mobile-${item.id}`}>
                  <Link href="#">
                    <a className={styles.project}>
                      <Image objectFit="cover" src={item.cover} layout="responsive" />
                      <div>
                        <h5>{item.name}</h5>
                        <span className="details">{item.type}</span>
                      </div>
                    </a>
                  </Link>
                </div>
              )
            })
          }
        </div>

      </div>
      <SeeMore linkText="Ver Mais" href="/portfolio" className="d-block d-md-none text-center">
        Portfólio Completo
      </SeeMore>
    </section>
  )
}
