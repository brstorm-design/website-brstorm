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

    // formatted this way to prevent errors when specific characters are used on the element's id
    const formatURL = url => url.slice(url.indexOf('#') + 1);

    function getScrollParameters(url) {
      console.log(url);
      const id = formatURL(url);
      const target = document.getElementById(id);
      let offset;
      if (target?.clientHeight > window.innerHeight || !target) {
        offset = 100;
        return [target, -offset];
      } else {
        offset = (window.innerHeight - target.clientHeight) / 2;
        return [target, -offset];
        /* console.log(`${window.innerHeight} - ${target.clientHeight}`); */
      }
    }

    function handleHashComplete(url) {
      console.log(url);
      const [target, offset] = getScrollParameters(url);
      scroll?.scrollTo(target, { offset, duration: 500 });
    }

    function handleRouteComplete(url) {
      console.log(url);
      routeChangeTimeout = setTimeout(() => {
        if (url.includes('#')) {
          // changed into a page with a hash:
          const [target, offset] = getScrollParameters(url);
          scroll?.scrollTo(target, { offset, duration: 500 });
        } else {
          // changed into a page with no hash:
          scroll?.scrollTo(0, { duration: 200 });
        }
      }, 1);
    }

    router.events.on('routeChangeComplete', handleRouteComplete);
    router.events.on('hashChangeComplete', handleHashComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteComplete);
      router.events.off('hashChangeComplete', handleHashComplete);
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
