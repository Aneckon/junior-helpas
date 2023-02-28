import React from 'react';
import { useRouter } from 'next/router';

import { profile } from '@/pages/api/profile';

interface ProviderProps {
  user: void;
  setUser: (user: void) => void;
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
      setUser(JSON.parse(localStorage.getItem('user') || ''));
    }
  }, [router, user]);

  return <div>{children}</div>;
};
