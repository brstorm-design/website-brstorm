import React from 'react';
import data from 'public/data.json';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';

export default function LandingPage(props) {
  console.log(props);
  return (
    <div>LandingPage</div>
  )
}

export async function getStaticPaths() {
  const paths = data.services.map(service => ({
    params: { landing: service.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params, locale }) {
  const service = data.services.find(s => s.slug === params.landing);

  switch (locale) {
    case 'pt':
      return {
        props: {
          service,
          pt
        }
      }

    case 'en':
      return {
        props: {
          service,
          en
        }
      }
  }
}