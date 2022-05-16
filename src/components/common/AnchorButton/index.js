import React from 'react';
import { inOutCube } from 'src/utils/easings';

export default function AnchorButton({
  href,
  offset = 150,
  dur = 1500,
  easing = inOutCube,
  className,
  children,
}) {

  function startAnimation() {
    if (!href) return;
    let stop = false;

    let doc = document.documentElement;
    let startx = doc.scrollTop;
    let destx;
    let target = document.querySelector(href);
    
    if (typeof offset === 'number') {
      destx = target.offsetTop - offset;
    } else if (offset === 'center') {
      destx = (target.offsetTop - (window.innerHeight / 2) + (target.clientHeight / 2));
    } else {
      throw new Error('Invalid `offset` data type')
    }

    let duration = dur;
    let start = null;
    let end = null;

    function trigger(timeStamp) {
      start = timeStamp;
      end = start + duration;
      draw(timeStamp);
    }

    function draw(now) {
      if (stop) return;
      if (now - start >= duration) stop = true;
      let p = (now - start) / duration;
      let val = easing(p);
      let x = startx + (destx - startx) * val;
      window.scrollTo(0, x);
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(trigger);
  }

  return (
    <a onClick={startAnimation} href={href} className={className}>
      {
        children
      }
    </a>
  )
}