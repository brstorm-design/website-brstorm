import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { SmoothScrollContext } from 'src/contexts/SmoothScrollContext';
import { smoothScroll } from 'src/modules/App';
import { inOutQuad } from 'src/utils/easings';
import { getQueryString, nextQuestion, validateForm } from 'src/utils/form';
import FormQuestion from '../FormQuestion';
import InputBox from '../InputBox';
import TextInput from '../TextInput';
import styles from './Form.module.scss';

export default function Form({ fields, submitText, values, setValues, handleFieldSetChange, activeField }) {
  const [loading, setLoading] = useState(false);
  const [infosSent, setInfosSent] = useState(false);
  const router = useRouter();

  const { scroll } = useContext(SmoothScrollContext);

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
        let offset = -((window.innerHeight - e.element.clientHeight) / 2);
        scroll?.scrollTo(e.element, { offset });
        e.element.classList.add('error');
        console.warn(e);
      } else {
        console.error(e);
      }
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      nextQuestion(e.target);
    }
  }

  /*** automatically populate Infos form ***/
  useEffect(() => {
    if (infosSent) return;
    function handleFocusOut() {
      const contactFields = [values['entry.264212494'], values['entry.2132000314'], values['entry.41791649']];
      const hasFilledContact = contactFields.some(field => field.length > 0);

      if (values['entry.1247986906'] && hasFilledContact) {
        const [filledContactField] = contactFields.filter(field => field.length > 0);
        const queryString = getQueryString({
          'entry.576692421': values['entry.1247986906'],
          'entry.1100959596': filledContactField,
        });

        fetch('https://docs.google.com/forms/d/e/1FAIpQLSdS4TZP9lxgDBhsrAu9QhuefgJJ73Dc9RKxwn5JT4XSq-N37g/formResponse', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: queryString,
        })
          .then(() => {
            setInfosSent(true);
          })
          .catch(err => {
            console.error(err);
          });
      }
    }

    const infoElements = document.querySelectorAll('#name, #yourContact');
    infoElements.forEach(element => {
      element.addEventListener('focusout', handleFocusOut);
    });

    return () => {
      infoElements.forEach(element => {
        element.removeEventListener('focusout', handleFocusOut);
      });
    }
  }, [
    infosSent,
    values['entry.1247986906'],
    values['entry.264212494'],
    values['entry.2132000314'],
    values['entry.41791649']
  ]); // 👆 deps: name field and the 3 contact fields

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
                    name={field.attributes.name === 'yourContact' ? values['entry.1247986906'] : null}
                    id={field.sectionName}
                    active={activeField?.id === field.attributes.name ? true : false}
                  >
                    {
                      field.attributes.type === 'radio' || field.attributes.type === 'checkbox' ? (
                        <fieldset required={field.attributes.required} name={field.attributes.name} type={field.attributes.type} onChange={handleFieldSetChange}>
                          <input type="text" className={styles.focusGuide} />
                          {
                            field.options.map((option, index) => {
                              return (
                                <InputBox key={`opt-${index}`} title={option.name} value={option.value} {...field.attributes}>
                                  {
                                    typeof option.collapsedContent === 'object' ? (
                                      <TextInput {...option.collapsedContent} formValues={values} setFormValue={setValues} baseHeight={56} />
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
                        <TextInput {...field.attributes} formValues={values} setFormValue={setValues} baseHeight={56} />
                      )
                    }
                  </FormQuestion>
                )
              })
            }
          </form>
          <div>
            <button className="btn large form-submit" type="submit" form="form">{submitText}</button>
            <div style={{ display: loading ? 'flex' : 'none' }} className="spinner-border" />
          </div>
        </div>
      </div>
    </div>
  )
}
