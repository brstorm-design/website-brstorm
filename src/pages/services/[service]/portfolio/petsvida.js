import React from 'react';
import pt from 'src/languages/pt.json';
import data from 'public/data.json';
import RecentProjects from 'src/components/portfolio/RecentProjects';
import Head from 'next/head';
import Header from 'src/layouts/Header';
import Footer from 'src/layouts/Footer';
import Contact from 'src/components/home/Contact';
import PetsVida from 'src/components/portfolio/PetsVida';

export default function SinglePortfolio({ content }) {
  return (
    <>
      <Head>
        <title>{'project.name'} • Br.Storm</title>
      </Head>
      <Header common={content.common} content={content.landingPage.header} />
      
      <PetsVida />
      <RecentProjects />
      <Contact common={content.common} content={content.home.contact} />

      <Footer common={content.common} content={content.home.footer} />
    </>
  )
}

export async function getStaticPaths() {
  const paths = data.services.map(service => ({
    params: { service: service.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps() {
  return {
    props: {
      content: pt,
    }
  }
}