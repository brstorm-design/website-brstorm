import React, { useEffect, useRef, useState } from 'react';
import styles from './Stairs.module.scss';
import images from 'src/utils/images';
import Image from 'next/image';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import SeeMore from 'src/components/common/SeeMore';
import { rootPath } from 'src/utils/env';
import ProjectCard from '../ProjectCard';

export default function Stairs({ content, portfolio, common }) {
  const projects = useRef(null);
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const refs = [projects.current];
    let dur = 1800;
    let delay = 0;
    refs.forEach((ref, index) => {
      let targets = Array.from(ref.children);
      let opt = {
        duration: dur,
        easing: 'cubic-bezier(0.27, 0.6, 0.12, 1.02)',
        fill: 'both',
        delay: delay,
      };
      let keyframes = {
        opacity: [0, 0.5, 1],
        transform: ['scale(0.89) translateY(85px)', 'initial',]
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

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row gy-4" ref={projects}>
          {
            portfolio.map((item, index) => {
              return (
                <div key={`projects-${index}`} className="col-12 col-lg-6">
                  <ProjectCard href={item.url} rel="noopener noreferrer" target="_blank">
                    <Image src={images[item.slug]} layout="responsive" />
                    <div id="overlay-details">
                      <h5>{item.name}</h5>
                      <span className="details">{item.type}</span>
                    </div>
                  </ProjectCard>
                </div>
              )
            })
          }
          <div className="col-12 col-lg-6 offset-lg-6">
            <SeeMore linkText={common.seeMore} href={`${content.url}`}>
              {content.fullPortfolio}
            </SeeMore>
          </div>
        </div>
      </div>
    </section>
  )
}
