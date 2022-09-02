import React, { useEffect } from 'react';
import useMediaQuery from 'src/hooks/useMediaQuery';
import styles from './Pricing.module.scss';

export default function Pricing({ content }) {
  const isMobile = useMediaQuery('lg');

  useEffect(() => {
    const elements = document.querySelectorAll('#item-0-1, #item-1-1');
    const elementsArr = Array.from(elements);
    elementsArr.forEach(el => {
      new bootstrap.Collapse(el);
    })
  }, [])

  function toggleStyle() {
    document.querySelectorAll(`.${styles.pack}`)[1].classList.toggle(styles.active);
  }

  return (
    <div className={styles.section}>
      <div className="col-12 col-lg-6 mx-auto">
        <div className={styles.intro}>
          <p className="overline gradient-bg">{content.overline}</p>
          <h2>{content.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: content.text }} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* loop dos pacotes */}
          {
            content.packages.map((pack, packIndex) => {
              return (
                <div className="col-12 col-lg-4" key={`pack-${packIndex}`}>
                  <div className={`${styles.pack} ${packIndex === 1 ? styles.active : ''}`}
                    onMouseEnter={isMobile ? null : toggleStyle}
                    onMouseLeave={isMobile ? null : toggleStyle}
                  >
                    <div className={styles.title}>
                      <h3>{pack.name}</h3>
                      <p className="small">{pack.shortText}</p>
                    </div>
                    <div>
                      <p className="small">{pack.longText}</p>
                      <ul>

                        {/* loop dos itens inclusos */}
                        {
                          pack.included.map((included, includedIndex) => {
                            return (
                              <li key={`inc-${includedIndex}`}>
                                <a href={`#item-${includedIndex}-${packIndex}`} data-bs-toggle="collapse" aria-expanded="false" className="collapsed">
                                  <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="#E93CAC"><path d="M0 0h24v24H0V0z" fill="none" /><path /></svg>
                                  <p className="small">{included.name}</p>
                                </a>
                                <div id={`item-${includedIndex}-${packIndex}`} className="collapse">
                                  <div>
                                    {/* loop dos sub-itens dos inclusos */}
                                    {
                                      included.items.map((item, index) => {
                                        return (
                                          <div key={`detail-${index}`} className="details">
                                            {`- ${item}`}
                                          </div>
                                        )
                                      })
                                    }
                                  </div>
                                </div>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                    <div>
                      <p className="small">{content.valueText}</p>
                      <p className="overline">{pack.value}</p>
                    </div>
                    <p className="details">{content.note}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}