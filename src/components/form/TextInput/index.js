import React, { useEffect, useRef, useState } from 'react';
import styles from './TextInput.module.scss';
import ErrorIcon from 'public/images/icons/Error.svg';
import { nextQuestion } from 'src/utils/form';

export default function TextInput({ name, placeholder, required, formValues, setFormValue }) {
  const inputProps = { name, placeholder, required };
  const [height, setHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');
  const [thisValue, setThisValue] = useState('');
  const field = useRef(null);

  const isNested = !(name === 'email' || name === 'phone' || name === 'otherContact');

  function handleChange(e) {
    e.target.closest('section').classList.remove('error');
    setHeight('auto');
    setParentHeight(`${field.current?.scrollHeight}px`);
    setFormValue({
      ...formValues,
      [name]: e.target.value,
    });
    setThisValue(e.target.value);
  }

  useEffect(() => {
    let currentHeight = field.current?.scrollHeight;
    field.current?.scrollHeight === 0 ? currentHeight = 'auto' : null;
    setHeight(`${currentHeight}px`);
    setParentHeight(`${currentHeight}px`);
  }, [thisValue]);

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        return;
      } else {
        e.preventDefault();
        nextQuestion(e.target);
      }
    }
  }

  function handleClick(e) {
    e.target.closest('label').click();
    e.target.focus();
  }

  return (
    <div style={{ minHeight: parentHeight }} className={styles.wrapper}>
      <textarea
        {...inputProps}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={formValues[name]}
        ref={field}
        rows="1"
        className={styles.textField}
        onClick={isNested ? null : handleClick}
        style={{ height: height }}
      />
      <ErrorIcon />
      {isNested && <small>Por favor, preencha este campo</small>}
    </div>
  )
}
