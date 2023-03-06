import axios from 'axios';

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
      setResponseServer(response.data);
    })
    .catch((error) => {
      setErrorServer(error.response?.data);
    });
};

export const logout = () => {
  axios
    .post(`${process.env.HOST_URL}/user/logout`, {
      refreshToken:
        localStorage.getItem('token')?.length &&
        JSON.parse(localStorage.getItem('token') || '').refreshToken,
    })
    .then((response) => {
      if (localStorage.getItem('token')) {
        localStorage.clear();
      }
    });
};
