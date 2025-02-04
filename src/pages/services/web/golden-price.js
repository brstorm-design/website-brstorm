import React from 'react';
import data from 'public/data.json';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';
import Contact from 'src/components/home/Contact';
import Projects from 'src/components/home/Projects';
import Testimonials from 'src/components/home/Testimonials';
import WhyUs from 'src/components/home/WhyUs';
import FormHero from 'src/components/landing-pages/FormHero';
import PriceCircle from 'src/components/landing-pages/PriceCircle';
import AddOns from 'src/components/pitch/AddOns';
import ContentManager from 'src/components/pitch/ContentManager';
import Methodology from 'src/components/pitch/Methodology';
import Pricing from 'src/components/pitch/Pricing';
import Footer from 'src/layouts/Main/Footer';
import Head from 'next/head';
import Header from 'src/layouts/Main/Header';
import Section from 'src/components/common/Section';

export default function GoldenPrice({ content, service }) {
  const home = content.home;
  const common = content.common;
  const landing = content.landingPage[service.jsonName];
  const pitch = content.pitch[service.jsonName];
  const fullPortfolio = content.fullPortfolio;

  let pageTitle;
  service.slug === 'web' ? (
    pageTitle = 'Criação de Sites Profissionais | Design & Resultado • Br.Storm'
  ) : (
    pageTitle = 'Brand • Br.Storm'
  )

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header content={landing.header} common={content.common} />

      <div className="main" data-scroll-section>
        <main>
          <Section pt="200 190">
            <FormHero showForm />
          </Section>

          <Section mt="80 120">
            <PriceCircle />
          </Section>

          <Section mt="200 160">
            <Projects layout="slider" content={pitch.projects} allProjects={fullPortfolio[service.jsonName]} common={common} />
          </Section>

          <Section mt="160 120">
            <Testimonials content={home.testimonials} />
          </Section>

          <Section mt="240 160">
            <WhyUs service={service.slug} content={pitch.whyUs} pitch />
          </Section>

          <Section mt="240 160">
            <ContentManager content={pitch.contentManager} />
          </Section>

          <Section mt="240 160">
            <Methodology content={pitch.method} pitch service={service.slug} />
          </Section>

          <Section mt="380 200">
            <Pricing content={pitch.deliverables} />
          </Section>

          <Section mt="120 40">
            <AddOns content={pitch.addons} />
          </Section>

          <Section mt="160 160" mb="120 120">
            <Contact content={{
              title: 'Transforme sua \nIdeia em Realidade',
            }}
              common={common}
              short
            />
          </Section>
        </main>
        <Footer content={home.footer} common={common} />
      </div>
    </>
  )
}

export async function getStaticProps({ params, locale }) {
  /* const service = data.services.find(s => s.slug === params.service); */
  const service = data.services[1];

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