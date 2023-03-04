import React from 'react';
import Head from 'next/head';

import { useForm, SubmitHandler } from 'react-hook-form';
import uuid from 'react-uuid';

import { useRouter } from 'next/router';

import {
  Button,
  CreateItem,
  ExperienceItem,
  Loader,
  Provider,
  Sidebar,
  SkillsItem,
  Tabs,
} from '@/components';
import { createResume } from '@/pages/api/resume';
import { InputResumeProps, UserProps } from '@/components/types';

import styles from '@/styles/page/CreateResume.module.scss';

import addJob from '@/assets/icon/addJobs.svg';

export default function CreateResumeId() {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<InputResumeProps>({
    mode: 'onChange',
  });

  const router = useRouter();

  const [user, setUser] = React.useState<UserProps | null>(null);

  const [errorServer, setErrorServer] = React.useState<any>(null);
  const [done, setDone] = React.useState(false);

  const [education, setEducation] = React.useState('');

  const [name, setName] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [city, setCity] = React.useState('');
  const [aboutme, setAboutme] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [telegram, setTelegram] = React.useState('');
  const [linkedin, setLinkedin] = React.useState('');
  const [github, setGithub] = React.useState('');
  const [portfolio, setPortfolio] = React.useState('');
  const [salary, setSalary] = React.useState('');
  const [position, setPosition] = React.useState('');

  const [skills, setSkills] = React.useState([{ id: uuid(), name: '' }]);

  const addSkillsKey = (e: { key?: string; preventDefault: () => void }) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setSkills((item) => [...item, { id: uuid(), name: '' }]);
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      setSkills((item) => [...item, { id: uuid(), name: '' }]);
    }
  };

  const addSkills = () => {
    setSkills((item) => [...item, { id: uuid(), name: '' }]);
  };

  const [experienceList, setExperienceList] = React.useState([
    { id: uuid(), companyName: '', companyPosition: '', companyDescriptions: '' },
  ]);

  const addExperience = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setExperienceList((item) => [
      ...item,
      {
        id: uuid(),
        companyName: '',
        companyPosition: '',
        companyDescriptions: '',
      },
    ]);
  };

  const [resumeData, setResumeData] = React.useState({
    name: '',
    lastname: '',
    position: '',
    education: '',
    skills: skills,
    experience: experienceList,
    city: '',
    aboutme: '',
    telegram: '',
    linkedin: '',
    github: '',
    portfolio: '',
    phone: '',
    salary: '',
  });

  const onSubmitCreateResume: SubmitHandler<InputResumeProps> = (data) => {
    setResumeData({
      name: data.name,
      lastname: data.lastname,
      position: data.position,
      education: data.education,
      skills: skills,
      experience: experienceList,
      city: data.city,
      aboutme: data.aboutme,
      telegram: data.telegram,
      linkedin: data.linkedin,
      github: data.github,
      portfolio: data.portfolio,
      phone: data.phone,
      salary: data.salary,
    });

    if (done === true) {
      createResume({
        resumeData: {
          name: data.name,
          lastname: data.lastname,
          position: data.position,
          education: data.education,
          skills: skills,
          experience: experienceList,
          city: data.city,
          aboutme: data.aboutme,
          telegram: data.telegram,
          linkedin: data.linkedin,
          github: data.github,
          portfolio: data.portfolio,
          phone: data.phone,
          salary: data.salary,
        },
        user,
        setErrorServer,
      });
      if (localStorage.getItem('resume')) {
        router.push('/documents');
      }
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

          <section className="section document">
            {user ? (
              <div className="container">
                <Tabs />
                <div className={styles.resume}>
                  <h2 className="subtitle">Створити резюме</h2>

                  {router.query.id === '1' && (
                    <div className={styles.content}>
                      <form onSubmit={handleSubmit(onSubmitCreateResume)} className={styles.form}>
                        <div className={styles.item}>
                          <div className="input">
                            <label className={styles.input__title}>Ваше ім'я та прізвище</label>
                            <input
                              {...register('name')}
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Ім’я"
                              type="text"
                            />
                            <input
                              {...register('lastname')}
                              value={lastname}
                              onChange={(e) => setLastname(e.target.value)}
                              placeholder="Прізвище"
                              type="text"
                            />
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>Звідки ви</label>
                            <input
                              {...register('city')}
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              type="text"
                              placeholder="Місто"
                            />
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>
                              Посада, на якій ви хочете працювати
                            </label>
                            <input
                              {...register('position')}
                              value={position}
                              onChange={(e) => setPosition(e.target.value)}
                              placeholder="Фронтенд"
                              type="text"
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
                        onSubmit={handleSubmit(onSubmitCreateResume)}
                        className={`${styles.form} ${styles.form__flex}`}>
                        <div className={styles.item}>
                          <div className="input">
                            <label className={styles.input__title}>Освіта</label>
                            <input
                              {...register('education')}
                              value={education}
                              onChange={(e) => setEducation(e.target.value)}
                              type="text"
                            />
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>Напишіть трохи про себе</label>
                            <textarea
                              {...register('aboutme')}
                              value={aboutme}
                              onChange={(e) => setAboutme(e.target.value)}
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
                            <label className={styles.input__title}>Навички</label>
                            <div className="skills skills__resume">
                              <div onClick={addSkills}>
                                <input
                                  className="input__item"
                                  onKeyDown={addSkillsKey}
                                  type="button"
                                />
                              </div>
                              <div className="item">
                                {skills.map((item) => (
                                  <SkillsItem
                                    key={item.id}
                                    item={item}
                                    skills={skills}
                                    setSkills={setSkills}
                                    addSkills={addSkillsKey}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="input">
                            <label className={styles.input__title}>Зарплата $</label>
                            <input
                              {...register('salary')}
                              value={salary}
                              onChange={(e) => setSalary(e.target.value)}
                              type="text"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  )}

                  {router.query.id === '3' && (
                    <div className={styles.content}>
                      <form
                        onSubmit={handleSubmit(onSubmitCreateResume)}
                        style={{ maxWidth: '100%' }}
                        className={styles.form}>
                        <div
                          style={{
                            maxWidth: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            overflowX: 'auto',
                            padding: '0px 1px',
                          }}
                          className={styles.item}>
                          {experienceList.map((item) => (
                            <ExperienceItem
                              key={item.id}
                              experienceList={experienceList}
                              item={item}
                              setExperienceList={setExperienceList}
                            />
                          ))}
                          <div onClick={addExperience}>
                            <CreateItem
                              link={router.asPath}
                              icon={addJob}
                              name="Добавити нове місце роботи"
                            />
                          </div>
                        </div>
                        <Button
                          click={() =>
                            router.push(router.pathname, router.pathname.replace('[id]', '4'))
                          }
                          className="button"
                          type="submit">
                          Дальше
                        </Button>
                      </form>
                    </div>
                  )}

                  {router.query.id === '4' && (
                    <div className={`${styles.content} ${styles.content__last}`}>
                      <form onSubmit={handleSubmit(onSubmitCreateResume)} className={styles.form}>
                        <div className={styles.item}>
                          <div className={`input ${styles.input__last}`}>
                            <label className={styles.input__title}>Контакти</label>
                            <div>
                              <input
                                {...register('phone')}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Телефон"
                                type="tel"
                                required
                              />
                              <input
                                {...register('telegram')}
                                value={telegram}
                                onChange={(e) => setTelegram(e.target.value)}
                                placeholder="Телеграм"
                                type="text"
                              />
                              <input
                                {...register('linkedin')}
                                value={linkedin}
                                onChange={(e) => setLinkedin(e.target.value)}
                                placeholder="Профіль в LinkedIn"
                                type="text"
                              />
                              <input
                                {...register('github')}
                                value={github}
                                onChange={(e) => setGithub(e.target.value)}
                                placeholder="GitHub"
                                type="text"
                              />
                              <input
                                {...register('portfolio')}
                                value={portfolio}
                                onChange={(e) => setPortfolio(e.target.value)}
                                placeholder="Портфоліо"
                                type="text"
                              />
                            </div>
                          </div>
                          <Button
                            click={() => setDone(true)}
                            disabled={!isValid && !isDirty}
                            className="button"
                            type="submit">
                            Створити
                          </Button>
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