import React from 'react';

export default function AnchorButton(props) {

  function startAnimation() {
    let stop = false;

    let doc = document.documentElement;
    let startx = doc.scrollTop;
    let destx = document.querySelector(props.href).offsetTop - 150;
    let duration = props.duration;
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
      let val = props.easing(p);
      let x = startx + (destx - startx) * val;
      window.scrollTo(0, x);
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(trigger);
  }

  return (
    <a onClick={startAnimation} href={props.href} className={props.className}>
      {
        props.children
      }
    </a>
  )
}