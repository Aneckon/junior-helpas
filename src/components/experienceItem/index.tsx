import React, { FC } from 'react';

import styles from '@/styles/page/CreateResume.module.scss';

interface ExperienceItemProps {
  experienceList: {
    id: string;
    companyName: string;
    companyPosition: string;
    companyDescriptions: string;
  }[];
  item: { id: string; companyName: string; companyPosition: string; companyDescriptions: string };
  setExperienceList: (
    data: {
      id: string;
      companyName: string;
      companyPosition: string;
      companyDescriptions: string;
    }[],
  ) => void;
}

export const ExperienceItem: FC<ExperienceItemProps> = ({
  item,
  setExperienceList,
  experienceList
}) => {
  const [companyName, setCompanyName] = React.useState('');
  const [companyPosition, setCompanyPosition] = React.useState('');
  const [companyDescriptions, setCompanyDescriptions] = React.useState('');

  React.useEffect(() => {
    const newExperienceList = [...experienceList];

    const index = newExperienceList.findIndex((index) => index.id === item.id);

    const newFormExperienceList = {
      id: item.id,
      companyName,
      companyPosition,
      companyDescriptions,
    };

    newExperienceList.splice(index, 1, newFormExperienceList);
    setExperienceList(newExperienceList);
  }, [companyName, companyPosition, companyDescriptions]);

  return (
    <div
      style={{
        flex: '300px 0 0',
        margin: '0px 20px 10px 1px',
      }}
      className="input">
      <label className={styles.input__title}>Досвід роботи</label>
      <input
        value={item.companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        type="text"
        placeholder="Назва компанії в якій працювали"
      />
      <input
        value={item.companyPosition}
        onChange={(e) => setCompanyPosition(e.target.value)}
        type="text"
        placeholder="Посада"
      />
      <textarea
        value={item.companyDescriptions}
        onChange={(e) => setCompanyDescriptions(e.target.value)}
        placeholder="Обовязки на роботі"
      />
    </div>
  );
};
