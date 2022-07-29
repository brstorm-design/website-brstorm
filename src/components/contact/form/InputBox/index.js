import React, { useContext, useEffect, useRef, useState } from 'react';
import { SmoothScrollContext } from 'src/contexts/SmoothScrollContext';
import CheckInput from '../CheckInput';
import styles from './InputBox.module.scss';

export default function InputBox({ title, children, ...inputProps }) {
  const [collapse, setCollapse] = useState(null);
  const label = useRef(null);
  const collapseTimeout = useRef(null);

  const { scroll } = useContext(SmoothScrollContext);

  useEffect(() => {
    if (!children) return;

    const collapsibleElement = document.getElementById(`collapse-${inputProps.value}`);
    const collapse = new bootstrap.Collapse(collapsibleElement, {
      toggle: false
    });
    setCollapse(collapse);
  }, []);

  useEffect(() => {
    if (!children) return;
    
    const collapsibleElement = document.getElementById(`collapse-${inputProps.value}`);
    const updateLocomotive = () => {
      if (scroll) {
        scroll.update();
      }
    };

    collapsibleElement.addEventListener('shown.bs.collapse', updateLocomotive);
    collapsibleElement.addEventListener('hidden.bs.collapse', updateLocomotive);

    return () => {
      collapsibleElement.removeEventListener('shown.bs.collapse', updateLocomotive);
      collapsibleElement.removeEventListener('hidden.bs.collapse', updateLocomotive);
    }
  }, [scroll]);

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
