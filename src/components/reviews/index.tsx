import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/Reviews.module.scss';

import user from '@/assets/user.svg';

export const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <div className={styles.hed}>
        <h2 className="subtitle">Відгуки</h2>
        <div className="link">
          <Link href="/">більше відгуків</Link>
        </div>
      </div>

      <ul>
        <li>
          <Link href="/profile/1">
            <Image src={user} alt="user" />
            <div className={styles.content}>
              <p className={styles.nick}>Нікнейм</p>
              <p className={styles.descriptions}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/profile/1">
            <Image src={user} alt="user" />
            <div className={styles.content}>
              <p className={styles.nick}>Нікнейм</p>
              <p className={styles.descriptions}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/profile/1">
            <Image src={user} alt="user" />
            <div className={styles.content}>
              <p className={styles.nick}>Нікнейм</p>
              <p className={styles.descriptions}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
