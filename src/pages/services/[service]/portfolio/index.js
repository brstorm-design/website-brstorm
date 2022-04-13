import React from 'react';
import data from 'public/data.json';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';
import BrandProjects from 'src/components/portfolio/BrandProjects';
import Header from 'src/layouts/Header';
import Footer from 'src/layouts/Footer';
import Title from 'src/components/common/Title';
import WhyUs from 'src/components/home/WhyUs';
import Contact from 'src/components/home/Contact';
import Head from 'next/head';

export default function GeneralPortfolio(props) {
  const home = props.content.home;
  const common = props.content.common;

  return (
    <>
      <Head>
        <title>Portfólio {props.service.name} • Br.Storm</title>
      </Head>
      <Header content={home.header} common={common} />

      <Title mainTitle={home.projects.title} subTitle={'Nosso Portfólio'} align="center" />
      <BrandProjects />
      <WhyUs content={home.whyUs} />
      <Contact common={common} content={home.contact} />

      <Footer content={home.footer} common={common} />
    </>
  )
}

export async function getStaticPaths() {
  const paths = data.services.map(service => ({
    params: { service: service.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params, locale }) {
  const service = data.services.find(s => s.slug === params.service);
  const projects = pt.fullportfolio.filter(p => p.categories.includes(service.id));

  switch (locale) {
    case 'pt':
      return {
        props: {
          content: pt,
          service,
          projects,
        }
      }

    case 'en':
      return {
        props: {
          content: en,
          service,
          projects,
        }
      }
  }
}
