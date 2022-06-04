import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Modal from 'src/components/common/Modal';
import styles from '../styles/pages/modal-test.module.scss'
import useToggle from 'src/hooks/useToggle';

export default function ModalTest() {
  const { status: gueiOpen, toggleStatus: toggleGueiOpen } = useToggle();
  const { status: malakoiOpen, toggleStatus: toggleMalakoiOpen } = useToggle();

  useEffect(() => {
    document.body.classList.add('page');
  }, []);

  return (
    <div className={styles.section}>
      <Head>
        <title>Modal Test</title>
      </Head>

      <Modal open={gueiOpen} toggleOpen={toggleGueiOpen}>
        <section>
          <div className="container">
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
          </div>
        </section>
      </Modal>

      <Modal open={malakoiOpen} toggleOpen={toggleMalakoiOpen}>
        <div>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
        </div>
      </Modal>

      <section>
        <button className="btn" onClick={toggleGueiOpen}>Open Guei</button>
        <button className="btn" onClick={toggleMalakoiOpen}>Open Modalakoi</button>
      </section>
    </div>
  )
}
