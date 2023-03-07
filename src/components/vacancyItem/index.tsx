import React, { FC } from 'react';

import Link from 'next/link';

import styles from '@/styles/components/VacancyItem.module.scss';

interface VacancyItemProps {
  id: string;
  specialization: string;
  descriptionsCompany: string;
  nameCompany: string;
  webSite: string;
}

export const VacancyItem: FC<VacancyItemProps> = ({
  specialization,
  id,
  descriptionsCompany,
  nameCompany,
  webSite,
}) => {
  return (
    <Link href={`/vacancy/${id}`} className={styles.item}>
      <p className={styles.hed}>{specialization}</p>
      <div className={styles.descriptions}>
        <p>
          Опис:<span>{descriptionsCompany}</span>
        </p>
      </div>
      <div>
        <p>
          Назва компанії:
          <span>{nameCompany ? nameCompany : 'не заповнено'}</span>
        </p>
        <p>
          Силка на сайт:
          {descriptionsCompany ? (
            <Link href={descriptionsCompany ? webSite : 'не заповнено'} target="_blank">
              {descriptionsCompany ? webSite : 'не заповнено'}
            </Link>
          ) : (
            <span>не заповнено</span>
          )}
        </p>
      </div>
    </Link>
  );
};
