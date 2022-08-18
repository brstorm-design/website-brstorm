import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import LinkTree from "src/components/linktree/LinkTree";
import en from 'src/languages/en.json';
import pt from 'src/languages/pt.json';

export default function LinkPage(props) {

  const router = useRouter();
  let title;
  switch (router.locale) {
    case 'pt':
      title = 'Nossos Links';
      break;
    case 'en':
      title = 'Our Links'
  }

  return (
    <>
      <Head>
        <title>{`${title} • Br.Storm`}</title>
      </Head>

      <div className="main" data-scroll-section>
        <main>
          <LinkTree content={props.linkTree} />
        </main>
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  if (context.locale === 'pt') {
    return {
      props: pt
    }
  }
  else {
    return {
      props: en
    }
  }
}