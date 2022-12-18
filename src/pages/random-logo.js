import React, { useEffect } from 'react';
import Type from 'src/components/illustrations/Type';
import Arrow from 'public/images/arrow-down.svg';

export default function PriceCirlcePage() {

  useEffect(() => {
    document.body.classList.add('page')
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '48px',
      justifyContent: 'space-evenly',
      width: '100%',
      padding: '32px',
    }}
      className="main"
    >
      <div>
        <h2>Type Animation 1</h2>
        <Type key={1} />
      </div>
      <div>
        <h2>Type Animation 2</h2>
        <Type key={2} single />
      </div>
    </div>
  )
}
