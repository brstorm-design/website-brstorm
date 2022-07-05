import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import CMS from 'src/components/illustrations/CMS';
import David from 'src/components/illustrations/David';
import Samothrace from 'src/components/illustrations/Samothrace';
import Thinker from 'src/components/illustrations/Thinker';
import { getTranslateValue } from 'src/modules/App';

export default function Illustrations() {
  const davidRef = useRef(null);
  const [davidMousePos, setDavidMousePos] = useState(null);
  const [victoryMousePos, setVictoryMousePos] = useState(null);

  useEffect(() => {
    document.body.classList.add('page');
    const victory = document.querySelector('[class^="Samothrace"]');
    victory.style.position = 'static';
  }, []);

  const style = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <div>
      <Head>
        <title>Illustrations</title>
      </Head>

      <div style={style} onMouseMove={e => setDavidMousePos(getTranslateValue(e, [40]))}>
        <David forwardedRef={davidRef} translate={davidMousePos} />
      </div>

      <div style={style} onMouseMove={e => setVictoryMousePos(getTranslateValue(e, [-40, 40]))}>
        <Samothrace translateValues={victoryMousePos} />
      </div>

      <div style={style}>
        <Thinker />
      </div>

      <div style={style}>
        <CMS />
      </div>
    </div>
  )
}
