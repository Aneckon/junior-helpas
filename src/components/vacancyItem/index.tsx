import React, { FC } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { getVacancyEditItem, removeVacancyItem } from '@/pages/api/vacancy';

import styles from '@/styles/components/VacancyItem.module.scss';

import Delete from '@/assets/icon/remove.svg';
import Edit from '@/assets/icon/edit.svg';

interface VacancyItem {
  name: string;
  descriptions: string;
  id: string;
  vacancy: { id: string }[];
  setVacancy: (item: any) => void;
}

export const VacancyItem: FC<VacancyItem> = ({ vacancy, name, descriptions, id, setVacancy }) => {
  const router = useRouter();

  const handleDeleteItem = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    removeVacancyItem(id);
    vacancy.filter((item: { id: string }) => item.id !== id);
    setVacancy(vacancy.filter((item) => item.id !== id));
  };

  const handleEditItem = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    getVacancyEditItem(id);
    setTimeout(() => {
      router.push(`${router.pathname}/edit-vacancy/${id}/1`);
    }, 100);
  };

  const handleVacancyPage = () => {
    router.push(`/vacancy/${id}`);
  };

  return (
    <div onClick={handleVacancyPage} className={styles.item}>
      <div onClick={handleDeleteItem} className={styles.delete}>
        <Image src={Delete} alt="delete" />
      </div>
      <div onClick={handleEditItem} className={styles.edit}>
        <Image src={Edit} alt="edit" />
      </div>
      <p>
        Назва: <span>{name.length ? name : 'не заповнено'}</span>
      </p>
      <p>
        Опис:
        <span>
          {descriptions.length
            ? descriptions.length >= 40
              ? `${descriptions.slice(0, 40)}...`
              : descriptions
            : 'не заповнено'}
        </span>
      </p>
    </div>
  );
};
