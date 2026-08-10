'use client';

import styles from './About.module.scss';
import { Heading, Text, TitleArea, Button } from '@ui/index';
import clsx from 'clsx';

export function About() {
  return (
    <section className={clsx(styles.root)}>
      <div className={styles.container}>
        <h2 className={styles.title}>About</h2>
      </div>
    </section>
  );
}