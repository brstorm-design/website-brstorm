import React from 'react'

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
    ...(mt && { marginTop: `${mt}vh` }),
    ...(mb && { marginBottom: `${mb}vh` }),
    ...(pt && { paddingTop: `${pt}vh` }),
    ...(pb && { paddingBottom: `${pb}vh` }),
  }

  return (
    <section style={style} {...rest} >
      {children}
    </section>
  )
}
