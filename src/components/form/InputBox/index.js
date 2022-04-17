import React, { useEffect, useRef, useState } from 'react';
import CheckInput from '../CheckInput';
import styles from './InputBox.module.scss';

export default function InputBox({ children, name, value, title, type, required }) {
  const inputProps = { value, name, type, required };
  const [collapse, setCollapse] = useState(null);
  const label = useRef(null);

  useEffect(() => {
    if (children) {
      const collapse = new bootstrap.Collapse(document.getElementById(`collapse-${value}`), {
        toggle: false
      })
      setCollapse(collapse);
    }
  }, []);

  function handleMouseEnter() {
    if (label.current.control.checked) {
      return;
    } else {
      collapse.show();
    }
  }

  function handleMouseLeave() {
    if (label.current.control.checked) {
      return;
    } else {
      collapse.hide();
    }
  }

  return (
    <label
      ref={label}
      onMouseEnter={type === 'checkbox' ? handleMouseEnter : null}
      onMouseLeave={type === 'checkbox' ? handleMouseLeave : null}
      htmlFor={value}
      className={styles.box}
    >
      <CheckInput {...inputProps} collapse={collapse} />
      <span>{title}</span>

      {
        children ? (
          <div className="collapse" id={`collapse-${value}`}>
            <div className={`${styles.collapseContent} ${typeof children === 'object' ? styles.nested : ''}`}>{children}</div>
          </div>
        ) : (
          null
        )
      }

    </label>
  )
}
