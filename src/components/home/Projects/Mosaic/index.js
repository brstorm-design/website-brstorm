import React, { useEffect, useRef, useState } from 'react';
import Behance from 'public/images/socials/behance.svg';
import styles from './Mosaic.module.scss';
import Image from 'next/image';
//
import catarge from 'public/images/portfolio/catarge.png';
import rivana from 'public/images/portfolio/rivana.png';
import petsvida from 'public/images/portfolio/petsvida.png';
import maptrack from 'public/images/portfolio/maptrack.png';
import daia from 'public/images/portfolio/daia.png';
import util from 'public/images/portfolio/util.png';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import SeeMore from 'src/components/common/SeeMore';
import Link from 'next/link';
import ProjectCard from '../ProjectCard';

const images = {
  catarge,
  rivana,
  petsvida,
  maptrack,
  daia,
  util,
}

export default function Mosaic({ content, portfolio, common }) {
  const projects = useRef(null);
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const refs = [projects.current];
    let dur = 2000;
    let delay = 0;
    refs.forEach(ref => {
      let targets = Array.from(ref.children);
      let opt = {
        duration: dur,
        easing: 'cubic-bezier(0.27, 0.6, 0.12, 1.02)',
        fill: 'both',
        delay: delay
      };
      let keyframes = {
        opacity: [0, 0.5, 1],
        transform: [`translateY(+500px)`, 'initial']
      };

      let entranceAnimation = constructSequentialAnimation(targets, keyframes, opt, 275);
      setAnimations(oldArray => [...oldArray, entranceAnimation]);
    });
  }, [])

  useEffect(() => {
    const refs = [projects.current];
    if (animations) {
      handleIntersection(refs, animations);
    }
  }, [animations])

  function handleHover(e) {
    if (e.type === 'mouseenter') {
      e.currentTarget.parentElement.style.zIndex = '3';
    }
    else if (e.type === 'mouseleave') {
      e.currentTarget.parentElement.style.zIndex = 'initial';
    }
  }

  return (
    <div className="container">
      <div className="row gy-4" ref={projects} id="projects-cards">
        {
          portfolio.map((item, index) => {
            return (
              <div key={`projects-${index}`} className={`col-12 col-lg-${item.size} ${styles.projects}`}>
                <ProjectCard
                  modal
                  href={`?project=${item.slug}`}
                  as={`/portfolio/${item.slug}`}
                  /* href={item.url}
                  rel="noreferrer"
                  target="_blank" */
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                >
                  <Image src={images[item.slug]} layout="responsive" />
                  <div>
                    <h5>{item.name}</h5>
                    <span className="details">{item.type}</span>
                  </div>
                </ProjectCard>
              </div>
            )
          })
        }
        <div className="col-12 col-lg-3 offset-lg-5">
          <Link href={`${content.url}`}>
            <a className={styles.seeAll}>
              <Behance />
              <SeeMore linkText={common.seeMore}>
                {content.fullPortfolio}
              </SeeMore>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
