import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { smoothScroll } from 'src/modules/App';
import { inOutQuad } from 'src/utils/easings';
import { getQueryString, nextQuestion, validateForm } from 'src/utils/form';
import FormQuestion from '../FormQuestion';
import InputBox from '../InputBox';
import TextInput from '../TextInput';
import styles from './Form.module.scss';

export default function Form({ fields, submitText, values, setValues, handleFieldSetChange, activeField }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function submitForm(e) {
    e.preventDefault();
    try {
      validateForm(values);

      const formElements = Array.from(document.querySelector('form').elements);
      formElements.forEach(element => {
        element.disabled = true;
      });

      setLoading(true);

      const request = await fetch('https://docs.google.com/forms/d/e/1FAIpQLScp0gGg8EFD0CF9pUYxEXGOmxzDLGMEe2MkSZ4ZlUPCBifiwQ/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: getQueryString(values),
      });
      if (request) {
        router.push('/contact/success');
      } else {
        window.location.reload();
      }

    } catch (e) {
      if (e.element) {
        smoothScroll(e.element, 'center', 1000, inOutQuad)
        e.element.classList.add('error');
        console.warn(e);
      } else {
        window.location.reload();
      }
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      nextQuestion(e.target);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <form onSubmit={submitForm} onKeyDown={handleKeyDown} className={styles.form} noValidate id="form">
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
          <div>
            <button className="btn large" type="submit" form="form">{submitText}</button>
            <div style={{ display: loading ? 'flex' : 'none' }} className="spinner-border" />
          </div>
        </div>
      </div>
    </div>
  )
}
