import React from "react";
import Head from "next/head";
import en from 'src/languages/en.json';
import pt from 'src/languages/pt.json';
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

export async function getStaticPaths({ locales }) {
  function getPaths() {
    return data.clients.flatMap(client => {
      return data.services.flatMap(service => {
        return locales.map(locale => {
          return {
            params: {
              client: `${client.slugName}-${client.id}`,
              service: service.slug,
            },
            locale: locale,
          }
        })
      })
    })
  }
  const paths = getPaths();
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  console.log(context.params);
  const pitchSlug = context.params.client.split('-');
  const [pitchClient, pitchID] = pitchSlug;
  // props
  const pitch = data.clients.find(client => client.id === pitchID);
  const service = data.services.find(service => service.slug === context.params.service);

  if (context.locale === 'pt') {
    return {
      props: {pitch, service, pt}
    }
  }
  else {
    return {
      props: {pitch, service, en}
    }
  }
}