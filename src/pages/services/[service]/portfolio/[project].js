import React from 'react';
import data from 'public/data.json';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';
import RecentProjects from 'src/components/portfolio/RecentProjects';
import Head from 'next/head';
import Header from 'src/layouts/Header';
import Footer from 'src/layouts/Footer';
import Contact from 'src/components/home/Contact';
import PortfolioContent from 'src/components/portfolio/PortfolioContent';
import SeeMore from 'src/components/common/SeeMore';

export default function SinglePortfolio({ content, project }) {
  return (
    <>
      <Head>
        <title>{project.name} • Br.Storm</title>
      </Head>
      <Header common={content.common} content={content.home.header} />
      
      <PortfolioContent />
      <RecentProjects />
      <Contact common={content.common} content={content.home.contact} />

      <Footer common={content.common} content={content.home.footer} />
    </>
  )
}

export async function getStaticPaths() {
  const unfilteredPaths = pt.fullportfolio.flatMap(project => {
    return data.services.map(service => {
      if (project.categories.includes(service.id)) {
        return {
          params: {
            project: project.slug,
            service: service.slug,
          },
        }
      }
    })
  });
  const paths = unfilteredPaths.filter(el => el !== undefined);
  return { paths, fallback: false }
}

export async function getStaticProps({ params, locale }) {
  const project = pt.fullportfolio.find(p => p.slug === params.project);

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