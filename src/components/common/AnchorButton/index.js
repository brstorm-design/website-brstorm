import React from 'react';
import { smoothScroll } from 'src/modules/App';
import { inOutCube } from 'src/utils/easings';

export default function AnchorButton({
  className,
  children,
  href,
  offset = 150,
  duration = 1500,
  easing = inOutCube,
}) {

  return (
    <a
      style={{ backgroundColor: 'limegreen' }}
      /* onClick={() => smoothScroll(href, offset, duration, easing)}
      href={href} */
      className={className}
    >
      {
        children
      }
    </a>
  )
}