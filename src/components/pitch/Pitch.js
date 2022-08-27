import React from "react";
import Head from "next/head";
import Header from "src/layouts/Main/Header";
import Hero from "src/components/home/Hero";
import Details from "src/components/pitch/Details";
import Testimonials from "src/components/home/Testimonials";
import WhyUs from "src/components/home/WhyUs";
import Methodology from "src/components/pitch/Methodology";
import Pricing from "src/components/pitch/Pricing";
import Contact from "src/components/home/Contact";
import Footer from "src/layouts/Main/Footer";
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
  const fullPortfolio = props.content.fullPortfolio;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>{`${props.pitch.businessName} • ${props.contentType.name} | Br.Storm Design`}</title>
      </Head>
      <Header content={pitch.header} common={common} />

      <div className="main">
        <main>
          {
            service === 'web' ? (
              // web design page components
              <>
                <Section data-scroll-section pt={12 + 8} mt={0}>
                  <Cover service={'web'} content={pitchContent.cover} common={common} client={client} />
                </Section>

                <Section data-scroll-section>
                  <About content={pitchContent.details} common={common} />
                </Section>

                <Section data-scroll-section>
                  <Projects layout="slider" content={pitchContent.projects} allProjects={fullPortfolio[service]} common={common} />
                </Section>

                <Section data-scroll-section>
                  <Testimonials content={home.testimonials} />
                </Section>

                <Section data-scroll-section>
                  <WhyUs service={service} content={pitchContent.whyUs} pitch />
                </Section>

                <Section data-scroll-section>
                  <ContentManager content={pitchContent.contentManager} />
                </Section>

                <Section data-scroll-section mb={48}>
                  <Methodology content={pitchContent.method} pitch service={service} />
                </Section>
                {
                  client.showPricing ? (
                    <>
                      <Section data-scroll-section>
                        <Pricing content={pitchContent.deliverables} />
                      </Section>
                      <Section data-scroll-section>
                        <AddOns content={pitchContent.addons} />
                      </Section>
                    </>
                  ) : (
                    null
                  )
                }
              </>
            ) : (
              // brand design page components
              <>
                <Section data-scroll-section pt={12 + 8} mt={0}>
                  <Hero client={client} content={pitch.hero} common={common} />
                </Section>

                <Section data-scroll-section>
                  <Details content={pitchContent.details} />
                </Section>

                <Section data-scroll-section>
                  <Projects layout="mosaic" content={pitchContent.projects} allProjects={fullPortfolio[service]} common={common} />
                </Section>

                <Section data-scroll-section>
                  <Testimonials content={home.testimonials} />
                </Section>

                <Section data-scroll-section>
                  <WhyUs service={service} content={home.whyUs} pitch />
                </Section>

                <Section data-scroll-section>
                  <Methodology content={pitchContent.method} pitch service={service} />
                </Section>

                <Section data-scroll-section>
                  <Pricing content={pitchContent.deliverables} />
                </Section>
              </>
            )
          }
          <Section data-scroll-section>
            <Contact content={pitch.contact} common={common} />
          </Section>
        </main>
        <Footer data-scroll-section content={home.footer} common={common} />
      </div>
    </>
  )
}