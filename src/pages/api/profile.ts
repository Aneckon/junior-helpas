import axios from 'axios';

interface profileProps {
  setErrorServer: (err: null) => void;
}

export const profile = ({ setErrorServer }: profileProps) => {
  const userId = JSON.parse(localStorage.getItem('token') || '');

  axios
    .get(`${process.env.HOST_URL}/user/profile/${userId.userId}`)
    .then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data));
    })
    .catch((error) => {
      setErrorServer(error.response);
    });
};
