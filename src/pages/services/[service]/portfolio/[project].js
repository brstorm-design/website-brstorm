import React from 'react';
import data from 'public/data.json';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';

export default function SinglePortfolio(props) {
  console.log(props);
  return (
    <div>SinglePortfolio</div>
  )
}

export async function getStaticPaths() {
  const unfilteredPaths = pt.fullportfolio.flatMap(project => {
    return data.services.map(service => {
      if (project.categories.includes(service.id)) {
        return {
          params: {
            project: project.slug,
            service: service.slug,
          },
        }
      }
    })
  });
  const paths = unfilteredPaths.filter(el => el !== undefined);
  return { paths, fallback: false }
}

export async function getStaticProps({ params, locale }) {
  const project = pt.fullportfolio.find(p => p.slug === params.project);

  switch (locale) {
    case 'pt':
      return {
        props: {
          content: pt,
          project,
        }
      }

    case 'en':
      return {
        props: {
          content: en,
          project,
        }
      }
  }
}