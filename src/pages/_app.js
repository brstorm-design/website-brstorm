import Head from 'next/head';
import '../../public/css/bootstrap.css';
import 'src/styles/styles.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import { rootPath } from 'src/utils/env';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const gradients = {
    left: `url("${rootPath}/images/backgrounds/cover/left.svg")`,
    right: `url("${rootPath}/images/backgrounds/cover/right.svg")`,
    footer: `url("${rootPath}/images/backgrounds/footer.svg")`,
  }

  useEffect(() => {
    if (router.route.endsWith('success') || router.route.includes('portfolio')) {
      gradients.left = 'none';
      gradients.right = 'none';
    }

    document.body.style.setProperty('--background-detail', `
    ${gradients.left},
    ${gradients.right},
    ${gradients.footer}
    `);
  }, [router.route]);

  useEffect(() => {
    if (router.route.includes('portfolio') && !router.route.endsWith('portfolio')) {
      document.querySelector('header + *').classList.add('portfolio');
    }
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
