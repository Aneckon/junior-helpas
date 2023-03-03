import React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';

import styles from '@/styles/components/Tabs.module.scss';

export const Tabs = () => {
  const router = useRouter();

  return (
    <nav className={styles.tabs}>
      <ul>
        <li className={router.query.id === '1' ? styles.active : ''}>
          <Link href="/documets/create-resume/1">1</Link>
        </li>
        <li className={router.query.id === '2' ? styles.active : ''}>
          <Link href="/documets/create-resume/2">2</Link>
        </li>
        <li className={router.query.id === '3' ? styles.active : ''}>
          <Link href="/documets/create-resume/3">3</Link>
        </li>
        <li className={router.query.id === '4' ? styles.active : ''}>
          <Link href="/documets/create-resume/4">4</Link>
        </li>
      </ul>
    </nav>
  );
};
