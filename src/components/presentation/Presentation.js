import React, { useEffect } from 'react';
import Head from 'next/head';
import Slides from 'src/components/presentation/Slides';

export default function Presentation({ props }) {

  useEffect(() => {
    document.body.style.backgroundColor = '#0a0a0a';
    document.documentElement.style.overflow = 'hidden';
  }, [])

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>{`${props.pitch.businessName} • ${props.contentType.name} | Br.Storm Design`}</title>
      </Head>

        <div className="main" data-scroll-section>
          <main>
            <Slides />
          </main>
        </div>
    </>
  )
}
