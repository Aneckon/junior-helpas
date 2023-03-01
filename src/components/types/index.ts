export interface UserProps {
  nickname: string;
  id: number;
  lastname: string;
  position: string;
  education: string;
  skills: { name: string };
  name: string;
  city: string;
  aboutme: string;
  telegram: string;
  linkedin: string;
  experience?: string;
  github: string;
  portfolio: string;
  phone: string;
  salary: string;
  image: string;
}

export interface ProfileUploadProps {
  data?: {
    lastname: string;
    position: string;
    education: string;
    skills: { name: string };
    name: string;
    city: string;
    aboutme: string;
    telegram: string;
    linkedin: string;
    experience?: string;
    github: string;
    portfolio: string;
    phone: string;
    salary: string;
  };
  id: number;
  image?: File;
  setErrorServer: (err: null) => void;
  setUser: (user: null) => void;
}

export interface InputProps {
  nickname: string;
  id: number;
  lastname: string;
  position: string;
  education: string;
  skills: { name: string };
  name: string;
  city: string;
  aboutme: string;
  telegram: string;
  linkedin: string;
  experience?: string;
  github: string;
  portfolio: string;
  phone: string;
  salary: string;
}
