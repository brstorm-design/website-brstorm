import React, { useRef } from 'react';
import { inOutQuad } from 'src/utils/easings';
import styles from './FormQuestion.module.scss';

export default function FormQuestion({ children, title, helperText, required, name, type, id, active }) {

  name === '' ? name = '_____' : name = name;
  const display = type === 'checkbox' ? 'none' : 'inline-block';

  // fazer um módulo depois:
  function startAnimation(e) {
    let stop = false;
    let target = e.currentTarget;

    let doc = document.documentElement;
    let startx = doc.scrollTop;
    let destx = (target.offsetTop - (window.innerHeight / 2) + (target.clientHeight / 2));
    let duration = 500;
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
      let val = inOutQuad(p);
      let x = startx + (destx - startx) * val;
      window.scrollTo(0, x);
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(trigger);
  }

  function handleClick(e) {
    startAnimation(e);
  }

  return (
    <div className={styles.question} id={id} onClick={active ? null : handleClick}>
      <h3>{name ? name : ''}{title} {required ? '' : <small style={{ display: display }}>(Opcional)</small>}</h3>
      {children}
      {helperText && <small>{helperText}</small>}
    </div>
  )
}
