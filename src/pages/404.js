import React from "react";
import Link from "next/link";
import styles from 'src/styles/404.module.scss';
import en from 'src/languages/en.json';
import pt from 'src/languages/pt.json';
import Header from "src/layouts/Header";
import Footer from "src/layouts/Footer";

export default function NotFound(props) {
  return (
    <div>
      <Header content={props.content.home.header} common={props.content.common} />

      <div className={styles.error}>
        <div>
          <h1>404</h1>
          <h2>{props.text}</h2>
        </div>
        <Link href="/">
          <a>← {props.back}</a>
        </Link>
      </div>

      <Footer content={props.content.home.footer} common={props.content.common} />
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