import React, { FC } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';

import styles from '@/styles/components/Tabs.module.scss';

interface TabsProps {
  link?: string;
}

export const Tabs: FC<TabsProps> = ({ link }) => {
  const router = useRouter();

  return (
    <nav className={styles.tabs}>
      <ul>
        <li className={router.query.id === '1' ? styles.active : ''}>
          <Link href={`/documents/${link}/1`}>1</Link>
        </li>
        <li className={router.query.id === '2' ? styles.active : ''}>
          <Link href={`/documents/${link}/2`}>2</Link>
        </li>
        <li className={router.query.id === '3' ? styles.active : ''}>
          <Link href={`/documents/${link}/3`}>3</Link>
        </li>
        <li className={router.query.id === '4' ? styles.active : ''}>
          <Link href={`/documents/${link}/4`}>4</Link>
        </li>
      </ul>
    </nav>
  );
};
