import React from 'react';
import styles from './FilledFields.module.scss';

export default function FilledFields({ values }) {
  const numberOfFields = 7 //Object.getOwnPropertyNames(values).length;

  function countFilledFields() {
    let count = 0;
    for (const field in values) {
      let ignore = (
        field === 'entry.264212494' ||
        field === 'entry.2132000314' ||
        field === 'entry.41791649' ||
        field === 'Instagram' ||
        field === 'Facebook' ||
        field === 'Website' ||
        field === 'Outro'
      ); // *
      if (typeof values[field] === 'string') {
        if (values[field] && !ignore) {
          count += 1;
        }
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
  // * ignored fields for counting: 'email', 'whatsapp', 'other'; 'instagram', 'facebook', 'site', 'other';

  return (
    <div className={styles.filledFields}>
      <small><strong>{countFilledFields()}</strong> / {numberOfFields}</small>
      <small>Campos Respondidos</small>
    </div>
  )
}
