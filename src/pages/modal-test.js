import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Modal from 'src/components/common/Modal';
import styles from '../styles/pages/modal-test.module.scss'
import useToggle from 'src/hooks/useToggle';
import ModalBody from 'src/components/common/Modal/ModalBody';
import Link from 'next/link';
import MobileUI from 'src/components/svg/MobileUI';
import WhatsAppFixed from 'src/components/common/WhatsAppFixed';

export default function ModalTest() {
  const { status: open, toggleStatus: toggleOpen } = useToggle();

  const sentence = 'The quick brown fox jumps over the lazy dog.';

  return (
    <div>
      <div className="main" data-scroll-section>
        <main className={styles.main}>
          <div>
            <h1 className={styles.h1}>{sentence}</h1>
            <h2 className={styles.h2}>{sentence}</h2>
            <h3 className={styles.h3}>{sentence}</h3>
            <h4 className={styles.h4}>{sentence}</h4>
            <h5 className={styles.h5}>{sentence}</h5>
            <h6 className={styles.h6}>{sentence}</h6>

            <br /> <br />

            <div className={styles.overline}>{sentence}</div>
            <p className={styles.pDefault}>{sentence}</p>
            <p className={styles.pBold}>{sentence}</p>
            <p className={styles.pUnder}>{sentence}</p>

            <br /> <br />

            <div className={styles.smDefault}>{sentence}</div>
            <div className={styles.smBold}>{sentence}</div>
            <div className={styles.smUnder}>{sentence}</div>

            <br /> <br />

            <div className={styles.capDefault}>{sentence}</div>
            <div className={styles.capBold}>{sentence}</div>

            <br /> <br />

            <div className={styles.btnLarge}>Large Button</div>
            <div className={styles.btnDefault}>Default Button</div>

            <hr style={{ margin: '2rem 0' }} />

            <div style={{
              display: 'flex',
              columnGap: '30px',
              flexWrap: 'wrap',
            }}>
              <button className="btn small">Primary Small</button>
              <button className="btn secondary small">Secondary Small</button>
              <button className="btn ghost small">Ghost Small</button>
            </div>

            <br />

            <div style={{
              display: 'flex',
              columnGap: '30px',
              flexWrap: 'wrap',
            }}>
              <button className="btn">Primary Default</button>
              <button className="btn secondary">Secondary Default</button>
              <button className="btn ghost">Ghost Default</button>
            </div>

            <br />

            <div style={{
              display: 'flex',
              columnGap: '30px',
              flexWrap: 'wrap',
            }}>
              <button className="btn large">Primary Large</button>
              <button className="btn secondary large">Secondary Large</button>
              <button className="btn ghost large">Ghost Large</button>
            </div>

          </div>
          <div className={styles.section}>
            <Head>
              <title>Modal Test</title>
            </Head>
            <Modal open={open} toggleOpen={toggleOpen}>
              <ModalBody project={{ slug: 'maptrack' }} />
            </Modal>
            <section>
              {/* <button className="btn" onClick={toggleOpen}>Open Modal</button> */}
            </section>
            <MobileUI />
          </div>
        </main>
      </div>
    </div>
  )
}
