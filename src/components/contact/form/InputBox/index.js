import React, { useEffect, useRef, useState } from 'react';
import CheckInput from '../CheckInput';
import styles from './InputBox.module.scss';

export default function InputBox({ title, children, ...inputProps }) {
  const [collapse, setCollapse] = useState(null);
  const label = useRef(null);
  const collapseTimeout = useRef(null);

  useEffect(() => {
    if (children) {
      const collapse = new bootstrap.Collapse(document.getElementById(`collapse-${inputProps.value}`), {
        toggle: false
      })
      setCollapse(collapse);
    }
  }, []);

  function handleMouseEnter() {
    if (label.current.control.checked) {
      return;
    } else {
      collapseTimeout.current = setTimeout(() => {
        collapse.show();
      }, 500);
    }
  }

  function handleMouseLeave() {
    clearTimeout(collapseTimeout.current);
    if (label.current.control.checked) {
      return;
    } else {
      collapse.hide();
    }
  }

  return (
    <label
      ref={label}
      onMouseEnter={collapse ? handleMouseEnter : null}
      onMouseLeave={collapse ? handleMouseLeave : null}
      htmlFor={inputProps.value}
      className={styles.box}
    >
      <CheckInput {...inputProps} collapse={collapse} />
      <p>{title}</p>

      {
        children ? (
          <div className="collapse" id={`collapse-${inputProps.value}`}>
            <div className={`${styles.collapsedContent} ${typeof children === 'object' ? styles.nested : ''}`}>
              {children}
            </div>
          </div>
        ) : (
          null
        )
      }

    </label>
  )
}
