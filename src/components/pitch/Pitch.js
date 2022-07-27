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
import AddOns from "./AddOns";
import About from "./About";
import Cover from "src/components/home/Cover";
import ContentManager from "./ContentManager";
import PitchCover from "./PitchCover";
import Section from "../common/Section";

export default function Pitch({ props }) {
  const pitch = props.content.pitch;
  const home = props.content.home;
  const common = props.content.common;
  const client = props.pitch;
  const pitchContent = props.pitchContent;
  const service = props.service.slug;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>{`${props.pitch.businessName} • ${props.contentType.name} | Br.Storm Design`}</title>
      </Head>
      <Header content={pitch.header} common={common} />

      {
        service === 'web' ? (

          // web design page components
          <>
            <Section pt={12 + 8} mt={0}>
              <Cover service={'web'} content={pitchContent.cover} common={common} client={client} />
            </Section>

            <Section>
              <About content={pitchContent.details} />
            </Section>

            <Section>
              <Projects layout="slider" content={pitchContent.projects} common={common} />
            </Section>

            <Section>
              <Testimonials content={home.testimonials} />
            </Section>

            <Section>
              <WhyUs service={service} content={pitchContent.whyUs} pitch />
            </Section>

            <Section>
              <ContentManager />
            </Section>

            <Section>
              <Methodology content={pitchContent.method} pitch service={service} />
            </Section>

            {
              client.showPricing ? (
                <Section>
                  <Pricing content={pitchContent.deliverables} />
                </Section>
              ) : (
                null
              )
            }

            <Section>
              <AddOns content={pitchContent.addons} />
            </Section>
          </>

        ) : (

          // brand design page components
          <>
            <Section pt={12 + 8} mt={0}>
              <Hero client={client} content={pitch.hero} common={common} />
            </Section>

            <Section>
              <Details content={pitchContent.details} />
            </Section>

            <Section>
              <Projects layout="mosaic" content={pitchContent.projects} common={common} />
            </Section>

            <Section>
              <Testimonials content={home.testimonials} />
            </Section>

            <Section>
              <WhyUs service={service} content={home.whyUs} pitch />
            </Section>

            <Section>
              <Methodology content={pitchContent.method} pitch service={service} />
            </Section>

            <Section>
              <Pricing content={pitchContent.deliverables} />
            </Section>
          </>

        )
      }

      <Section>
        <Contact content={pitch.contact} common={common} />
      </Section>

      <Footer content={home.footer} common={common} />
    </>
  )
}