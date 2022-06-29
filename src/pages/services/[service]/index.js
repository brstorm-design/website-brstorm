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
import Section from 'src/components/common/Section';
import About from 'src/components/pitch/About';
import ContentManager from 'src/components/pitch/ContentManager';
import AddOns from 'src/components/pitch/AddOns';

export default function LandingPage({ content, service }) {
  const home = content.home;
  const common = content.common;
  const landing = content.landingPage[service.jsonName];
  const pitch = content.pitch[service.jsonName];

  return (
    <>
      <Head>
        <title>{service.name} • Br.Storm</title>
      </Head>
      <Header content={landing.header} common={content.common} />

      {
        service.slug === 'brand' ? (

          // brand
          <>
            <Section mt={0}>
              <PitchCover content={landing.cover} common={common} />
            </Section>

            <Section>
              <Details content={landing.details} />
            </Section>

            <Section>
              <Projects layout="stairs" content={home.projects} common={common} />
            </Section>

            <Section>
              <Methodology content={landing.method} />
            </Section>

            <Section>
              <WhyUs content={home.whyUs} />
            </Section>

            <Section>
              <Testimonials content={home.testimonials} />
            </Section>
          </>

        ) : (

          // web
          <>
            <Section pt={12 + 8} mt={0}>
              <Cover service={'web'} content={pitch.cover} common={common} />
            </Section>

            <Section>
              <About content={pitch.details} />
            </Section>

            <Section>
              <Projects layout="slider" content={pitch.projects} common={common} />
            </Section>

            <Section>
              <Testimonials content={home.testimonials} />
            </Section>

            <Section>
              <WhyUs service={service.slug} content={pitch.whyUs} pitch />
            </Section>

            <Section>
              <ContentManager />
            </Section>

            <Section>
              <Methodology content={pitch.method} pitch service={service.slug} />
            </Section>

            <Section>
              <AddOns content={pitch.addons} />
            </Section>
          </>
        )
      }

      <Section>
        <Contact content={home.contact} common={common} />
      </Section>

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