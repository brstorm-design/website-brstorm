import Head from 'next/head';
import '../../public/css/bootstrap.css';
import 'src/styles/styles.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

function MyApp({ Component, pageProps }) {
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
