import React from 'react';
import styles from './FilledFields.module.scss';

export default function FilledFields({ values }) {

  delete values.email;
  delete values.whatsapp;
  delete values.other;

  const numberOfFields = Object.getOwnPropertyNames(values).length;

  function countFilledFields() {
    let count = 0;
    for (const field in values) {
      if (typeof values[field] === 'string') {
        values[field] ? count += 1 : null;
      } else {
        let optionsArray = [];
        for (const subField in values[field]) {
          optionsArray.push(values[field][subField]);
        }
        let isAllFalse = optionsArray.every(field => !field);
        !isAllFalse ? count += 1 : null;
      }
    }
    return count;
  }

  return (
    <div className={styles.filledFields}>
      <small><strong>{countFilledFields()}</strong> / {numberOfFields}</small>
      <small>Campos Respondidos</small>
    </div>
  )
}
