import React from 'react';
import data from 'public/data.json';

export default function LandingPage(props) {
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

export async function getStaticProps({ params }) {
  const service = data.services.find(s => s.slug === params.landing);
  return {
    props: service
  }
}