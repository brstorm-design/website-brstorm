import React, { useEffect } from 'react';
import Logo from 'src/components/presentation/Logo';
import Head from 'next/head';

export default function LogoAnimation() {

  useEffect(() => {
    document.body.classList.add('animation-page');
  }, [])

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Logo Animation</title>
      </Head>

      <Logo />
    </>
  )
}
