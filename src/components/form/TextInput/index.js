import React, { useEffect, useRef, useState } from 'react';
import styles from './TextInput.module.scss';

export default function TextInput({ name, placeholder, required, formValues, setFormValue }) {
  const inputProps = { name, placeholder, required };
  const [height, setHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');
  const [thisValue, setThisValue] = useState('');
  const field = useRef(null);

  function handleChange(e) {
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

  return (
    <div style={{ minHeight: parentHeight }}>
      <textarea
        {...inputProps}
        onChange={handleChange}
        value={formValues[name]}
        ref={field}
        rows="1"
        className={styles.textField}
        style={{ height: height }}
      />
    </div>
  )
}
