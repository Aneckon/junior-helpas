import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/components/CreateItem.module.scss';

interface CreateItemProps {
  name: string;
  link?: string;
  icon: string;
}

export const CreateItem: FC<CreateItemProps> = ({ name, link, icon }) => {
  return (
    <Link href={link === undefined ? '' : link} className={styles.item}>
      <Image src={icon} alt="icon" />
      <p>{name}</p>
    </Link>
  );
};
