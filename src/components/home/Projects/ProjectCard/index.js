import Link from 'next/link';
import React from 'react';
import styles from './ProjectCard.module.scss';

export default function ProjectCard({ modal, href, as, children, ...other }) {
  return (
    <>
      {
        modal ? (
          <Link href={href} as={as} shallow>
            <a className={styles.link} {...other}>
              {
                children
              }
            </a>
          </Link>

        ) : (

          <a className={styles.link} href={href} {...other}>
            {
              children
            }
          </a>
        )
      }
    </>
  )
}
