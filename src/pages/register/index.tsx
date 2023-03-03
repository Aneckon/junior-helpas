import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';

import { useRouter } from 'next/router';

import { Button } from '@/components';
import { auth } from '@/pages/api/auth';

import styles from '@/styles/page/Auth.module.scss';

import logo from '@/assets/logo.svg';

type Inputs = {
  email: string;
  nickname: string;
  password: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const [errorServer, setErrorServer] = React.useState<any>(null);
  const [responseServer, setResponseServer] = React.useState(null);

  const onSubmitRegister: SubmitHandler<Inputs> = (data) => {
    auth({ link: '/register', setErrorServer, data, setResponseServer });
  };

  React.useEffect(() => {
    if (responseServer !== null) {
      localStorage.setItem('token', JSON.stringify(responseServer));
      setTimeout(() => {
        router.push('/');
      }, 1500);
    }
    if (localStorage.getItem('token')) {
      router.push('/');
    }
  }, [responseServer, router]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.auth}>
        <div className="panel">
          <Image src={logo} alt="logo" />

          <h1>Реєстрація</h1>

          <form onSubmit={handleSubmit(onSubmitRegister)}>
            <div className="input">
              <label>Емайл</label>
              <input
                {...register('email', { required: true })}
                placeholder="Введіть емайл"
                type="email"
              />
              {errors.email && <span>Введіть емайл</span>}
              {errorServer && <span>{errorServer.message}</span>}
            </div>
            <div className="input">
              <label>Логін</label>
              <input
                {...register('nickname', { required: true })}
                placeholder="Введіть логін"
                type="text"
              />
              {errors.nickname && <span>Введіть логін</span>}
            </div>
            <div className="input">
              <label>Пароль</label>
              <input
                {...register('password', { required: true })}
                placeholder="Введіть пароль"
                type="password"
              />
              {errors.password && <span>Введіть пароль</span>}
            </div>
            <div className={styles.link}>
              <Link href="/login">У вас вже є акаунт</Link>
            </div>
            <Button type="submit" className="button">
              Реєстрація
            </Button>
          </form>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </main>
    </>
  );
}
