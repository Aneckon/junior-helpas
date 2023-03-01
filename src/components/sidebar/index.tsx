import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { UserProps } from '../types';
import { Loader } from '../loader';
import { logout } from '@/pages/api/auth';

import styles from '@/styles/Sidebar.module.scss';

import logo from '@/assets/logo.svg';
import userAvatar from '@/assets/user.svg';

interface SidebarProps {
  user: UserProps | null;
}

export const Sidebar: FC<SidebarProps> = ({ user }) => {
  const router = useRouter();

  const [menu, setMenu] = React.useState(false);

  const handleMenuOpen = () => {
    setMenu(!menu);
  };

  const handleLogout = () => {
    logout();
    // console.log(JSON.parse(localStorage.getItem('token') || '').refreshToken);
  };

  return (
    <div className={styles.sidebar}>
      <Image onClick={handleMenuOpen} src={logo} alt="logo" />
      <nav className={menu ? styles.menu__active : ''}>
        <ul>
          <li>
            <Link className={router.asPath === '/' ? styles.active : ''} href="/">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24.8 29H5.2C2.88041 29 1 27.2104 1 25.0027V13.7609C1 12.2238 1.69731 10.7615 2.91295 9.74946L12.2347 1.98867C13.8181 0.670437 16.1819 0.670451 17.7653 1.98867L27.087 9.74946C28.3027 10.7615 29 12.2238 29 13.7609V25.0027C29 27.2104 27.1197 29 24.8 29Z"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8.6781 18.5362C9.24661 19.6743 10.1426 20.6355 11.2621 21.3086C12.3816 21.9814 13.6787 22.3384 15.0028 22.3379C16.3268 22.3373 17.6236 21.9794 18.7425 21.3058C19.8615 20.6319 20.7567 19.6699 21.3243 18.5315"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Головна</p>
            </Link>
          </li>
          <li>
            <Link href="/create">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 4.11111C1 2.39289 2.567 1 4.5 1H20.5503C21.4785 1 22.3687 1.32777 23.0252 1.91123L27.9748 6.31099C28.6313 6.89445 29 7.68576 29 8.51089V25.8889C29 27.6072 27.433 29 25.5 29H4.5C2.567 29 1 27.6072 1 25.8889V4.11111Z"
                  stroke="#0C0310"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M20.25 2.55554V5.66665C20.25 7.38487 21.817 8.77776 23.75 8.77776H27.25"
                  stroke="#0C0310"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M15 10.3334V19.6667"
                  stroke="#0C0310"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path d="M9.75 15H20.25" stroke="#0C0310" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p>Створити документ</p>
            </Link>
          </li>
          <li>
            <Link href="/vacantions">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 7.48837C0 3.35265 3.69652 0 8.25641 0H19.7436C24.3034 0 28 3.35265 28 7.48837V20.5116C28 24.6473 24.3034 28 19.7436 28H8.25641C3.69652 28 0 24.6473 0 20.5116V7.48837ZM8.25641 1.95349C4.88606 1.95349 2.15385 4.43154 2.15385 7.48837V20.5116C2.15385 23.5684 4.88606 26.0465 8.25641 26.0465H19.7436C23.1139 26.0465 25.8462 23.5684 25.8462 20.5116V7.48837C25.8462 4.43154 23.1139 1.95349 19.7436 1.95349H8.25641Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.17947 9.05142C7.17947 8.51197 7.66163 8.07468 8.2564 8.07468H19.7436C20.3383 8.07468 20.8205 8.51197 20.8205 9.05142C20.8205 9.59086 20.3383 10.0282 19.7436 10.0282H8.2564C7.66163 10.0282 7.17947 9.59086 7.17947 9.05142Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.17947 14.2607C7.17947 13.7213 7.66163 13.284 8.2564 13.284H19.7436C20.3383 13.284 20.8205 13.7213 20.8205 14.2607C20.8205 14.8002 20.3383 15.2375 19.7436 15.2375H8.2564C7.66163 15.2375 7.17947 14.8002 7.17947 14.2607Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.61539 19.47C8.61539 18.9306 9.09755 18.4933 9.69231 18.4933H18.3077C18.9024 18.4933 19.3846 18.9306 19.3846 19.47C19.3846 20.0095 18.9024 20.4468 18.3077 20.4468H9.69231C9.09755 20.4468 8.61539 20.0095 8.61539 19.47Z"
                  fill="black"
                />
              </svg>
              <p>Ваканції</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li onClick={handleLogout}>
            <Link href="/welcome">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M27.8668 12.7936L25.4281 8.04297C25.201 7.59944 24.6102 7.40476 24.1124 7.60605C23.6125 7.80733 23.3919 8.33014 23.6194 8.77235L25.2915 12.0303H18.831C18.2824 12.0303 17.8372 12.425 17.8372 12.9112C17.8372 13.3975 18.2824 13.7921 18.831 13.7921H25.6333L23.6184 17.7174C23.3909 18.1596 23.6115 18.6824 24.1114 18.8837C24.245 18.9369 24.3846 18.9629 24.5223 18.9629C24.8999 18.9629 25.2607 18.7709 25.4271 18.4467L27.8812 13.6657C27.9329 13.5794 27.9667 13.4864 27.9836 13.3904C28.0268 13.1861 27.9836 12.9742 27.8668 12.7936Z"
                  fill="black"
                />
                <path
                  d="M22.3598 19.5153C21.8113 19.5153 21.3661 19.9095 21.3661 20.3961V23.9224H15.9003V5.28535C15.9003 4.5269 15.4978 3.8539 14.6854 3.61385L8.92058 1.90008H21.3661V6.30189C21.3661 6.78815 21.8113 7.18278 22.3598 7.18278C22.9084 7.18278 23.3536 6.78815 23.3536 6.30189V1.01655C23.3536 0.530296 23.3551 0.1383 22.806 0.1383H2.99423L2.83274 0.0902913C2.62753 0.0295098 2.4879 0 2.27673 0C1.86481 0 1.31277 0.113635 0.96992 0.332536C0.451668 0.663751 0 1.19537 0 1.76178V22.7147C0 23.4727 0.692161 24.1461 1.50357 24.3861L13.5014 27.9097C13.7066 27.97 13.955 28 14.1657 28C14.5781 28 14.8589 27.8864 15.2012 27.667C15.7195 27.3358 15.9003 26.8042 15.9003 26.2382V25.6841H22.806C23.3546 25.6841 23.3536 25.2869 23.3536 24.8006V20.3961C23.3536 19.9095 22.9089 19.5153 22.3598 19.5153ZM13.9128 26.2382L1.98754 22.7147V1.90008V1.86529L2.09536 1.79526L13.9128 5.28535V26.2382Z"
                  fill="black"
                />
                <path
                  d="M11.9252 19.5153C12.2 19.5153 12.4221 19.3184 12.4221 19.0748V16.4321C12.4221 16.1886 12.2 15.9917 11.9252 15.9917C11.6505 15.9917 11.4284 16.1886 11.4284 16.4321V19.0748C11.4284 19.3184 11.6505 19.5153 11.9252 19.5153Z"
                  fill="black"
                />
              </svg>
              <p>Вийти</p>
            </Link>
          </li>
          <li>
            {user ? (
              <Link href="/profile">
                <Image
                  width={100}
                  height={100}
                  src={
                    user?.image === null ? userAvatar : `${process.env.URL}/static/${user?.image}`
                  }
                  alt="user"
                />
                <p>Профіль</p>
              </Link>
            ) : (
              <Loader />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};
