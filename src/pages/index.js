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
      <Projects format="mosaic" content={page.projects} common={common} allProjects={props.fullportfolio} />
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