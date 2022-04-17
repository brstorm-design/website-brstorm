import React, { useEffect, useRef, useState } from 'react';
import styles from './TextInput.module.scss';

export default function TextInput({ name, placeholder, required }) {
  const inputProps = {name, placeholder, required};
  const [height, setHeight] = useState('auto');
  const field = useRef(null);

  function resize() {
    setHeight('auto');
    setHeight(`${field.current.scrollHeight}px`);
  }

  useEffect(() => {
    field.current.addEventListener('input', resize, false);
    return () => field.current.removeEventListener('input', resize, false);
  }, [])

  return (
    <textarea
      {...inputProps}
      ref={field}
      rows="1"
      className={styles.textField}
      style={{ height: height }}
    />
  )
}
