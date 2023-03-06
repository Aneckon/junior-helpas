import axios from 'axios';

import { VacancyProps } from '@/components/types';

export const createVacancy = ({ setErrorServer, data }: VacancyProps) => {
  axios
    .post(`${process.env.HOST_URL}/vacation/create`, {
      id: data?.id,
      userId: data?.userId,
      webSite: data?.webSite,
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
      localStorage.removeItem('vacancy-list-user');
    })
    .catch((error) => {
      setErrorServer(error.response?.data);
    });
};

export const getVacancyListItem = () => {
  const userId = JSON.parse(localStorage.getItem('token') || '')?.userId;

  axios
    .get(`${process.env.HOST_URL}/vacation/list-user/${userId}`)
    .then((response) => {
      localStorage.setItem('vacancy-list-user', JSON.stringify(response.data));
    })
    .catch((error) => {});
};

export const getVacancyItem = (id: string | string[] | undefined) => {
  axios
    .get(`${process.env.HOST_URL}/vacation/item/${id}`)
    .then((response) => {
      localStorage.setItem('vacancy-item', JSON.stringify(response.data));
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
      localStorage.removeItem('vacancy-list-user');
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
      localStorage.removeItem('vacancy-list-user');
      localStorage.removeItem('vacancy-item');
    })
    .catch((error) => {
      setErrorServer(error.response?.data);
    });
};
