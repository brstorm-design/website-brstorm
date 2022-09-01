import React from 'react';
import data from 'public/data.json';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';
import Header from 'src/layouts/Main/Header';
import Head from 'next/head';
import RecentProjects from 'src/components/portfolio/RecentProjects';
import Contact from 'src/components/home/Contact';
import Footer from 'src/layouts/Main/Footer';
import ProjectPresentation from 'src/components/portfolio/ProjectPresentation';

export default function Project({ content, project }) {

  return (
    <>
      <Head>
        <title>{project.name} • Br.Storm</title>
      </Head>
      <Header common={content.common} content={content.landingPage.brand.header} />

      <div className="main" data-scroll-section>
        <main>
          <ProjectPresentation project={project} />
          <RecentProjects />
          <Contact common={content.common} content={content.home.contact} />
        </main>
        <Footer common={content.common} content={content.home.footer} />
      </div>
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