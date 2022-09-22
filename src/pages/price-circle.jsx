import React, { useEffect } from 'react';
import WebDevelopment from 'src/components/illustrations/WebDevelopment';
import PriceCircle from 'src/components/landing-pages/PriceCircle';
import DesktopUI from 'src/components/svg/DesktopUI';
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
      {/* <WebDevelopment /> */}
      {/* <PriceCircle /> */}
      <MobileUI /* width={680} height={680} */ />
      <DesktopUI width={680} height={680} />
    </div>
  )
}
