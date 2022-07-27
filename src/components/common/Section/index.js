import React from 'react';

export default function Section({
  children,
  /* spacing */
  mt = 28,
  mb,
  pt,
  pb,
  ...rest
}) {

  /* const { mt, mb, pt, pb } = spacing; */

  let style = {
    ...(mt && { marginTop: `${mt}vmin` }),
    ...(mb && { marginBottom: `${mb}vmin` }),
    ...(pt && { paddingTop: `${pt}vmin` }),
    ...(pb && { paddingBottom: `${pb}vmin` }),
  }

  return (
    <section style={style} {...rest}>
      {children}
    </section>
  )
}
