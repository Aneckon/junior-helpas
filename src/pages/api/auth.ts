import axios from 'axios';
import { toast } from 'react-toastify';

interface authProps {
  data: { email: string; nickname?: string; password: string };
  link: string;
  setErrorServer: (err: null) => void;
  setResponseServer: (res: null) => void;
}

export const auth = ({ data, link, setResponseServer, setErrorServer }: authProps) => {
  axios
    .post(`${process.env.HOST_URL}/user${link}`, {
      email: data.email,
      nickname: data.nickname,
      password: data.password,
    })
    .then((response) => {
      toast.success(`Успішно ${link === '/register' ? 'зареєструвалися' : 'увійшли'}`, {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setResponseServer(response.data);
    })
    .catch((error) => {
      setErrorServer(error.response?.data);
    });
};

export const logout = () => {
  axios
    .post(`${process.env.HOST_URL}/user/logout`, {
      refreshToken: JSON.parse(localStorage.getItem('token') || '').refreshToken,
    })
    .then((response) => {
      localStorage.clear();
    });
};
