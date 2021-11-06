import Head from 'next/head';
import en from 'src/languages/en.json';
import pt from 'src/languages/pt.json';
import it from 'src/languages/it.json';
import React from 'react';
import Hero from 'src/components/home/Hero';
import Header from 'src/layouts/Header';
import Testimonials from 'src/components/home/Testimonials';
import WhyUs from 'src/components/home/WhyUs';
import Contact from 'src/components/home/Contact';
import Footer from 'src/layouts/Footer';
import Details from 'src/components/pitch/Details';
import ProjectsSlider from 'src/components/pitch/ProjectsSlider';
import Methodology from 'src/components/pitch/Methodology';
import Pricing from 'src/components/pitch/Pricing';

export default function Pitch(props) {
  const home = props.home;
  const common = props.common;
  const pitch = props.pitch;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Header content={home.header} common={common} />

      <Hero pitch={pitch} content={pitch.hero} common={common} />
      <Details content={pitch.details} />
      <ProjectsSlider content={home.projects} />
      <Testimonials content={home.testimonials} />
      <WhyUs content={home.whyUs} />
      <Methodology content={pitch.method} />
      <Pricing content={pitch.deliverables} />
      <Contact content={pitch.contact} common={common} />

      <Footer content={home.footer} common={common} />
    </>
  )
}

export async function getStaticProps(context) {
  switch (context.locale) {
    case 'pt':
      return { props: pt };
    case 'en':
      return { props: en };
    case 'it':
      return { props: it };
  }
}