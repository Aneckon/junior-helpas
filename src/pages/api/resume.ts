import axios from 'axios';

import downloadjs from 'downloadjs';

import { ResumeProps } from '@/components/types';

export const createResume = ({ setErrorServer, resumeData }: ResumeProps) => {
  const userImage = JSON.parse(localStorage.getItem('user') || '').image;
  axios
    .post(
      `${process.env.HOST_URL}/user/createresume`,
      {
        image: userImage,
        email: JSON.parse(localStorage.getItem('user') || '').email,
        name: resumeData?.name,
        lastname: resumeData?.lastname,
        position: resumeData?.position,
        education: resumeData?.education,
        skills: resumeData?.skills,
        experience: resumeData?.experience,
        city: resumeData?.city,
        aboutme: resumeData?.aboutme,
        telegram: resumeData?.telegram,
        linkedin: resumeData?.linkedin,
        github: resumeData?.github,
        portfolio: resumeData?.portfolio,
        phone: resumeData?.phone,
        salary: resumeData?.salary,
      },
      { responseType: 'blob' },
    )
    .then((response) => {
      downloadjs(response.data, 'resume.pdf', 'text/plain');
      // localStorage.setItem('resume', JSON.stringify(response.data));
      console.log(response);
    })
    .catch((error) => {
      setErrorServer(error.response?.data);
    });
};
