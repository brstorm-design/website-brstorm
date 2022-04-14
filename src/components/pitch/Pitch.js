import React from "react";
import Head from "next/head";
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

export default function Pitch({ props }) {
  const pitch = props.content.pitch;
  const home = props.content.home;
  const common = props.content.common;
  const client = props.pitch;
  const pitchContent = props.pitchContent;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>{`${props.pitch.businessName} • ${props.contentType.name} | Br.Storm Design`}</title>
      </Head>
      <Header content={pitch.header} common={common} />

      <Hero client={client} content={pitch.hero} common={common} />
      <Details content={pitchContent.details} />
      <Projects content={home.projects} common={common} client={client} />
      <Testimonials content={home.testimonials} />
      <WhyUs content={home.whyUs} pitch />
      <Methodology content={pitchContent.method} pitch />
      <Pricing content={pitchContent.deliverables} />
      <Contact content={pitch.contact} common={common} />

      <Footer content={home.footer} common={common} />
    </>
  )
}