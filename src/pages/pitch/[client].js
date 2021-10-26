import React from "react";
import Head from "next/head";
import data from '../../../public/clients.json';

export default function Pitch(props) {
  const pitch = props.pitch

  return (
    <>
      <Head>
        <title>{pitch.name}</title>
      </Head>

      <ul>
        <li>Name: {pitch.name.toUpperCase()}</li>
        <li>ID: {pitch.id}</li>
      </ul>

      
    </>
  )
}

export async function getStaticPaths() {
  const paths = data.clients.map((client) => ({
    params: { client: `${client.slug}-${client.id}` },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const pitchSlug = params.client.split('-');
  const [pitchClient, pitchID] = pitchSlug;
  const pitch = data.clients.find(client => client.id === pitchID);
  return {
    props: { pitch }
  }
}