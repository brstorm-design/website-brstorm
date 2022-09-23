import React, { useEffect } from 'react';
import WebDevelopment from 'src/components/illustrations/WebDevelopment';
import PriceCircle from 'src/components/landing-pages/PriceCircle';
import DesktopUI from 'src/components/svg/DesktopUI';
import GoogleSearch from 'src/components/svg/GoogleSearch';
import MobileUI from 'src/components/svg/MobileUI';

export default function PriceCirlcePage() {

  useEffect(() => {
    document.body.classList.add('page');
  }, []);

  return (
    <div style={{
      display: 'block',
      height: '5000px',
      padding: '32px',
    }}
      className="main"
    >
      <WebDevelopment />
      {/* <div className="d-flex">
        <MobileUI width={500} height={500} />
        <DesktopUI width={500} height={500} />
      </div> */}
    </div>
  )
}
