import axios from 'axios';

import { VacancyProps } from '@/components/types';

export const createVacancy = ({ setErrorServer, data }: VacancyProps) => {
  axios
    .post(`${process.env.HOST_URL}/vacation/create`, {
      id: data?.id,
      userId: data?.userId,
      nameCompany: data?.nameCompany,
      descriptionsCompany: data?.descriptionsCompany,
      specialization: data?.specialization,
      experience: data?.experience,
      salary: data?.salary,
      briefDescription: data?.briefDescription,
      detailedInformation: data?.detailedInformation,
      city: data?.city,
      country: data?.country,
      englishLevel: data?.englishLevel,
      phone: data?.phone,
      telegram: data?.telegram,
      linkedin: data?.linkedin,
    })
    .then((response) => {
      localStorage.removeItem('vacancy');
    })
    .catch((error) => {
      setErrorServer(error.response?.data);
    });
};

export const getVacancyItem = () => {
  const userId = JSON.parse(localStorage.getItem('token') || '');

  axios
    .get(`${process.env.HOST_URL}/vacation/item/${userId.userId}`)
    .then((response) => {
      localStorage.setItem('vacancy', JSON.stringify(response.data));
    })
    .catch((error) => {});
};

export const getVacancyEditItem = (id: string) => {
  axios
    .get(`${process.env.HOST_URL}/vacation/item-edit/${id}`)
    .then((response) => {
      localStorage.setItem('vacancy-edit', JSON.stringify(response.data));
    })
    .catch((error) => {});
};

export const removeVacancyItem = (id: string) => {
  axios
    .delete(`${process.env.HOST_URL}/vacation/delete/${id}`)
    .then((response) => {
      localStorage.removeItem('vacancy');
    })
    .catch((error) => {});
};

export const editVacancy = ({ data, setErrorServer }: VacancyProps) => {
  axios
    .put(`${process.env.HOST_URL}/vacation/edit/${data?.id}`, {
      id: data?.id,
      userId: data?.userId,
      nameCompany: data?.nameCompany,
      descriptionsCompany: data?.descriptionsCompany,
      specialization: data?.specialization,
      experience: data?.experience,
      salary: data?.salary,
      briefDescription: data?.briefDescription,
      detailedInformation: data?.detailedInformation,
      city: data?.city,
      country: data?.country,
      englishLevel: data?.englishLevel,
      phone: data?.phone,
      telegram: data?.telegram,
      linkedin: data?.linkedin,
    })
    .then((response) => {
      localStorage.removeItem('vacancy-edit');
      localStorage.removeItem('vacancy');
    })
    .catch((error) => {
      setErrorServer(error.response?.data);
    });
};
