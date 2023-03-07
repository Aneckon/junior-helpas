import React from 'react';
import Head from 'next/head';

import uuid from 'react-uuid';

import { useForm, SubmitHandler } from 'react-hook-form';

import { useRouter } from 'next/router';

import { Button, Loader, Provider, Sidebar, Tabs } from '@/components';
import { createVacancy } from '@/pages/api/vacancy';
import { InputVacancyProps, UserProps } from '@/components/types';

import styles from '@/styles/page/CreateVacancy.module.scss';

export default function CreateVacancy() {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<InputVacancyProps>({
    mode: 'onChange',
  });

  const router = useRouter();

  const [errorServer, setErrorServer] = React.useState<any>(null);
  const [user, setUser] = React.useState<UserProps | null>(null);

  const [done, setDone] = React.useState(false);

  const [webSite, setWebSite] = React.useState('');
  const [nameCompany, setNameCompany] = React.useState('');
  const [descriptionsCompany, setDescriptionsCompany] = React.useState('');
  const [specialization, setSpecialization] = React.useState('');
  const [experience, setExperience] = React.useState('');
  const [salary, setSalary] = React.useState('');
  const [briefDescription, setBriefDescription] = React.useState('');
  const [detailedInformation, setDetailedInformation] = React.useState('');
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [englishLevel, setEnglishLevel] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [telegram, setTelegram] = React.useState('');
  const [linkedin, setLinkedin] = React.useState('');

  const onSubmitCreateVacancy: SubmitHandler<InputVacancyProps> = (data) => {
    if (done === true) {
      createVacancy({
        data: {
          id: uuid(),
          userId: JSON.parse(localStorage.getItem('token') || '').userId,
          nameCompany: data.nameCompany,
          webSite: data.webSite,
          descriptionsCompany: data.descriptionsCompany,
          specialization: data.specialization,
          experience: data.experience,
          salary: data.salary,
          briefDescription: data.briefDescription,
          detailedInformation: data.detailedInformation,
          city: data.city,
          country: data.country,
          englishLevel: data.englishLevel,
          phone: data.phone,
          telegram: data.telegram,
          linkedin: data.linkedin,
        },
        setErrorServer,
      });
      setTimeout(() => {
        router.push('/documents');
      }, 100);
    }
  };

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
                      <form onSubmit={handleSubmit(onSubmitCreateVacancy)} className={styles.form}>
                        <div className={styles.item}>
                          <div className="input">
                            <label className={styles.input__title}>Назва компанії</label>
                            <input
                              {...register('nameCompany')}
                              value={nameCompany}
                              onChange={(e) => setNameCompany(e.target.value)}
                              placeholder="Напишіть назву компанії"
                              type="text"
                              required
                            />
                            <input
                              {...register('webSite')}
                              value={webSite}
                              onChange={(e) => setWebSite(e.target.value)}
                              placeholder="Силка на ваш сайт"
                              type="text"
                            />
                            <textarea
                              {...register('descriptionsCompany')}
                              value={descriptionsCompany}
                              onChange={(e) => setDescriptionsCompany(e.target.value)}
                              placeholder="Опис компанії"
                            />
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
                      <form
                        onSubmit={handleSubmit(onSubmitCreateVacancy)}
                        className={`${styles.form} ${styles.form__flex}`}>
                        <div className={styles.item}>
                          <div className="input">
                            <label className={styles.input__title}>Спеціалізація</label>
                            <input
                              {...register('specialization')}
                              value={specialization}
                              onChange={(e) => setSpecialization(e.target.value)}
                              type="text"
                              required
                            />
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>Досвід роботи, роки</label>
                            <input
                              {...register('experience')}
                              value={experience}
                              onChange={(e) => setExperience(e.target.value)}
                              type="text"
                            />
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>Заробітна плати в дол.</label>
                            <input
                              {...register('salary')}
                              value={salary}
                              onChange={(e) => setSalary(e.target.value)}
                              type="text"
                            />
                          </div>
                          <Button
                            click={() =>
                              router.push(router.pathname, router.pathname.replace('[id]', '3'))
                            }
                            className="button"
                            type="submit">
                            Дальше
                          </Button>
                        </div>
                        <div className={styles.item}>
                          <div className="input">
                            <label className={styles.input__title}>Короткий опис</label>
                            <textarea
                              {...register('briefDescription')}
                              value={briefDescription}
                              onChange={(e) => setBriefDescription(e.target.value)}
                              placeholder="Хороший опис дозволить нам знайти найкращий варіант для вас і збільшить шанси на те, що кандидат зацікавиться вакансією."
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  )}

                  {router.query.id === '3' && (
                    <div className={styles.content}>
                      <form onSubmit={handleSubmit(onSubmitCreateVacancy)} className={styles.form}>
                        <div className={styles.item}>
                          <div className="input">
                            <label className={styles.input__title}>Детальна інформація</label>
                            <textarea
                              {...register('detailedInformation')}
                              value={detailedInformation}
                              onChange={(e) => setDetailedInformation(e.target.value)}
                              placeholder="Опишіть усі обов’язки, вимоги, переваги та пільги, які пропонує ця робота."
                            />
                          </div>
                          <Button
                            click={() =>
                              router.push(router.pathname, router.pathname.replace('[id]', '4'))
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
                      <form
                        onSubmit={handleSubmit(onSubmitCreateVacancy)}
                        className={`${styles.form} ${styles.form__flex}`}>
                        <div className={styles.item}>
                          <div className="input">
                            <label className={styles.input__title}>Країна</label>
                            <input
                              {...register('city')}
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              type="text"
                            />
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>Місто</label>
                            <input
                              {...register('country')}
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                              type="text"
                            />
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>English level</label>
                            <input
                              {...register('englishLevel')}
                              value={englishLevel}
                              onChange={(e) => setEnglishLevel(e.target.value)}
                              type="text"
                            />
                          </div>
                          <Button click={() => setDone(true)} className="button" type="submit">
                            Створити
                          </Button>
                        </div>
                        <div className={styles.item}>
                          <div className="input">
                            <label className={styles.input__title}>Телеграм</label>
                            <input
                              {...register('phone')}
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              type="text"
                            />
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>LinkedIn</label>
                            <input
                              {...register('telegram')}
                              value={telegram}
                              onChange={(e) => setTelegram(e.target.value)}
                              type="text"
                            />
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>Телефон</label>
                            <input
                              {...register('linkedin')}
                              value={linkedin}
                              onChange={(e) => setLinkedin(e.target.value)}
                              type="text"
                            />
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
