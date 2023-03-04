import React from 'react';
import Head from 'next/head';

import uuid from 'react-uuid';

import { useForm, SubmitHandler } from 'react-hook-form';

import { Button, Loader, Provider, Sidebar, SkillsItem, UploadAvatar } from '@/components';
import { profileUpload } from '@/pages/api/profile';

import { InputProgileProps, UserProps } from '@/components/types';

import styles from '@/styles/page/Profile.module.scss';

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<InputProgileProps>({
    mode: 'onChange',
  });

  const [user, setUser] = React.useState<UserProps | null>(null);

  const [position, setPosition] = React.useState('');
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

  const [errorServer, setErrorServer] = React.useState<any>(null);

  const onSubmitUploadProfile: SubmitHandler<InputProgileProps> = (data) => {
    if (
      user?.position !== position ||
      user?.education !== education ||
      user?.skills !== skills ||
      user?.name !== name ||
      user?.lastname !== lastname ||
      user?.city !== city ||
      user?.aboutme !== aboutme ||
      user?.phone !== phone ||
      user?.telegram !== telegram ||
      user?.linkedin !== linkedin ||
      user?.github !== github ||
      user?.portfolio !== portfolio ||
      user?.salary !== salary
    ) {
      profileUpload({
        id: JSON.parse(localStorage.getItem('user') || '').id,
        data: {
          name: name,
          lastname: lastname,
          position: position,
          education: education,
          skills: skills,
          city: city,
          aboutme: aboutme,
          telegram: telegram,
          linkedin: linkedin,
          github: github,
          portfolio: portfolio,
          phone: phone,
          salary: salary,
        },
        setErrorServer,
        setUser,
      });
    }
  };

  React.useEffect(() => {
    if (user) {
      setPosition(user.position ?? '');
      setEducation(user.education ?? '');
      setSkills(user.skills ?? [{ id: uuid(), name: '' }]);
      setName(user.name ?? '');
      setLastname(user.lastname ?? '');
      setCity(user.city ?? '');
      setAboutme(user.aboutme ?? '');
      setPhone(user.phone ?? '');
      setTelegram(user.telegram ?? '');
      setLinkedin(user.linkedin ?? '');
      setGithub(user.github ?? '');
      setPortfolio(user.portfolio ?? '');
      setSalary(user.salary ?? '');
    }
  }, [user]);

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
                <h1 className="title">Профіль</h1>
                <form onSubmit={handleSubmit(onSubmitUploadProfile)} className={styles.form}>
                  <div className={styles.item}>
                    <UploadAvatar user={user} setUser={setUser} />
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
                      <label className={styles.input__title}>Навички</label>
                      <div className="skills">
                        <div onClick={addSkills}>
                          <input className="input__item" onKeyDown={addSkillsKey} type="button" />
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

                    <Button disabled={!isDirty && !isValid} className="button" type="submit">
                      Зберегти
                    </Button>
                  </div>
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
                      <label className={styles.input__title}>Напишіть трохи про себе</label>
                      <textarea
                        {...register('aboutme')}
                        value={aboutme}
                        onChange={(e) => setAboutme(e.target.value)}
                      />
                    </div>
                  </div>
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
                    <div className="input">
                      <label className={styles.input__title}>Зарплата $</label>
                      <input
                        {...register('salary')}
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        type="text"
                      />
                    </div>
                    <Button
                      disabled={!isDirty && !isValid}
                      className={`button ${styles.button__mobile}`}
                      type="submit">
                      Зберегти
                    </Button>
                  </div>
                </form>
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