import React, { useEffect } from 'react';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';
import Form from 'src/components/form/Form';

export default function ContactForm({ content }) {
  const { header, fields, submit } = content;

  useEffect(() => {
    document.body.classList.add('page');
  }, []);

  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="container d-flex flex-column" style={{ rowGap: '60px' }}>
        <section>
          <Form fields={fields} />
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