import React from 'react';
import data from '../../../public/content.json';
import Head from 'next/head';
import Header from 'src/components/Header';
import Button from 'src/components/common/Button';

export default function Pitch(props) {
  const pitch = props.pitch

  return (
    <>
      <Head>
        <title>{pitch.name}</title>
      </Head>

      <Header />

      <ul>
        <li>Name: {pitch.name.toUpperCase()}</li>
        <li>ID: {pitch.id}</li>
      </ul>
    </>
  )
}

export async function getStaticPaths() {
  const paths = data.clients.map((client) => ({
    params: { pitch: `${client.name}-${client.id}` },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const pitchSlug = params.pitch.split('-');
  const [pitchClient, pitchID] = pitchSlug;
  const pitch = data.clients.find(client => client.id === pitchID);
  return {
    props: { pitch }
  }
}

/* export async function getStaticProps() {
  return {
    props: data
  }
} */