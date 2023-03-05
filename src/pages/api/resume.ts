import axios from 'axios';

import downloadjs from 'downloadjs';

import { ResumeProps } from '@/components/types';

export const createResume = ({ setErrorServer, data }: ResumeProps) => {
  const userImage = JSON.parse(localStorage.getItem('user') || '').image;
  axios
    .post(
      `${process.env.HOST_URL}/user/createresume`,
      {
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
      downloadjs(response.data, 'resume.pdf', 'text/plain');
      localStorage.setItem('resume', JSON.stringify(response.config.data));
    })
    .catch((error) => {
      setErrorServer(error.response?.data);
    });
};
