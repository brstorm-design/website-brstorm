import Head from 'next/head';
import '../../public/css/bootstrap.css';
import 'src/styles/styles.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { useEffect } from 'react';
import { rootPath } from 'src/utils/env';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    document.body.style.setProperty('--background-detail', `
    url("${rootPath}/images/backgrounds/cover/left.svg"),
    url("${rootPath}/images/backgrounds/cover/right.svg"),
    url("${rootPath}/images/backgrounds/footer.svg")
    `);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
