import React, { useEffect } from 'react';
import Footer from 'src/layouts/Main/Footer';
import Header from 'src/layouts/Main/Header';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';
import Success from 'src/components/contact/success/Success';
import Head from 'next/head';

export default function FormSuccess({ content, common, footer }) {

  useEffect(() => {
    document.body.classList.remove('page');
  }, []);

  return (
    <div>
      <Head>
        <title>Muito Obrigado! • Br.Storm</title>
      </Head>

      <div className="main" data-scroll-section>
        <main>
          <Header variant="success" />
          <Success content={content} />
        </main>
        <Footer content={footer} variant="success" common={common} fullPage />
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  if (locale === 'pt') {
    return {
      props: {
        content: pt.contactSuccess,
        common: pt.common,
        footer: pt.home.footer,
      }
    }
  } else {
    return {
      props: {
        content: en.contactSuccess,
        common: en.common,
        footer: en.home.footer,
      }
    }
  }
}