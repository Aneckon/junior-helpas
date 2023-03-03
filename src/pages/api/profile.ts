import axios from 'axios';

import { ProfileUploadProps } from '@/components/types';

interface ProfileProps {
  setErrorServer: (err: null) => void;
}

export const profile = ({ setErrorServer }: ProfileProps) => {
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

export const profileUpload = ({ image, data, id, setErrorServer, setUser }: ProfileUploadProps) => {
  axios
    .put(
      `${process.env.HOST_URL}/user/addInfo`,
      {
        id: id,
        name: data?.name,
        lastname: data?.lastname,
        position: data?.position,
        education: data?.education,
        skills: data?.skills,
        city: data?.city,
        aboutme: data?.aboutme,
        telegram: data?.telegram,
        linkedin: data?.linkedin,
        github: data?.github,
        portfolio: data?.portfolio,
        phone: data?.phone,
        salary: data?.salary,
        image: image,
      },
    )
    .then((response) => {
      localStorage.removeItem('user');
      setUser(null);
    })
    .catch((error) => {
      setErrorServer(error.response);
    });
};
