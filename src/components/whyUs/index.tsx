import React from 'react';

import styles from '@/styles/components/WhyUs.module.scss';

export const WhyUs = () => {
  return (
    <div className={styles.whyUs}>
      <h2 className="subtitle">Чому саме ми</h2>

      <ul>
        <li>
          <p>Ми пропонуємо одні ваканції Junior програмістів</p>
        </li>
        <li>
          <p>Ви можете створити власне ризюме на нашому сайті</p>
        </li>
        <li>
          <p>В нас є власний чек лист, та різна додаткова інформація для пошуку роботи</p>
        </li>
      </ul>
    </div>
  );
};
