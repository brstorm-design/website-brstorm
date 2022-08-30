import React, { useEffect, useState } from 'react';
import useMediaQuery from 'src/hooks/useMediaQuery';

export default function Section({
  children,
  /* spacing */
  mt = 0,
  mb,
  pt,
  pb,
  ...rest
}) {

  const [device, setDevice] = useState('desktop');

  let spacing = {
    desktop: {
      ...(mt && { marginTop: `${mt.split?.(' ')[0]}px` }),
      ...(mb && { marginBottom: `${mb.split?.(' ')[0]}px` }),
      ...(pt && { paddingTop: `${pt.split?.(' ')[0]}px` }),
      ...(pb && { paddingBottom: `${pb.split?.(' ')[0]}px` }),
    },
    mobile: {
      ...(mt && { marginTop: `${mt.split?.(' ')[1]}px` }),
      ...(mb && { marginBottom: `${mb.split?.(' ')[1]}px` }),
      ...(pt && { paddingTop: `${pt.split?.(' ')[1]}px` }),
      ...(pb && { paddingBottom: `${pb.split?.(' ')[1]}px` }),
    }
  }

  let isMobile = useMediaQuery('lg');

  useEffect(() => {
    isMobile ? setDevice('mobile') : setDevice('desktop');
  }, [isMobile]);

  return (
    <section style={spacing[device]} {...rest}>
      {children}
    </section>
  )
}
