import { useRouter } from 'next/router';
import React, { createContext, useEffect, useState } from 'react';

export const SmoothScrollContext = createContext({
  scroll: null,
});

export const SmoothScrollProvider = ({ children, options }) => {
  const [scroll, setScroll] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (!scroll) {
      ; (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        setScroll(
          new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]') ?? undefined,
            ...options,
          })
        )
      })()
    }

    return () => {
      if (scroll) scroll.destroy();
    }
  }, [scroll]);

  /***  handle route and hash changes by applying the appropriate behavior ***/
  useEffect(() => {
    let routeChangeTimeout;

    function handleHashStart(url) {
      scroll?.scrollTo(url.substring(url.indexOf('#')), { offset: -100 });
    }

    function handleRouteComplete(url) {
      routeChangeTimeout = setTimeout(() => {
        if (scroll && url.includes('#')) {
          // changed into a page with a hash:
          scroll.scrollTo(url.substring(url.indexOf('#')), { offset: -100 });
        } else {
          // changed into a page with no hash:
          scroll?.scrollTo(0, { duration: 0 });
        }
      }, 1);
    }

    router.events.on('routeChangeComplete', handleRouteComplete);
    router.events.on('hashChangeComplete', handleHashStart);

    return () => {
      router.events.off('routeChangeComplete', handleRouteComplete);
      router.events.off('hashChangeComplete', handleHashStart);
      clearTimeout(routeChangeTimeout);
    }
  }, [scroll]);


  /***  override browser native events for auto-scrolling document fragments into view ***/
  useEffect(() => {
    const scrollEventController = new AbortController();

    window.addEventListener('scroll', () => {
      window.scrollTo(0, 0);
    }, { signal: scrollEventController.signal });

    return () => {
      scrollEventController.abort();
    }
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

SmoothScrollContext.displayName = 'SmoothScrollContext'
SmoothScrollProvider.displayName = 'SmoothScrollProvider'
