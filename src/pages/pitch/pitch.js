import Head from 'next/head';
import en from 'src/languages/en.json';
import pt from 'src/languages/pt.json';
import React from 'react';
import Hero from 'src/components/pitch/Hero';
import Header from 'src/layouts/Header';
import Testimonials from 'src/components/pitch/Testimonials';
import WhyUs from 'src/components/pitch/WhyUs';
import Contact from 'src/components/pitch/Contact';
import Footer from 'src/layouts/Footer';

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
      {/* <Details/> */}
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