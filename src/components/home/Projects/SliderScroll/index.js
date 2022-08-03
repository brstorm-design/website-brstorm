import Image from 'next/image';
import React, { useContext, useEffect, useRef } from 'react';
import images from 'src/utils/images';
import styles from './SliderScroll.module.scss';
import SeeMore from 'src/components/common/SeeMore';
import { SmoothScrollContext } from 'src/contexts/SmoothScrollContext';
import ProjectCard from '../ProjectCard';

export default function SliderScroll({ content, portfolio, common }) {
  const spaceHolder = useRef(null);
  const sliderElement = useRef(null);

  const { scroll } = useContext(SmoothScrollContext);

  useEffect(() => {
    document.body.classList.add('page');

    function calcDynamicHeight(sliderElement) {
      const vw = window.innerWidth; // 3605
      const vh = window.innerHeight;
      const objectWidth = sliderElement.scrollWidth;
      const dynHeight = objectWidth - vw + vh + 120;
      return dynHeight;
    }

    function onSmoothScroll(e) {
      if (e.currentElements.el0) {
        sliderElement.current.style.transform = `translate3d(-${e.scroll.y - initialOffsetTop}px, 0, 0)`;
      }
    }

    const initialOffsetTop = spaceHolder.current.getBoundingClientRect().top;
    spaceHolder.current.style.height = `${calcDynamicHeight(sliderElement.current)}px`;

    scroll?.on('scroll', onSmoothScroll);
    return () => {
      scroll?.off('scroll', onSmoothScroll);
    }
  }, [scroll]);


  return (
    <>
      {/* <div className={styles.bumper}>
        Scroll Down
      </div> */}

      <div className={styles.spaceHolder} ref={spaceHolder} id="space-holder">
        <div
          data-scroll
          data-scroll-repeat
          data-scroll-sticky
          data-scroll-target="#space-holder"
          className={styles.sticky}
        >
          <div className="container">
            <div className={styles.cards} ref={sliderElement}>
              {
                portfolio.map((item, index) => {
                  return (
                    <div key={`projects-${index}`}>
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
              <div>
                <SeeMore linkText={common.seeMoreProjects} href={`${content.url}`}>
                  {content.fullPortfolio}
                </SeeMore>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.bumper}>
        Scroll Up
      </div> */}
    </>
  )
}
