import React, { useEffect, useState } from 'react';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';
import Form from 'src/components/contact/form/Form';
import Header from 'src/layouts/Header';
import Cover from 'src/components/contact/form/Cover';
import Footer from 'src/layouts/Footer';
import Head from 'next/head';

export default function ContactForm({ content, common, footer }) {
  const [activeField, setActiveField] = useState(null);
  const { header, cover, fields, submit } = content;

  useEffect(() => {
    document.body.classList.add('page');
  }, []);

  const initalValues = {
    'entry.1247986906': '', // name
    'entry.1868660285': '', // business name
    'entry.948784691': '', // details
    'entry.130241094': '', // your content
    'entry.1655813198': '', // business size
    'entry.1765316974': { // service
      Marca: false,
      Website: false,
      Redesign: false,
      Naming: false,
      Estratégia: false,
    },
    yourContact: {
      email: false,
      phone: false,
      otherContact: false,
    },
    'entry.264212494': '', // email
    'entry.2132000314': '', // whatsapp
    'entry.41791649': '', // other
  };

  const [values, setValues] = useState(initalValues);

  function handleFieldSetChange(e) {
    e.target.closest('section').classList.remove('error');
    if (e.target.type === 'radio') {
      setValues({
        ...values,
        [e.currentTarget.name]: e.target.value,
      })
    }

    else if (e.target.type === 'checkbox') {
      let field = e.target.parentElement.querySelector('textarea');
      if (field) field.required = e.target.checked;
      setValues({
        ...values,
        [e.target.name]: {
          ...values[e.target.name],
          [e.target.value]: e.target.checked,
        },
      })
    }

    else {
      return;
    }
  }

  useEffect(() => {
    const screenCenter = window.innerHeight / 2;
    const formQuestions = document.querySelectorAll('form > *:not([type="submit"])');

    function handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          setActiveField(entry.target);
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

    if (window.scrollY === 0) {
      const initialActive = document.querySelectorAll('form > *')[0];
      setActiveField(initialActive);
      initialActive.classList.add('active');
    }

    formQuestions.forEach(element => observer.observe(element));
  }, []);

  return (
    <>
      <Head>
        <title>Começar um Projeto • Br.Storm</title>
      </Head>

      <Header variant="form" values={values} activeField={activeField} />
      <Cover content={cover} />
      <Form
        fields={fields}
        setValues={setValues}
        submitText={submit}
        values={values}
        handleFieldSetChange={handleFieldSetChange}
        activeField={activeField}
      />
      <Footer content={footer} common={common} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  if (locale === 'pt') {
    return {
      props: {
        content: pt.contactForm,
        common: pt.common,
        footer: pt.home.footer,
      }
    }
  } else {
    return {
      props: {
        content: en.contactForm,
        common: en.common,
        footer: en.home.footer,
      }
    }
  }
}