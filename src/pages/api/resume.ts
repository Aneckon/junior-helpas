import axios from 'axios';

import { ResumeProps } from '@/components/types';
import fileDownload from 'js-file-download';

export const createResume = ({ setErrorServer, data }: ResumeProps) => {
  const userImage = JSON.parse(localStorage.getItem('user') || '').image;
  const userId = JSON.parse(localStorage.getItem('token') || '');

  axios
    .post(
      `${process.env.HOST_URL}/user/createresume`,
      {
        userId: userId.userId,
        image: userImage,
        email: JSON.parse(localStorage.getItem('user') || '').email,
        name: data?.name,
        lastname: data?.lastname,
        position: data?.position,
        education: data?.education,
        skills: data?.skills,
        experience: data?.experience,
        city: data?.city,
        aboutme: data?.aboutme,
        telegram: data?.telegram,
        linkedin: data?.linkedin,
        github: data?.github,
        portfolio: data?.portfolio,
        phone: data?.phone,
        salary: data?.salary,
      },
      { responseType: 'blob' },
    )
    .then((response) => {
      fileDownload(response.data, 'resume.pdf');
      localStorage.removeItem('resume');
    })
    .catch((error) => {
      setErrorServer(error.response?.data);
    });
};

export const getResume = (setErrorServer: (data: void) => void) => {
  const userId = JSON.parse(localStorage.getItem('token') || '');

  axios
    .get(`${process.env.HOST_URL}/user/listresume/${userId.userId}`)
    .then((response) => {
      if (response.data.length) {
        localStorage.setItem('resume', JSON.stringify(response.data));
      }
    })
    .catch((error) => {
      setErrorServer(error.response?.data);
    });
};
