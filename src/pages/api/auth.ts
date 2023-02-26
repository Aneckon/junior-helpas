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
      if (response) {
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
        setResponseServer(response.data.refreshToken);
      }
    })
    .catch((error) => {
      setErrorServer(error.response.data);
    });
};
