import Head from 'next/head';
import '../../public/css/bootstrap.css';
import 'src/styles/styles.scss';
import 'src/styles/css/animated-logo.css';
import 'src/styles/css/reasons.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { AppWrapper } from 'src/context/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  )
}

export default MyApp
