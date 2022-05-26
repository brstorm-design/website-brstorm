import React from 'react';
import { nextQuestion } from 'src/utils/form';
import styles from './CheckInput.module.scss';

export default function CheckInput({ value, name, type, required, collapse }) {

  function handleChange(e) {
    const box = e.target.parentElement;

    if (type === 'radio') {
      const inputList = Array.from(box.parentElement.children);
      inputList.forEach(el => {
        el.classList.remove('selected')
      });
    }

    if (e.target.checked) {
      box.classList.add('selected');
      collapse?.show();
    } else {
      box.classList.remove('selected');
      collapse?.toggle();
    }
  }

  return (
    <input
      onChange={handleChange}
      className={styles.input}
      value={value}
      id={value}
      name={name}
      type={type}
      required={!!required}
    />
  )
}
