import Head from 'next/head';
import data from '../../public/content.json';
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

export default function Home(props) {
  const clients = props.clients;

  return (
    <>
      <Head>
        <title>Br.Storm Design</title>
      </Head>

      <Header />

      <Cover />
      {/* <Hero /> */}
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



export async function getStaticProps() {
  return {
    props: data
  }
}