import React from 'react';
import data from 'public/data.json';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';
import Header from 'src/layouts/Header';
//
import Catarge from 'src/components/portfolio/Catarge';
import LFD from 'src/components/portfolio/LFD';
import MapTrack from 'src/components/portfolio/MapTrack';
import NewAge from 'src/components/portfolio/NewAge';
import PetsVida from 'src/components/portfolio/PetsVida';
import Rivana from 'src/components/portfolio/Rivana';
import RukaMachi from 'src/components/portfolio/RukaMachi';
import TiagoGarcia from 'src/components/portfolio/TiagoGarcia';
import Head from 'next/head';
import RecentProjects from 'src/components/portfolio/RecentProjects';
import Contact from 'src/components/home/Contact';
import Footer from 'src/layouts/Footer';

export default function Project({ content, project }) {
  const projectComponents = {
    Catarage: Catarge,
    LFD: LFD,
    MapTrack: MapTrack,
    NewAge: NewAge,
    PetsVida: PetsVida,
    Rivana: Rivana,
    RukaMachi: RukaMachi,
    TiagoGarcia: TiagoGarcia,
  }

  const Project = projectComponents[project.name];

  return (
    <>
      <Head>
        <title>{project.name} • Br.Storm</title>
      </Head>
      <Header common={content.common} content={content.landingPage.brand.header} />

      <Project />
      <RecentProjects />
      <Contact common={content.common} content={content.home.contact} />

      <Footer common={content.common} content={content.home.footer} />
    </>
  )
}

export async function getStaticPaths() {
  const paths = data.projects.map(project => ({
    params: { project: project.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params, locale }) {
  const project = data.projects.find(project => project.slug === params.project);

  switch (locale) {
    case 'pt':
      return {
        props: {
          content: pt,
          project,
        }
      }

    case 'en':
      return {
        props: {
          content: en,
          project,
        }
      }
  }
}