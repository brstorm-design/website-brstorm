import React from "react";
import Head from "next/head";
import en from 'src/languages/en.json';
import pt from 'src/languages/pt.json';
import it from 'src/languages/it.json';
import data from '../../../../public/data.json';
import Header from "src/layouts/Header";
import Hero from "src/components/home/Hero";
import Details from "src/components/pitch/Details";
import Testimonials from "src/components/home/Testimonials";
import WhyUs from "src/components/home/WhyUs";
import Methodology from "src/components/pitch/Methodology";
import Pricing from "src/components/pitch/Pricing";
import Contact from "src/components/home/Contact";
import Footer from "src/layouts/Footer";
import Projects from "src/components/home/Projects";

export default function Pitch(props) {
  const pitch = props.content.pitch
  const home = props.content.home;
  const common = props.content.common;
  const client = props.pitch;
  const pitchContent = props.pitchContent;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>{client.name}</title>
      </Head>
      <Header content={home.header} common={common} />

      <Hero client={client} content={pitch.hero} common={common} />
      <Details content={pitchContent.details} />
      <Projects content={home.projects} common={common} client={client} />
      <Testimonials content={home.testimonials} />
      <WhyUs content={home.whyUs} pitch />
      <Methodology content={pitchContent.method} />
      <Pricing content={pitchContent.deliverables} />
      <Contact content={pitch.contact} common={common} />

      <Footer content={home.footer} common={common} />
    </>
  )
}

export async function getStaticPaths({ locales }) {
  function getPaths() {
    return data.clients.flatMap(client => {
      return data.services.flatMap(service => {
        return locales.map(locale => {
          if (client.parameters.langs.includes(locale) && client.parameters.services.includes(service.id)) {
            return {
              params: {
                client: `${client.slugName}-${client.id}`,
                service: service.slug,
              },
              locale: locale,
            }
          }
        })
      })
    })
  }
  const arr = getPaths();
  const paths = arr.filter(el => el !== undefined);
  console.log(paths);
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const pitchSlug = context.params.client.split('-');
  const [pitchClient, pitchID] = pitchSlug;
  // props
  const pitch = data.clients.find(client => client.id === pitchID);
  const service = data.services.find(service => service.slug === context.params.service);

  switch (context.locale) {
    case 'pt':
      return { props: { content: pt, pitch, service, pitchContent: pt.pitch[service.json] } };
    case 'en':
      return { props: { content: en, pitch, service, pitchContent: en.pitch[service.json] } };
    case 'it':
      return { props: { content: it, pitch, service, pitchContent: it.pitch[service.json] } };
  }
}