import React, { useEffect, useState } from 'react';
import { validateForm } from 'src/utils/form';
import FormQuestion from '../FormQuestion';
import InputBox from '../InputBox';
import TextInput from '../TextInput';
import styles from './Form.module.scss';

export default function Form({ fields, submitText, values, setValues, handleFieldSetChange, activeField }) {

  function submitForm(e) {
    e.preventDefault();
    try {
      validateForm(values);
      console.log('%cSUCCESS', 'color: #75e6b2;');
      console.log(values);
    } catch (e) {
      e.element.scrollIntoView({ behavior: 'smooth' });
      e.element.classList.add('error');
      console.warn(e);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <form onSubmit={submitForm} className={styles.form} noValidate id="form">
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
                    active={activeField?.id === field.attributes.name ? true : false}
                  >
                    {
                      field.attributes.type === 'radio' || field.attributes.type === 'checkbox' ? (
                        <fieldset required={field.attributes.required} name={field.attributes.name} type={field.attributes.type} onChange={handleFieldSetChange}>
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
          </form>
          <button className="btn" type="submit" form="form">{submitText}</button>
        </div>
      </div>
    </div>
  )
}
