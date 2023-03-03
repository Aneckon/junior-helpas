import React, { FC } from 'react';

import Image from 'next/image';

import { profileUpload } from '@/pages/api/profile';

import styles from '@/styles/components/UploadAvatar.module.scss';

interface UploadAvatarProps {
  user: { image: string };
  setUser: (user: null) => void;
  link?: string;
}

export const UploadAvatar: FC<UploadAvatarProps> = ({ user, setUser, link }) => {
  const [errorServer, setErrorServer] = React.useState<any>(null);

  const onChangeAddPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      {
        link !== 'createcv'
          ? profileUpload({
              id: JSON.parse(localStorage.getItem('user') || '').id,
              image: e.target.files[0],
              setErrorServer,
              setUser,
            })
          : '';
      }
    }
  };

  return (
    <div className={styles.uploadAvatar}>
      <p className={styles.input__title}>Створити аватарку</p>
      <div className={styles.input}>
        <label htmlFor="file-input">
          {user.image ? (
            <Image
              width="100"
              height="100"
              src={`${process.env.URL}/static/${user.image}`}
              alt={user.image}
            />
          ) : (
            <svg
              width="32"
              height="30"
              viewBox="0 0 32 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.9998 15.879L22.1676 22.242L20.1107 24.3645L17.4535 21.6225V30H14.5462V21.6195L11.8889 24.3645L9.83203 22.242L15.9998 15.879ZM15.9998 3.3324e-08C18.4957 0.000122655 20.9045 0.946671 22.7682 2.65968C24.632 4.37268 25.8207 6.7327 26.1084 9.291C27.9172 9.79998 29.495 10.9487 30.5663 12.5363C31.6375 14.1239 32.134 16.0495 31.969 17.9766C31.8039 19.9036 30.9879 21.7096 29.6634 23.0787C28.3389 24.4479 26.5903 25.2932 24.7231 25.467V22.446C25.392 22.3474 26.0352 22.1123 26.6151 21.7545C27.1951 21.3966 27.7001 20.9231 28.1007 20.3616C28.5014 19.8001 28.7896 19.1619 28.9487 18.4843C29.1077 17.8066 29.1343 17.103 29.0269 16.4146C28.9196 15.7262 28.6804 15.0668 28.3234 14.4748C27.9663 13.8828 27.4986 13.3701 26.9475 12.9667C26.3964 12.5633 25.7729 12.2772 25.1134 12.1251C24.454 11.973 23.7718 11.958 23.1067 12.081C23.3343 10.9873 23.322 9.85496 23.0706 8.76683C22.8193 7.6787 22.3352 6.66238 21.6539 5.79229C20.9726 4.92221 20.1113 4.22041 19.1331 3.73829C18.1549 3.25617 17.0846 3.00595 16.0005 3.00595C14.9165 3.00595 13.8462 3.25617 12.868 3.73829C11.8898 4.22041 11.0285 4.92221 10.3472 5.79229C9.66589 6.66238 9.18182 7.6787 8.93045 8.76683C8.67908 9.85496 8.66677 10.9873 8.89443 12.081C7.56821 11.824 6.19737 12.1212 5.08349 12.9071C3.9696 13.6931 3.20391 14.9035 2.95486 16.272C2.70581 17.6405 2.99379 19.0551 3.75547 20.2045C4.51714 21.3539 5.69011 22.144 7.01633 22.401L7.27798 22.446V25.467C5.41071 25.2935 3.66192 24.4483 2.33725 23.0793C1.01259 21.7102 0.196324 19.9043 0.0311139 17.9772C-0.134096 16.0501 0.362261 14.1244 1.43343 12.5367C2.5046 10.9489 4.08246 9.80008 5.89121 9.291C6.1786 6.73257 7.36724 4.37237 9.23106 2.6593C11.0949 0.94623 13.5039 -0.000205054 15.9998 3.3324e-08V3.3324e-08Z"
                fill="#1E1E1E"
              />
            </svg>
          )}
        </label>
        <input onChange={(e) => onChangeAddPhoto(e)} id="file-input" type="file" />
      </div>
    </div>
  );
};
