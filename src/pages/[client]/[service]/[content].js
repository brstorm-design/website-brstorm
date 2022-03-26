import React from 'react';
import data from '../../../../public/data.json';
import en from 'src/languages/en.json';
import pt from 'src/languages/pt.json';
import Pitch from 'src/components/pitch/Pitch';
import Presentation from 'src/components/presentation/Presentation';

export default function Content(props) {
  switch (props.contentType.slug) {
    case 'proposal':
      return <div>PROPOSAL</div>
    case 'presentation':
      return <Presentation props={props} />
    case 'pitch':
      return <Pitch props={props} />
  }
}

export async function getStaticPaths({ locales }) {
  function getPaths() {
    return data.clients.flatMap(client => {
      return data.content.flatMap(cont => {
        return data.services.flatMap(service => {
          return locales.map(locale => {
            let clientParams = client.parameters;
            if (
              clientParams.langs.includes(locale) &&
              clientParams.services.includes(service.id) &&
              clientParams.content.includes(cont.id)
            ) {
              return {
                params: {
                  client: client.slugName,
                  service: service.slug,
                  content: cont.slug,
                },
                locale: locale,
              }
            }
          })
        })
      })
    })
  }
  const arr = getPaths();
  const paths = arr.filter(el => el !== undefined);
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const pitch = data.clients.find(client => client.slugName === context.params.client);
  const service = data.services.find(service => service.slug === context.params.service);
  const contentType = data.content.find(cont => cont.slug === context.params.content);

  switch (context.locale) {
    case 'pt':
      return { props: { content: pt, pitch, service, contentType, pitchContent: pt.pitch[service.jsonName] } };
    case 'en':
      return { props: { content: en, pitch, service, contentType, pitchContent: en.pitch[service.jsonName] } };
  }
}