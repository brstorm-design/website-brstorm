import React from 'react';
import data from '../../../public/content.json';
import Head from 'next/head';
import Header from 'src/components/Header';
import ImagePLaceholder from 'src/components/common/ImagePLaceholder';
import Hero from 'src/components/pitch/Hero';
import Cover from 'src/components/pitch/Cover';
import Purpose from 'src/components/pitch/Purpose';
import WhatWeDo from 'src/components/pitch/WhatWeDo';
import Projects from 'src/components/pitch/Projects';
import Testimonials from 'src/components/pitch/Testimonials';
import WhyUs from 'src/components/pitch/WhyUs';
import Contact from 'src/components/pitch/Contact';
import Footer from 'src/components/pitch/Footer';

export default function Pitch(props) {

  return (
    <>
      <Head>
        <title>Pitch</title>
      </Head>

      <Header />

      {/* <ul>
        <li>Name: {pitch.name.toUpperCase()}</li>
        <li>ID: {pitch.id}</li>
      </ul> */}

      <Cover />
      <Hero />
      <Purpose />
      <WhatWeDo />
      <Projects content={props.portifolio} />
      <Testimonials content={props.testimonials} />
      <WhyUs content={props.whyUs} />
      <Contact />
      <Footer content={props.socials} />
    </>
  )
}

export async function getStaticPaths() {
  const paths = data.clients.map((client) => ({
    params: { pitch: `${client.name}-${client.id}` },
  }))
  return { paths, fallback: false }
}

/* export async function getStaticProps({ params }) {
  const pitchSlug = params.pitch.split('-');
  const [pitchClient, pitchID] = pitchSlug;
  const pitch = data.clients.find(client => client.id === pitchID);
  return {
    props: { pitch }
  }
} */

export async function getStaticProps() {
  return {
    props: data
  }
}