import React from 'react';
import data from 'public/data.json';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';

export default function GeneralPortfolio(props) {

  /* function gsp() {
    const paths = data.services.flatMap(service => {
      return pt.fullportfolio.map(project => {
        if (project.categories.includes(service.id)) {
          return {
            params: {
              service: service.slug,
              project,
            },
          }
        }
      })
    }).filter(el => el !== undefined);
    return { paths, fallback: false }
  }

  const result = gsp();
  console.log(result); */

  console.log(props);

  return (
    <div>Porti</div>
  )
}

export async function getStaticPaths() {
  const paths = data.services.map(service => ({
    params: { service: service.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params, locale }) {
  const service = data.services.find(s => s.slug === params.service);
  const projects = pt.fullportfolio.filter(p => p.categories.includes(service.id));

  switch (locale) {
    case 'pt':
      return {
        props: {
          content: pt,
          service,
          projects,
        }
      }

    case 'en':
      return {
        props: {
          content: en,
          service,
          projects,
        }
      }
  }
}
