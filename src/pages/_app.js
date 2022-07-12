import Head from 'next/head';
import '../../public/css/bootstrap.css';
import 'src/styles/styles.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useEffect } from 'react';
import { rootPath } from 'src/utils/env';
import { useRouter } from 'next/router';
import { AppWrapper } from 'src/context/store';

/* import '../../public/css/test.css'; */

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

  /* useEffect(() => {
    const stickyDiv = document.querySelector('#sticky-container > div');
    const initialOffsetTop = stickyDiv.getBoundingClientRect().top;

    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.documentElement,
        smooth: true,
      });

      
    });

    
  }, []); */

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
