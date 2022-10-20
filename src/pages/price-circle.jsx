import React, { useEffect } from 'react';
import Type from 'src/components/illustrations/Type';
import Arrow from 'public/images/arrow-down.svg';

export default function PriceCirlcePage() {

  useEffect(() => {
    document.body.classList.add('page')
  }, []);

  return (
    <div style={{
      display: 'block',
      height: '5000px',
      padding: '32px',
    }}
      className="main"
    >
      <Type />
    </div>
  )
}
