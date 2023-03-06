import React from 'react';
import { useRouter } from 'next/router';

import { profile } from '@/pages/api/profile';
import { UserProps } from '../types';

interface ProviderProps {
  user: UserProps | null;
  setUser: (user: UserProps | null) => void;
  children: JSX.Element;
}

export const Provider = ({ user, setUser, children }: ProviderProps) => {
  const router = useRouter();

  const [errorServer, setErrorServer] = React.useState<any>(null);

  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/welcome');
    }
    if (!localStorage.getItem('user')) {
      profile({ setErrorServer });
    }
    if (user === null) {
      setTimeout(() => {
        setUser(
          localStorage.getItem('user')?.length
            ? JSON.parse(localStorage.getItem('user') || '')
            : null,
        );
      }, 100);
    }
  }, [router, user]);

  return <div>{children}</div>;
};
