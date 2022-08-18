import React from 'react';
import data from 'public/data.json';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';
import Header from 'src/layouts/Main/Header';
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
import Footer from 'src/layouts/Main/Footer';

export default function Project({ content, project }) {
  const projectComponents = {
    Catarge: Catarge,
    LFD: LFD,
    MapTrack: MapTrack,
    NewAge: NewAge,
    PetsVida: PetsVida,
    Rivana: Rivana,
    RukaMachi: RukaMachi,
    TiagoGarcia: TiagoGarcia,
  }

  const ProjectComponent = projectComponents[project.name];

  return (
    <>
      <Head>
        <title>{project.name} • Br.Storm</title>
      </Head>
      <Header common={content.common} content={content.landingPage.brand.header} />

      <div className="main" data-scroll-section>
        <main>
          <ProjectComponent />
          <RecentProjects />
          <Contact common={content.common} content={content.home.contact} />
        </main>
        <Footer common={content.common} content={content.home.footer} />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = data.projects.flatMap(project => {
    return data.services.map(service => ({
      params: { project: project.slug, service: service.slug }
    }))
  })
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