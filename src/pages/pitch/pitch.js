import Head from 'next/head';
import en from 'src/languages/en.json';
import pt from 'src/languages/pt.json';
import React from 'react';
import Hero from 'src/components/home/Hero';
import Header from 'src/layouts/Header';
import Testimonials from 'src/components/home/Testimonials';
import WhyUs from 'src/components/home/WhyUs';
import Contact from 'src/components/home/Contact';
import Footer from 'src/layouts/Footer';
import Details from 'src/components/pitch/Details';

export default function Pitch(props) {
  const home = props.home;
  const common = props.common;
  const pitch = props.pitch

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Header content={home.header} common={common} />

      <Hero content={pitch.hero} common={common} />
      <Details content={pitch.details} />
      {/* <ProjectsSlider/> */}
      <Testimonials content={home.testimonials} />
      <WhyUs content={home.whyUs} />
      {/* <Methodology/> */}
      {/* <Pricing/> */}
      <Contact content={home.contact} common={common} />

      <Footer content={home.footer} common={common} />
    </>
  )
}

export async function getStaticProps(context) {
  if (context.locale === 'pt') {
    return {
      props: pt
    }
  }
  else {
    return {
      props: en
    }
  }
}