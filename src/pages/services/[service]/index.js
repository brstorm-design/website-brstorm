import React from 'react';
import data from 'public/data.json';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';
import Head from 'next/head';
import Header from 'src/layouts/Header';
import Methodology from 'src/components/pitch/Methodology';
import Cover from 'src/components/home/Cover';
import Projects from 'src/components/home/Projects';
import WhyUs from 'src/components/home/WhyUs';
import Contact from 'src/components/home/Contact';
import Footer from 'src/layouts/Footer';
import Testimonials from 'src/components/home/Testimonials';
import PitchCover from 'src/components/pitch/PitchCover';
import Details from 'src/components/pitch/Details';

export default function LandingPage({ content, service }) {
  const home = content.home;
  const common = content.common;
  const landing = content.landingPage[service.jsonName];

  return (
    <>
      <Head>
        <title>Brand • Br.Storm</title>
      </Head>
      <Header content={landing.header} common={content.common} />

      <PitchCover content={landing.cover} common={common} />
      <Details content={landing.details} />
      <Projects layout="stairs" content={home.projects} common={common} />
      <Methodology content={landing.method} />
      <WhyUs content={home.whyUs} />
      <Testimonials content={home.testimonials} />
      <Contact content={home.contact} common={common} />

      <Footer content={home.footer} common={common} />
    </>
  )
}

export async function getStaticPaths() {
  const filteredServices = data.services.filter(service => service.hasLandingPage);
  const paths = filteredServices.map(service => ({
    params: { service: service.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params, locale }) {
  const service = data.services.find(s => s.slug === params.service);

  switch (locale) {
    case 'pt':
      return {
        props: {
          content: pt,
          service,
        }
      }

    case 'en':
      return {
        props: {
          content: en,
          service,
        }
      }
  }
}