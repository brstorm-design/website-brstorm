import React from 'react';
import styles from './Purpose.module.scss';

export default function Purpose() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src="/images/img-placeholder-hero.svg" alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-lg-5 offset-lg-1 d-flex align-items-center">
            <article>
              <h2>What is Our Purpose</h2>
              <div>
                <p>
                  We're passionate about going deep and thinking about every detail,
                  thus <strong>exploring the infinite possibilities of Design</strong>.
                  That's the spirit that rules our work.
                  <br />
                  <br />
                  In such a stormy world, less is more. Having <strong>clear and
                    assertive communication</strong> is essential to stand out.
                  We specialize in creating unique and memorable projects
                  exploring the best in each business. <strong>Let's do a
                    remarkable project?</strong>
                </p>
              </div>
              <a className="btn large ghost">
                See More
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8333 6L9.89332 5.06L6.16666 8.78V0.666668H4.83332V8.78L1.11332 5.05333L0.166656 6L5.49999 11.3333L10.8333 6Z" fill="#555" /></svg>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}