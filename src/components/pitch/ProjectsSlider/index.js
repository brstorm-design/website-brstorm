import React from 'react';
import styles from './ProjectsSlider.module.scss';

export default function ProjectsSlider({ content, mt, mb }) {

  const images1 = [
    {
      id: '1'
    },
    {
      id: '2'
    },
    {
      id: '3'
    },
    {
      id: '4'
    },
    {
      id: '1'
    },
    {
      id: '2'
    },
    {
      id: '3'
    },
    {
      id: '4'
    },
  ]
  const images2 = [
    {
      id: '4'
    },
    {
      id: '3'
    },
    {
      id: '2'
    },
    {
      id: '1'
    },
    {
      id: '4'
    },
    {
      id: '3'
    },
    {
      id: '2'
    },
    {
      id: '1'
    },
  ]

  return (
    <section style={{marginTop: `${mt}px`, marginBottom: `${mb}px`}} className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mx-auto">
            <div className={styles.intro}>
              <h4 className="gradient-bg">{content.subtitle}</h4>
              <h1>{content.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: content.paragraph }} />
            </div>
          </div>
        </div>
        <div className={`row gy-4 flex-nowrap ${styles.row1}`}>
          {
            images1.map((img, index) => {
              return (
                <div className="col-4" key={`item-${index}`}>
                  <img src={`/images/wireframes/projects-${img.id}.svg`} alt="" />
                </div>
              )
            })
          }
        </div>
        <div className={`row gy-4 flex-nowrap ${styles.row2}`}>
          {
            images2.map((img, index) => {
              return (
                <div className="col-4" key={`item-${index}`}>
                  <img src={`/images/wireframes/projects-${img.id}.svg`} alt="" />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}