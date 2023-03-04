import React from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';

import { Button, Loader, Provider, Sidebar, Tabs } from '@/components';
import { UserProps } from '@/components/types';

import styles from '@/styles/page/CreateVacancy.module.scss';

export default function CreateVacancy() {
  const router = useRouter();

  const [user, setUser] = React.useState<UserProps | null>(null);

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

          <section className="section">
            {user ? (
              <div className="container">
                <Tabs link="create-vacancy" />
                <div className={styles.vacancy}>
                  <h2 className="subtitle">Створити ваканцію</h2>

                  {router.query.id === '1' && (
                    <div className={styles.content}>
                      <form className={styles.form}>
                        <div className={styles.item}>
                          <div className="input">
                            <label className={styles.input__title}>Назва компанії</label>
                            <input placeholder="Напишіть назву компанії" type="text" />
                            <textarea placeholder="Опис компанії" />
                          </div>
                          <Button
                            click={() =>
                              router.push(router.pathname, router.pathname.replace('[id]', '2'))
                            }
                            className="button"
                            type="submit">
                            Дальше
                          </Button>
                        </div>
                      </form>
                    </div>
                  )}

                  {router.query.id === '2' && (
                    <div className={styles.content}>
                      <form className={`${styles.form} ${styles.form__flex}`}>
                        <div className={styles.item}>
                          <div className="input">
                            <label className={styles.input__title}>Спеціалізація</label>
                            <input type="text" />
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>Досвід роботи, роки</label>
                            <input type="text" />
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>Заробітна плати в дол.</label>
                            <input type="text" />
                          </div>
                          <Button
                            click={() =>
                              router.push(router.pathname, router.pathname.replace('[id]', '2'))
                            }
                            className="button"
                            type="submit">
                            Дальше
                          </Button>
                        </div>
                        <div className={styles.item}>
                          <div className="input">
                            <label className={styles.input__title}>Короткий опис</label>
                            <textarea placeholder="Хороший опис дозволить нам знайти найкращий варіант для вас і збільшить шанси на те, що кандидат зацікавиться вакансією." />
                          </div>
                        </div>
                      </form>
                    </div>
                  )}

                  {router.query.id === '3' && (
                    <div className={styles.content}>
                      <form className={styles.form}>
                        <div className={styles.item}>
                          <div className="input">
                            <label className={styles.input__title}>Детальна інформація</label>
                            <textarea placeholder="Опишіть усі обов’язки, вимоги, переваги та пільги, які пропонує ця робота." />
                          </div>
                          <Button
                            click={() =>
                              router.push(router.pathname, router.pathname.replace('[id]', '2'))
                            }
                            className="button"
                            type="submit">
                            Дальше
                          </Button>
                        </div>
                      </form>
                    </div>
                  )}

                  {router.query.id === '4' && (
                    <div className={styles.content}>
                      <form className={`${styles.form} ${styles.form__flex}`}>
                        <div className={styles.item}>
                          <div className="input">
                            <label className={styles.input__title}>Країна</label>
                            <input type="text" />
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>Місто</label>
                            <input type="text" />
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>English level</label>
                            <input type="text" />
                          </div>
                          <Button
                            click={() =>
                              router.push(router.pathname, router.pathname.replace('[id]', '2'))
                            }
                            className="button"
                            type="submit">
                            Дальше
                          </Button>
                        </div>
                        <div className={styles.item}>
                          <div className="input">
                            <label className={styles.input__title}>Телеграм</label>
                            <input type="text" />
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>LinkedIn</label>
                            <input type="text" />
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>Телефон</label>
                            <input type="text" />
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
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
