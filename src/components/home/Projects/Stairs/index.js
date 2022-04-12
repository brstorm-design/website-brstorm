import React, { useEffect, useRef, useState } from 'react';
import styles from './Stairs.module.scss';
import images from 'src/utils/images';
import Image from 'next/image';
import Arrow from 'public/images/arrow-forward.svg';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';

export default function Stairs({ content, common, portfolio }) {
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
      <div className="row gy-4" ref={projects}>
        {
          portfolio.map((item, index) => {
            return (
              <div key={`projects-${index}`} className="col-12 col-lg-6">
                <a href={item.url} rel="noopener noreferrer" target="_blank" className={styles.link}>
                  <Image placeholder="blur" src={images[item.slug]} layout="responsive" />
                  <div id="overlay-details">
                    <h5>{item.name}</h5>
                    <span className="details">{item.type}</span>
                  </div>
                </a>
              </div>
            )
          })
        }
        <div className="col-12 col-lg-6 offset-lg-6">
          <div className={styles.seeMore}>
            <h4>{content.fullportfolio}</h4>
            <a href="#">
              {common.seeMore}
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
