export interface UserProps {
  nickname: string;
  id: number;
  lastname: string;
  position: string;
  education: string;
  skills: { id: string; name: string }[] | undefined;
  name: string;
  city: string;
  aboutme: string;
  telegram: string;
  linkedin: string;
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
    skills: { id: string; name: string }[] | undefined;
    name: string;
    city: string;
    aboutme: string;
    telegram: string;
    linkedin: string;
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

export interface InputProgileProps {
  nickname: string;
  id: number;
  lastname: string;
  position: string;
  education: string;
  skills: { id: string; name: string }[] | undefined;
  name: string;
  city: string;
  aboutme: string;
  telegram: string;
  linkedin: string;
  github: string;
  portfolio: string;
  phone: string;
  salary: string;
}

export interface InputResumeProps {
  name: string;
  lastname: string;
  city: string;
  position: string;

  education: string;
  skills: { id: string; name: string }[] | undefined;
  aboutme: string;
  salary: string;

  experience:
    | { id: string; companyName: string; companyPosition: string; companyDescriptions: string }[]
    | undefined;

  phone: string;
  telegram: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface ResumeProps {
  resumeData?: {
    name: string;
    lastname: string;
    city: string;
    position: string;

    education: string;
    skills: { id: string; name: string }[] | undefined;
    aboutme: string;
    salary: string;

    experience:
      | { id: string; companyName: string; companyPosition: string; companyDescriptions: string }[]
      | undefined;

    phone: string;
    telegram: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
  setErrorServer: (err: null) => void;
  user: UserProps | null;
}
