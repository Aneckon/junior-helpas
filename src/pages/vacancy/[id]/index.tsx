import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';

import { Button, Loader, Provider, Sidebar } from '@/components';
import { getVacancyItem } from '@/pages/api/vacancy';
import { getProfileVacancy } from '@/pages/api/profile';
import { UserProps, VacancyItemProps } from '@/components/types';

import styles from '@/styles/page/Vacancy.module.scss';

import userAvatar from '@/assets/user.svg';

export default function Vacancy() {
  const router = useRouter();

  const [errorServer, setErrorServer] = React.useState<any>(null);

  const [user, setUser] = React.useState<UserProps | null>(null);

  const [vacancyItem, setVacancyItem] = React.useState<VacancyItemProps>({
    telegram: '',
    linkedin: '',
    phone: '',
    detailedInformation: '',
    specialization: '',
    nameCompany: '',
    descriptionsCompany: '',
    webSite: '',
    briefDescription: '',
    city: '',
  });
  const [vacancyUser, setVacancyUser] = React.useState<UserProps | null>(null);

  React.useEffect(() => {
    if (router.query.id?.length) {
      if (!localStorage.getItem('vacancy-item')) {
        getVacancyItem(router.query.id);
      }
      if (!localStorage.getItem('vacancy-item-user')) {
        setTimeout(() => {
          getProfileVacancy({ setErrorServer });
        }, 100);
      }
      if (localStorage.getItem('vacancy-item') && localStorage.getItem('vacancy-item-user')) {
        setVacancyItem(JSON.parse(localStorage.getItem('vacancy-item') || ''));
        setVacancyUser(JSON.parse(localStorage.getItem('vacancy-item-user') || ''));
      }
    }
  }, [router, user]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider user={user} setUser={setUser}>
        <main className="main">
          <Sidebar user={user} />

          <section className="section vacancy">
            {user ? (
              <div className="container">
                <div className={styles.hed}>
                  <h1 className="title title__vacancy">
                    <span>Спеціалізація: </span>
                    {vacancyItem ? vacancyItem.specialization : 'Не заповнено'}
                  </h1>
                  <Button className="button" type="button">
                    Відгукнутися
                  </Button>
                </div>

                <div className={styles.content}>
                  <div className={styles.descriptions}>
                    <p className={styles.subtext}>Короткий опис</p>
                    <p className={styles.text}>
                      {vacancyItem ? vacancyItem.briefDescription : 'Не заповнено'}
                    </p>
                  </div>
                  <div className={styles.descriptions}>
                    <p className={styles.subtext}>Детальна інформація</p>
                    <p className={styles.text}>
                      {vacancyItem.detailedInformation
                        ? vacancyItem.detailedInformation
                        : 'Не заповнено'}
                    </p>
                  </div>
                  <div className={styles.contact}>
                    <p className={styles.subtext}>Контакти</p>
                    <ul>
                      <li>
                        <p className={styles.text}>Номер: </p>
                        <p className={styles.text}>
                          {vacancyItem ? vacancyItem.phone : 'Не заповнено'}
                        </p>
                      </li>
                      <li>
                        <p className={styles.text}>Лінкедін: </p>
                        <p className={styles.text}>
                          {vacancyItem ? vacancyItem.linkedin : 'Не заповнено'}
                        </p>
                      </li>
                      <li>
                        <p className={styles.text}>Телеграм: </p>
                        <p className={styles.text}>
                          {vacancyItem ? vacancyItem.telegram : 'Не заповнено'}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.city}>
                    <p className={styles.subtext}>Місто</p>
                    <p className={styles.text}>{vacancyItem ? vacancyItem.city : 'Не заповнено'}</p>
                  </div>
                </div>
                <div className={styles.content__company}>
                  <Link href="/profile" className={styles.user}>
                    <Image
                      width={50}
                      height={50}
                      src={
                        vacancyUser?.image === null
                          ? userAvatar
                          : `${process.env.URL}/static/${vacancyUser?.image}`
                      }
                      alt="avatar"
                    />
                    <div>
                      <p>
                        Ім'я: <span>{vacancyUser?.name}</span>
                      </p>
                      <p>
                        Місто:
                        <span>{vacancyUser?.city ? vacancyUser?.city : 'не заповнено'}</span>
                      </p>
                    </div>
                  </Link>
                  <div className={styles.item}>
                    <p>
                      Назва компанії:
                      <span>
                        {vacancyItem.nameCompany ? vacancyItem.nameCompany : 'не заповнено'}
                      </span>
                    </p>
                    <p>
                      Силка на сайт:
                      {vacancyItem.descriptionsCompany ? (
                        <Link
                          href={
                            vacancyItem.descriptionsCompany ? vacancyItem.webSite : 'не заповнено'
                          }
                          target="_blank">
                          {vacancyItem.descriptionsCompany ? vacancyItem.webSite : 'не заповнено'}
                        </Link>
                      ) : (
                        <span>не заповнено</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <Loader />
            )}
          </section>
        </main>
      </Provider>
    </>
  );
}
