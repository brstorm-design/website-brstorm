import React, { useEffect } from 'react';
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
import Section from 'src/components/common/Section';

export default function GeneralPortfolio(props) {
  const home = props.content.home;
  const common = props.content.common;
  const portfolioPage = props.content.portfolioPage;

  useEffect(() => {
    document.body.classList.add('page');
  }, []);

  return (
    <>
      <Head>
        <title>{portfolioPage.pageTitle} • Br.Storm</title>
      </Head>
      <Header content={home.header} common={common} />

      <Section pt={24} mb={20} mt={0}>
        <Title mainTitle={portfolioPage.title} subTitle={portfolioPage.subtitle} align="center" />
      </Section>

      <BrandProjects />

      <Section>
        <WhyUs content={home.whyUs} />
      </Section>

      <Section>
        <Contact common={common} content={home.contact} />
      </Section>

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
  const projects = pt.fullPortfolio[service.jsonName];

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
