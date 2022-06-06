import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Modal from 'src/components/common/Modal';
import styles from '../styles/pages/modal-test.module.scss'
import useToggle from 'src/hooks/useToggle';
import ProjectHeader from 'src/components/portfolio/single/Header';
import MapTrack from 'src/components/portfolio/MapTrack';
import RecentProjects from 'src/components/portfolio/RecentProjects';
import ProjectBody from 'src/components/portfolio/single/Body';

export default function ModalTest() {
  const { status: open, toggleStatus: toggleOpen } = useToggle();

  useEffect(() => {
    document.body.classList.add('page');
  }, []);

  return (
    <div className={styles.section}>
      <Head>
        <title>Modal Test</title>
      </Head>

      <Modal open={open} toggleOpen={toggleOpen}>
        <ProjectHeader />
        <ProjectBody>
          <MapTrack />
          <RecentProjects modal />
        </ProjectBody>
      </Modal>

      <section>
        <button className="btn" onClick={toggleOpen}>Open Modal</button>
      </section>
    </div>
  )
}
