import React, { FC } from 'react';

import styles from '@/styles/components/SkillsItem.module.scss';

interface SkillsItemProps {
  skills: {
    id: string;
    name: string;
  }[];
  item: {
    id: string;
    name: string;
  };
  setSkills: (
    item: {
      id: string;
      name: string;
    }[],
  ) => void;
  addSkills: (e: { preventDefault: () => void; key: string }) => void;
}

export const SkillsItem: FC<SkillsItemProps> = ({ skills, setSkills, item, addSkills }) => {
  const [skillsName, setSkillsName] = React.useState(item.name || '');

  React.useEffect(() => {
    if (skillsName || item.name) {
      const newSkills = [...skills];

      const index = newSkills.findIndex((index) => index.id === item.id);

      const newFormSkills = {
        id: item.id,
        name: skillsName,
      };

      newSkills.splice(index, 1, newFormSkills);
      setSkills(newSkills);
    }
  }, [skillsName, item.name]);

  const handleClickRemove = () => {
    setSkills(skills.filter((filter) => filter.id !== item.id));
  };

  return (
    <div className={`${styles.item} input`}>
      <input
        type="text"
        onKeyDown={addSkills}
        value={skillsName}
        onChange={(e) => setSkillsName(e.target.value)}
      />
      <div onClick={handleClickRemove} className={styles.delete}></div>
    </div>
  );
};
