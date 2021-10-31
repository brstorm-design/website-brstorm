import React from "react";
import Head from "next/head";
import data from '../../../../public/data.json';

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
  function getPaths() {
    return data.clients.flatMap(client => {
      return data.services.map(service => {
        return {
          params: {
            client: `${client.slugName}-${client.id}`,
            service: service.slug,
          },
        }
      })
    })
  }
  const paths = getPaths();
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const pitchSlug = params.client.split('-');
  const [pitchClient, pitchID] = pitchSlug;
  // props
  const pitch = data.clients.find(client => client.id === pitchID);
  const service = data.services.find(service => service.slug === params.service);
  return {
    props: { pitch, service }
  }
}