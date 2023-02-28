import React from 'react';
import Head from 'next/head';

import { Checklist, Loader, Provider, Reviews, Sidebar, WhyUs } from '@/components';

import styles from '@/styles/Home.module.scss';

export default function Home() {
  const [user, setUser] = React.useState<any>(null);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Provider user={user} setUser={setUser}> */}
        <main className="main">
          <Sidebar />

          <section className={styles.home}>
           {/* {user ? (  */}
              <div className="container">
                <h1 className="title">
                  Вітаю  {/* <span>{user.nickname}</span>*/}
                </h1>
                <div className={styles.content}>
                  <Checklist />
                  <div className={styles.content__left}>
                    <Reviews />
                    <WhyUs />
                  </div>
                </div>
              </div>
            {/* ) : (
              <Loader />
            )} */}
          </section>
        </main>
      {/* </Provider> */}
    </>
  );
}
