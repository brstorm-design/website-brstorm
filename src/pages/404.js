import React from "react";
import Link from "next/link";
import styles from 'src/styles/404.module.scss';
import en from 'src/languages/en.json';
import pt from 'src/languages/pt.json';
import Header from "src/layouts/Main/Header";
import Footer from "src/layouts/Main/Footer";
import Head from "next/head";

const footerStyle = {
  position: 'absolute',
  bottom: '0',
  width: '100%',
}

export default function NotFound(props) {
  return (
    <div style={{ height: '100vh' }}>
      <Head>
        <title>404 Not Found</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Header content={props.content.home.header} common={props.content.common} />

      <div className="main" data-scroll-section>
        <main>
          <div className={styles.error}>
            <div>
              <h1>404</h1>
              <h2>{props.text}</h2>
            </div>
            <Link href="/">
              <a>← {props.back}</a>
            </Link>
          </div>
        </main>
        <Footer style={footerStyle} content={props.content.home.footer} common={props.content.common} />
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  if (context.locale === 'pt') {
    return {
      props: {
        content: pt,
        text: 'Esta página não foi encontrada.',
        back: 'Voltar à página principal',
      }
    }
  }
  else {
    return {
      props: {
        content: en,
        text: 'This page could not be found.',
        back: 'Back to the home page',
      }
    }
  }
}