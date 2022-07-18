import Link from 'next/link';
import React from 'react';
import styles from './SeeMore.module.scss';
import Arrow from 'public/images/arrow-forward.svg';

export default function SeeMore({ children, linkText, href, className, ...other }) {
  return (
    <div className={`${styles.seeMore} ${className ?? ''}`} {...other}>
      <h4>{children}</h4>
      {
        href ? (
          <Link href={href}>
            <a>
              {linkText}
              <Arrow style={{marginLeft: '5px'}} />
            </a>
          </Link>
        ) : (
          <span>{linkText}</span>
        )
      }
    </div>
  )
}
