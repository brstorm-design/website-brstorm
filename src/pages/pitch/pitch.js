import Head from 'next/head';
import React from 'react';
import Hero from 'src/components/pitch/Hero';

export default function Pitch() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <Hero />
    </>
  )
}