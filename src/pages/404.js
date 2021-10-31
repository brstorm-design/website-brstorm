import React from "react";
import Link from "next/link";
import styles from 'src/styles/404.module.scss';
import en from 'src/languages/en.json';
import pt from 'src/languages/pt.json';
import Header from "src/layouts/Header";
import Footer from "src/layouts/Footer";

export default function NotFound(props) {
  console.log(props);
  return (
    <div>
      <Header content={props.home.header} common={props.common} />

      <div className={styles.error}>
        <div>
          <h1>404</h1>
          <h2>Esta página não foi encontrada.</h2>
        </div>
        <Link href="/">
          <a>← Voltar à página principal</a>
        </Link>
      </div>

      <Footer content={props.home.footer} common={props.common} />
    </div>
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