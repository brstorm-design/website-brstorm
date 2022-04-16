import React, { useEffect, useRef, useState } from 'react';
import CheckInput from '../CheckInput';
import styles from './InputBox.module.scss';

export default function InputBox({ children, name, title, type, required }) {
  const inputProps = { name, type, required };
  const [collapse, setCollapse] = useState(null);
  const label = useRef(null);

  useEffect(() => {
    if (children) {
      const collapse = new bootstrap.Collapse(document.getElementById(`collapse-${name}`), {
        toggle: false
      })
      setCollapse(collapse);
    }
  }, []);

  function handlePointerEnter() {
    if (label.current.control.checked) {
      return;
    } else {
      collapse?.show();
    }
  }

  function handlePointerLeave() {
    if (label.current.control.checked) {
      return;
    } else {
      collapse?.hide();
    }
  }

  return (
    <label
      ref={label}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      htmlFor={name}
      className={styles.box}
      data-bs-toggle="collapse"
    >
      <CheckInput {...inputProps} collapse={collapse} />
      <span>{title}</span>

      {
        children ? (
          <div className="collapse" id={`collapse-${name}`}>
            <div className={styles.collapseContent}>{children}</div>
          </div>
        ) : (
          null
        )
      }

    </label>
  )
}
