import React, { useEffect, useRef, useState } from 'react';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import styles from './Projects.module.scss';

export default function Projects({ content, common }) {
  const introText = useRef(null);
  const projects = useRef(null);
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const refs = [introText.current, projects.current];
    let dur = 1200;
    refs.forEach(ref => {
      let targets = Array.from(ref.children);
      let opt = {
        duration: dur,
        easing: 'cubic-bezier(0.27, 0.6, 0.12, 1.02)',
        fill: 'both',
        delay: 0
      };
      let keyframes = {
        opacity: [0, 1],
        transform: [`translateY(+500px)`, 'initial']
      };
      dur += 1000;

      let entranceAnimation = constructSequentialAnimation(targets, keyframes, opt, 200);
      setAnimations(oldArray => [...oldArray, entranceAnimation]);
    });
  }, [])

  useEffect(() => {
    const refs = [introText.current, projects.current];
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
    <section className={styles.section} id="projects">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mx-auto">
            <div className={styles.intro} ref={introText} id="projects-text">
              <h4 className="gradient-bg">{content.subtitle}</h4>
              <h1>{content.title}</h1>
              <p dangerouslySetInnerHTML={{__html: content.paragraph}} />
            </div>
          </div>
        </div>
        <div className="row gy-4" ref={projects} id="projects-cards">
          {
            content.portifolio.map((item, index) => {
              return (
                <div key={`projects-${index}`} className={`col-12 col-lg-${item.size} ${styles.projects}`}>
                  <a href={item.url} rel="noopener noreferrer" target="_blank" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                    <img src={item.cover} alt="Project" />
                    <div>
                      <h5>{item.name}</h5>
                      <span className="details">{item.type}</span>
                    </div>
                  </a>
                </div>
              )
            })
          }
          <div className="col-12 col-lg-3 offset-lg-5">
            <div className={styles.seeAll}>
              <svg width="35" height="25" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.00356729C1.91127 0.00356729 3.82058 0.00356729 5.73184 0.00356729C6.50236 -0.0271225 7.26846 0.140576 7.96523 0.49245C8.39495 0.710519 8.76156 1.04801 9.02645 1.4694C9.29133 1.89079 9.44471 2.38048 9.47043 2.88693C9.50117 3.27727 9.48477 3.6702 9.42162 4.05609C9.36443 4.41532 9.22855 4.75511 9.02503 5.04789C8.82151 5.34067 8.55607 5.5782 8.25026 5.74118L8.08627 5.84103C8.07424 5.84941 8.06311 5.85918 8.05308 5.87016C8.24831 5.98042 8.44354 6.07819 8.63876 6.20301C9.43724 6.73142 9.7945 7.53236 9.86869 8.5018C9.91616 8.99745 9.87033 9.4982 9.73389 9.97474C9.59745 10.4513 9.37315 10.894 9.07412 11.277C8.53473 11.9832 7.75787 12.4371 6.90906 12.5418C6.44478 12.6148 5.97656 12.6558 5.50733 12.6646C3.67221 12.6771 1.83903 12.6646 0.00390452 12.6646L0 0.00356729ZM2.40909 10.4761C2.99477 10.4761 3.54336 10.4761 4.1017 10.4761C4.703 10.4761 5.30625 10.4761 5.90559 10.4324C6.65917 10.3783 7.15895 9.92892 7.28975 9.18416C7.33332 8.90005 7.33924 8.61083 7.30732 8.32497C7.28875 8.12532 7.22318 7.9339 7.11671 7.76843C7.01023 7.60297 6.86629 7.46882 6.69821 7.37841C6.37103 7.19515 6.00574 7.10285 5.63618 7.11005C4.60344 7.09757 3.56874 7.09965 2.53599 7.09965C2.49338 7.10212 2.45099 7.10768 2.40909 7.11629V10.4761ZM2.40909 4.99017C2.45985 4.99017 2.48913 4.99017 2.52037 4.99017C3.47893 4.99017 4.43749 4.99017 5.39605 4.99017C5.69896 4.97578 5.99915 4.92269 6.29019 4.83206C6.44346 4.79804 6.58666 4.72476 6.70741 4.61856C6.82816 4.51236 6.92283 4.37644 6.98324 4.22252C7.09693 3.91888 7.12871 3.58742 7.075 3.26556C7.0554 3.04434 6.9685 2.836 6.82753 2.67226C6.68656 2.50852 6.49924 2.39835 6.29409 2.35853C6.08033 2.29635 5.86121 2.25731 5.64009 2.24203C4.59367 2.21914 3.54531 2.2129 2.4989 2.2025C2.46883 2.20617 2.43931 2.21386 2.41104 2.22538L2.40909 4.99017ZM19.4953 8.68487H13.0333C13.0138 9.85611 13.6053 10.7319 14.6713 10.9462C15.2921 11.071 15.9051 11.044 16.4283 10.6279C16.6051 10.4559 16.7677 10.2679 16.9144 10.0662C16.9639 10.0022 17.0331 9.95872 17.1096 9.94349C17.832 9.94349 18.5563 9.94349 19.2786 9.94349C19.3069 9.94693 19.335 9.95249 19.3625 9.96013C19.3292 10.2844 19.2234 10.5954 19.0541 10.8672C18.737 11.4351 18.3003 11.9166 17.7785 12.2737C17.2567 12.6308 16.6641 12.8536 16.0476 12.9246C14.8413 13.1387 13.6028 12.8934 12.5491 12.2319C12.0953 11.9565 11.704 11.5779 11.403 11.123C11.102 10.6682 10.8988 10.1483 10.8077 9.60023C10.5676 8.29585 10.5832 7.00187 11.0459 5.75158C11.5593 4.3723 12.5335 3.54016 13.8767 3.20939C15.0566 2.88949 16.3055 3.03736 17.3908 3.62546C18.281 4.11226 18.8432 4.91112 19.1927 5.89096C19.5226 6.78135 19.507 7.71543 19.4953 8.68487ZM17.0511 7.05388C17.0628 6.0241 16.4107 5.20861 15.3253 5.09211C14.0914 4.96104 13.2149 5.71621 13.0821 7.05388H17.0511ZM17.6172 2.15673V0.615191H12.4691V2.15673H17.6172Z" fill="#0A0A0A" /></svg>
              <div>
                <h4>{content.fullPortifolio}</h4>
                <a rel="noopener noreferrer" target="_blank" href={content.url}>{common.seeMore}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}