import React from 'react';
import FormQuestion from '../FormQuestion';
import InputBox from '../InputBox';
import TextInput from '../TextInput';
import styles from './Form.module.scss';

export default function Form({ fields }) {
  return (
    <form className={styles.form}>
      {
        fields.map((field, index) => {
          return (
            <FormQuestion
              key={`question-${index}`}
              title={field.title}
              helperText={field.helperText}
              required={field.attributes.required}
            >
              {
                field.attributes.type === 'radio' || field.attributes.type === 'checkbox' ? (
                  field.options.map((option, index) => {
                    return (
                      <InputBox key={`opt-${index}`} title={option.name} value={option.value} {...field.attributes}>
                        {
                          typeof option.collapsedContent === 'object' ? (
                            <TextInput {...option.collapsedContent} />
                          ) : (
                            option.collapsedContent
                          )
                        }
                      </InputBox>
                    )
                  })
                ) : (
                  <TextInput {...field.attributes} />
                )
              }
            </FormQuestion>
          )
        })
      }
    </form>
  )
}
