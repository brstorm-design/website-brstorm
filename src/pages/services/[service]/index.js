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

export default function LandingPage({ content, service }) {
  const page = content.home;
  const pitch = content.pitch;
  const common = content.common;
  const landing = content.landingPage;

  return (
    <>
      <Head>
        <title>Brand • Br.Storm</title>
      </Head>
      <Header content={landing.header} common={content.common} />

      <Cover content={page.cover} common={common} />
      <Projects format="stairs" content={page.projects} common={common} allProjects={content.fullportfolio} />
      <Methodology content={pitch[service.jsonName].method} />
      <WhyUs content={page.whyUs} />
      <Testimonials content={page.testimonials} />
      <Contact content={page.contact} common={common} />

      <Footer content={page.footer} common={common} />
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