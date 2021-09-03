import Head from 'next/head';
import data from '../../public/content.json';
import en from 'src/languages/en.json';
import pt from 'src/languages/pt.json';
import Link from 'next/link';
import Header from 'src/components/Header';
import Cover from 'src/components/pitch/Cover';
import Purpose from 'src/components/pitch/Purpose';
import WhatWeDo from 'src/components/pitch/WhatWeDo';
import Projects from 'src/components/pitch/Projects';
import Testimonials from 'src/components/pitch/Testimonials';
import WhyUs from 'src/components/pitch/WhyUs';
import Contact from 'src/components/pitch/Contact';
import Footer from 'src/components/pitch/Footer';
import Cursor from 'src/components/common/Cursor';

export default function Home(props) {
  const page = props.home;
  const common = props.common;

  return (
    <>
      <Head>
        <title>Br.Storm Design</title>
      </Head>

      <Header content={page.header} common={common} />

      <Cover content={page.cover} common={common} />
      <Purpose content={page.purpose} common={common} />
      <WhatWeDo content={page.whatWeDo} common={common} />
      <Projects content={page.projects} common={common} />
      <Testimonials content={page.testimonials} />
      <WhyUs content={page.whyUs} />
      <Contact content={page.contact} common={common} />

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