import React, { useEffect } from 'react';
import styles from './Pricing.module.scss';

export default function Pricing({ content, mt, mb }) {

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
    <section style={{marginTop: `${mt}px`, marginBottom: `${mb}px`}} className={styles.section}>
      <div className="col-12 col-lg-6 mx-auto">
        <div className={styles.intro}>
          <h4 className="gradient-bg">{content.subtitle}</h4>
          <h1>{content.title}</h1>
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
                  <div className={`${styles.pack} ${packIndex === 1 ? styles.active : ''}`} onMouseEnter={toggleStyle} onMouseLeave={toggleStyle}>
                    <div className={styles.title}>
                      <h2>{pack.name}</h2>
                      <h6>{pack.shortText}</h6>
                    </div>
                    <div>
                      <small>{pack.longText}</small>
                      
                      <ul>

                        {/* loop dos itens inclusos */}
                        {
                          pack.included.map((included, includedIndex) => {
                            return (
                              <li key={`inc-${includedIndex}`}>
                                <a href={`#item-${includedIndex}-${packIndex}`} data-bs-toggle="collapse" aria-expanded="false" className="collapsed">
                                  <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path /></svg>
                                  <h6>{included.name}</h6>
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
                      <small>Investment value:</small>
                      <h4>{pack.value}</h4>
                    </div>
                    <p className="details">{content.note}</p>
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