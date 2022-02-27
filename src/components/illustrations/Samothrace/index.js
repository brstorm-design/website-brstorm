import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import TypeEffect from 'src/components/common/TypeEffect';
import { applyStyles } from 'src/modules/App';
import styles from './Samothrace.module.scss';
import samothrace from 'public/images/whatWeDo/samothrace.png';

export default function Samothrace({ translateValues }) {
  const container = useRef(null);

  useEffect(() => {
    let targets = container.current.querySelectorAll(`svg:nth-child(4), svg:nth-child(5)`);
    window.requestAnimationFrame(() => {
      applyStyles(targets, translateValues);
    });
  });

  return (
    <div className={styles.image}>
      <div ref={container}>
        <Image layout="fixed" src={samothrace} alt="samothrace" />
        
        <div>
          <code>
            <span>&lt;title&gt;</span>
            <TypeEffect />
            <span>&lt;/title&gt;</span>
          </code>
          <img src="/images/whatWeDo/code.svg" alt="code" />
        </div>
      </div>
    </div>
  )
}
