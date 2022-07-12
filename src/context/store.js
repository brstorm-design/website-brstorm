import { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();

export function AppWrapper({ children }) {

  const [scroller, setScroller] = useState(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      setScroller(
        new LocomotiveScroll({
          el: document.documentElement,
          smooth: true,
        })
      );
    })();

    return () => {
      scroller?.destroy();
    }
  }, []);

  return (
    <AppContext.Provider value={scroller}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}