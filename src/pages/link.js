import Head from "next/head";
import React from "react";
import LinkTree from "src/components/linkree/LinkTree";
import en from 'src/languages/en.json';
import pt from 'src/languages/pt.json';

export default function LinkPage(props) {
  return (
    <>
      <Head>
        <title>Our Links - Br.Storm</title>
      </Head>

      <LinkTree content={props.linkTree} />
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