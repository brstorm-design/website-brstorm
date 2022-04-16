import React, { useEffect, useRef, useState } from 'react';
import styles from './TextInput.module.scss';

export default function TextInput({ name, placeholder, required }) {
  const [height, setHeight] = useState('auto');
  const field = useRef(null);
  const props = arguments[0];

  function resize() {
    setHeight('auto');
    setHeight(`${field.current.scrollHeight}px`);
  }

  useEffect(() => {
    document.querySelector('textarea').addEventListener('input', resize, false);
    return () => document.querySelector('textarea').removeEventListener('input', resize, false);
  }, [])

  return (
    <textarea
      {...props}
      ref={field}
      rows="1"
      className={styles.field}
      style={{ height: height }}
    />
  )
}
