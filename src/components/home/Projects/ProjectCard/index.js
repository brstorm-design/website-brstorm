import Link from 'next/link';
import React from 'react';
import styles from './ProjectCard.module.scss';

export default function ProjectCard({ href, children, ...other }) {
  return (
    <Link href={href}>
      <a className={styles.link} {...other}>
        {
          children
        }
      </a>
    </Link>
  )
}
