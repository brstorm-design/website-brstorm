import React, { useEffect, useRef, useState } from 'react';
import styles from './TextInput.module.scss';
import ErrorIcon from 'public/images/icons/Error.svg';
import { nextQuestion } from 'src/utils/form';

export default function TextInput({ name, placeholder, required, formValues, setFormValue, style, baseHeight }) {
  const inputProps = { name, placeholder, required };
  const [height, setHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');
  const [thisValue, setThisValue] = useState('');
  const field = useRef(null);

  // if name is 'email', 'whatsapp' or 'other':
  const isNested = (
    name === 'entry.264212494' ||
    name === 'entry.2132000314' ||
    name === 'entry.41791649' ||
    name === 'Instagram' ||
    name === 'Facebook' ||
    name === 'Website' ||
    name === 'Outro'
  );

  function handleChange(e) {
    e.target.closest('section')?.classList.remove('error');
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
    field.current?.scrollHeight < baseHeight ? currentHeight = baseHeight : null;
    setHeight(`${currentHeight}px`);
    setParentHeight(`${currentHeight}px`);
  }, [thisValue]);

  function handleKeyDown(e) {
    if (isNested) {
      let label = e.target.closest('label')
      label.classList.add('selected');
      label.control.checked = true;
    }

    if (e.key === 'Enter') {
      if (e.shiftKey) {
        return;
      } else {
        e.preventDefault();
        nextQuestion(e.target);
      }
    }
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
        style={{
          height: height,
          ...(style)
        }}
      />
      <ErrorIcon />
      {!isNested && <small>Por favor, preencha este campo</small>}
    </div>
  )
}
