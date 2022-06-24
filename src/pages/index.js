import Head from 'next/head';
import en from 'src/languages/en.json';
import pt from 'src/languages/pt.json';
import Header from 'src/layouts/Header';
import Cover from 'src/components/home/Cover';
import Purpose from 'src/components/home/Purpose';
import WhatWeDo from 'src/components/home/WhatWeDo';
import Projects from 'src/components/home/Projects';
import Testimonials from 'src/components/home/Testimonials';
import WhyUs from 'src/components/home/WhyUs';
import Contact from 'src/components/home/Contact';
import Footer from 'src/layouts/Footer';
import Section from 'src/components/common/Section';

export default function Home(props) {
  const page = props.home;
  const common = props.common;

  return (
    <>
      <Head>
        <title>Br.Storm Design</title>
      </Head>
      <Header content={page.header} common={common} variant="default" />

      <Section pt={12 + 8} mt={0}>
        <Cover content={page.cover} common={common} />
      </Section>

      <Section>
        <Purpose content={page.purpose} common={common} />
      </Section>

      <Section>
        <WhatWeDo content={page.whatWeDo} common={common} />
      </Section>

      <Section>
        <Projects layout="mosaic" content={page.projects} common={common} />
      </Section>

      <Section>
        <Testimonials content={page.testimonials} />
      </Section>

      <Section>
        <WhyUs content={page.whyUs} />
      </Section>

      <Section>
        <Contact content={page.contact} common={common} />
      </Section>

      <Footer content={page.footer} common={common} />
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