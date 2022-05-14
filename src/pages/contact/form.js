import React, { useEffect, useState } from 'react';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';
import Form from 'src/components/form/Form';
import Header from 'src/layouts/Header';

export default function ContactForm({ content }) {
  const { header, fields, submit } = content;

  useEffect(() => {
    document.body.classList.add('page');
  }, []);

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

  function handleFieldSetChange(e) {
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

  return (
    <div style={{ paddingTop: '120px' }}>
      <Header variant="form" values={values} next="asd" prev="aesede" />
      <div className="container d-flex flex-column" style={{ rowGap: '60px' }}>
        <section>
          <Form fields={fields} values={values} setValues={setValues} handleFieldSetChange={handleFieldSetChange} />
        </section>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  if (locale === 'pt') {
    return {
      props: {
        content: pt.contactForm
      }
    }
  } else {
    return {
      props: {
        content: en.contactForm
      }
    }
  }
}