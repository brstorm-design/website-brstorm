import React from 'react';
import pt from 'src/languages/pt.json';
import en from 'src/languages/en.json';

export default function ContactForm({ content }) {
  const { header, fields, submit } = content;

  return (
    <div>

      <p>Did you ever think about <strong>having a showcase</strong> that can be seen anywhere? And be able to <strong>sell 24h a day, 7 days a week?</strong> That's the potential of a website.</p><p><strong>A well-planned website</strong> greatly expands the boundaries of the business! Without a website, your business is invisible to the thousands of <strong>people who search for your services every day on Google.</strong></p>

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