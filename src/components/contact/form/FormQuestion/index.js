import React, { useRef } from 'react';
import { inOutQuad } from 'src/utils/easings';
import styles from './FormQuestion.module.scss';
import ErrorIcon from 'public/images/icons/Error.svg';
import { smoothScroll } from 'src/modules/App';

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

  function handleFocus(e) {
    if (e.relatedTarget) {
      let isSameQuestion = e.target.closest('section').id === e.relatedTarget.closest('section').id;
      if (isSameQuestion) {
        return;
      }

      let scrollTarget;
      if (e.relatedTarget.type === 'checkbox' || e.relatedTarget.type === 'radio' || e.relatedTarget.className.includes('Guide')) {
        scrollTarget = e.relatedTarget.closest('fieldset');
      } else {
        scrollTarget = e.relatedTarget;
      }

      smoothScroll(scrollTarget, 'center', 0, 400);
    }
  }

  return (
    <section
      className={styles.question}
      id={id}
      type={type}
      onClick={active ? null : handleClick}
      onBlur={handleFocus}
    >
      <div className={styles.title}>
        <h3>{name ? name : ''}{title} {required ? '' : <small style={{ display: display }}>(Opcional)</small>}</h3>
        <div>
          <small>Selecione alguma das opções abaixo</small>
          <ErrorIcon />
        </div>
      </div>
      {children}
      {helperText && <small style={{ display: 'inline-block', marginTop: '24px' }}>{helperText}</small>}
    </section>
  )
}
