import React, { useEffect } from 'react';
import FormHero from 'src/components/landing-pages/FormHero';
import PriceCircle from 'src/components/landing-pages/PriceCircle';

export default function PriceCirlcePage() {

  useEffect(() => {
    document.body.classList.add('web-b');
  }, []);

  return (
    <div style={{
      display: 'block',
      height: '5000px',
      paddingTop: '200px',
    }}
    className="main"
    >
      <FormHero />
    </div>
  )
}
