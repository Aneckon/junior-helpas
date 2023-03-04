import React, { FC } from 'react';
import Link from 'next/link';

import { UserProps } from '../types';

import styles from '@/styles/components/Checklist.module.scss';

interface ChecklistProps {
  user: UserProps | null;
}

export const Checklist: FC<ChecklistProps> = ({ user }) => {
  const [profileActive, setProfileActive] = React.useState(false);

  React.useEffect(() => {
    if (
      user?.name !== null &&
      user?.name.length &&
      user?.lastname !== null &&
      user?.lastname.length &&
      user?.phone !== null &&
      user?.phone.length &&
      user?.position !== null &&
      user?.position.length &&
      user?.city !== null &&
      user?.city.length
    ) {
      setProfileActive(true);
    } else {
      setProfileActive(false);
    }
  }, [user]);

  return (
    <div className={styles.checklist}>
      <h2 className="subtitle">Чек лист для швидкого пошуку роботи</h2>
      <ul>
        <li className={styles.active}>
          <Link href="/">Реєстріція</Link>
        </li>
        <li className={profileActive === true ? styles.active : ''}>
          <Link href="/profile">Заповнити профіль</Link>
        </li>
        <li className={localStorage.getItem('resume')?.length ? styles.active : ''}>
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
