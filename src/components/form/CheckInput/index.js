import React, { useEffect, useState } from 'react';
import styles from './CheckInput.module.scss';

export default function CheckInput({ name, type, required, collapse }) {

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
    } else {
      box.classList.remove('selected');
      collapse?.toggle();
    }
  }

  return (
    <input
      onChange={handleChange}
      className={styles.input}
      id={name}
      name={'service'}
      type={type}
      required={!!required}
    />
  )
}
