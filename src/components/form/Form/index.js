import React, { useState } from 'react';
import { validateForm } from 'src/utils/form';
import FormQuestion from '../FormQuestion';
import InputBox from '../InputBox';
import TextInput from '../TextInput';
import styles from './Form.module.scss';

export default function Form({ fields }) {
  const initalValues = {
    name: '',
    businessName: '',
    details: '',
    yourContent: '',
    businessSize: '',
    service: {
      brand: false,
      website: false,
      redesign: false,
      naming: false,
      strategy: false,
    },
    yourContact: {
      email: false,
      whatsapp: false,
      other: false,
    },
    email: '',
    whatsapp: '',
    other: '',
  };

  const [values, setValues] = useState(initalValues);

  function handleFieldsetChange(e) {
    if (e.target.type === 'radio') {
      setValues({
        ...values,
        [e.currentTarget.name]: e.target.value,
      })
    } else if (e.target.type === 'checkbox') {
      let field = e.target.parentElement.querySelector('textarea');
      if (field) field.required = e.target.checked;
      setValues({
        ...values,
        [e.target.name]: {
          ...values[e.target.name],
          [e.target.value]: e.target.checked,
        },
      })
    } else {
      return;
    }
  }

  /* for (const val in values) {
    console.log(val, `- ${values[val]}`);
  } */

  function submitForm(e) {
    e.preventDefault();
    try {
      validateForm(values);
      console.log('%cSUCCESS', 'color: #75e6b2;');
      console.log(values);
    } catch (e) {
      e.element.parentElement.scrollIntoView({behavior: 'smooth'});
      e.element.style.background = 'red';
      console.warn(e);
      setTimeout(() => {
        e.element.style.background = 'initial'
      }, 1500);
    }
  }

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
            >
              {
                field.attributes.type === 'radio' || field.attributes.type === 'checkbox' ? (
                  <fieldset required={field.required} name={field.attributes.name} type={field.attributes.type} onChange={handleFieldsetChange}>
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
