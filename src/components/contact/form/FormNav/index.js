import React from 'react';
import styles from './FormNav.module.scss';
import Chevron from 'public/images/chevron-up.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function FormNav({ activeField }) {

  let prevId = activeField?.previousElementSibling?.id || '';
  let nextId = activeField?.nextElementSibling?.id || '';

  return (
    <div className={styles.formNav}>

      <Link scroll={false} href={prevId ? `#${prevId}` : prevId} as={prevId ? `#${prevId}` : prevId}>
        <a>
          <Chevron />
        </a>
      </Link>

      <Link scroll={false} href={nextId ? `#${nextId}` : nextId} as={nextId ? `#${nextId}` : nextId}>
        <a>
          <Chevron />
        </a>
      </Link>
      
    </div>
  )
}
