import React from 'react';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className={styles.contact}>
              <div>
                <h1>Let's Connect</h1>
                <p>
                  <strong>What did you think?</strong> If you have any doubts to clear
                  or <br /> questions to ask, feel free to schedule a meeting with us.
                </p>
              </div>
              <div>
                <a href="#" className="btn large">Book a Meeting Right Now</a>
                <small><sup>*</sup> We’re available for meeting <br /> Mon to Fri | 10am to 7pm</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}