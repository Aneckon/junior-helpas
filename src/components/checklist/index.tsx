import React from 'react';
import Link from 'next/link';

import styles from '@/styles/Checklist.module.scss';

export const Checklist = () => {
  return (
    <div className={styles.checklist}>
      <h2 className="subtitle">Чек лист для швидкого пошуку роботи</h2>
      <ul>
        <li className={styles.active}>
          <Link href="/">Реєстріція</Link>
        </li>
        <li>
          <Link href="/profile">Заповнити профіль</Link>
        </li>
        <li>
          <Link href="/create">Зробити резюме</Link>
        </li>
        <li>
          <Link href="/create">Відгукатися на ваканції</Link>
        </li>
      </ul>
      <div className="link">
        <Link href="">Додаткова інформація по пошуку роботи</Link>
      </div>
    </div>
  );
};
