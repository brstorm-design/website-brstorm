import React from 'react';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';

export default function ContactForm({ content }) {
  const { header, fields, submit } = content;
  
  return (
    <div>ContactForm</div>
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