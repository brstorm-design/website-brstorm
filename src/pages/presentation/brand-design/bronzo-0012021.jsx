import React, { useEffect } from 'react';
import Head from 'next/head';
import Slides from 'src/components/presentation/Slides';

export default function Presentation() {

  useEffect(() => {
    document.body.style.backgroundColor = '#0a0a0a';
    document.documentElement.style.overflow = 'hidden';
  }, [])

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Bronzo Brand Presentation</title>
      </Head>

      <Slides />
    </>
  )
}
