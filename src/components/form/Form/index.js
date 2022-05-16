import React, { useEffect, useState } from 'react';
import { validateForm } from 'src/utils/form';
import FormQuestion from '../FormQuestion';
import InputBox from '../InputBox';
import TextInput from '../TextInput';
import styles from './Form.module.scss';

export default function Form({ fields, values, setValues, handleFieldSetChange }) {

  function submitForm(e) {
    e.preventDefault();
    try {
      validateForm(values);
      console.log('%cSUCCESS', 'color: #75e6b2;');
      console.log(values);
    } catch (e) {
      e.element.parentElement.scrollIntoView({ behavior: 'smooth' });
      e.element.style.background = 'red';
      console.warn(e);
      setTimeout(() => {
        e.element.style.background = 'initial'
      }, 1500);
    }
  }

  useEffect(() => {
    const screenCenter = window.innerHeight / 2;

    function handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (entry.boundingClientRect.top > screenCenter) {
            let prevElement = entry.target.previousElementSibling;
            if (prevElement) prevElement.classList.remove('active');
          } else {
            let nextElement = entry.target.nextElementSibling;
            if (nextElement) nextElement.classList.remove('active');
          }
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-40% 0% -40% 0%',
    });

    document.querySelectorAll('form > *:not([type="submit"])').forEach(element => observer.observe(element));
  }, [])

  return (
    <form onSubmit={submitForm} className={styles.form} noValidate>
      {
        fields.map((field, index) => {
          return (
            <FormQuestion
              key={`question-${index}`}
              title={field.title}
              helperText={field.helperText}
              required={field.attributes.required}
              type={field.attributes.type}
              name={field.attributes.name === 'businessName' ? values.name : null}
              id={field.attributes.name}
            >
              {
                field.attributes.type === 'radio' || field.attributes.type === 'checkbox' ? (
                  <fieldset required={field.required} name={field.attributes.name} type={field.attributes.type} onChange={handleFieldSetChange}>
                    {
                      field.options.map((option, index) => {
                        return (
                          <InputBox key={`opt-${index}`} title={option.name} value={option.value} {...field.attributes}>
                            {
                              typeof option.collapsedContent === 'object' ? (
                                <TextInput {...option.collapsedContent} formValues={values} setFormValue={setValues} />
                              ) : (
                                option.collapsedContent
                              )
                            }
                          </InputBox>
                        )
                      })
                    }
                  </fieldset>
                ) : (
                  <TextInput {...field.attributes} formValues={values} setFormValue={setValues} />
                )
              }
            </FormQuestion>
          )
        })
      }
      <button className="btn" type="submit">submit</button>
    </form>
  )
}
