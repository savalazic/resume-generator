import React, { useContext } from 'react';
import ResumeContext from '../../ResumeContext';

import styles from './General.module.css';

const renderSocialLink = (key, value) => {
  switch (key) {
    case 'email':
      return (
        <a
          href={`mailto:${value.link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {value.label}
        </a>
      );
    default:
      return (
        <a href={value.link} target="_blank" rel="noopener noreferrer">
          {value.label}
        </a>
      );
  }
};

const General = () => {
  const { general, social } = useContext(ResumeContext);

  return (
    <section className={styles.General}>
      <div className={styles.General__info}>
        <h1>{general.name}</h1>
        <h2>{general.title}</h2>
        <p>{general.description}</p>
        <p>
          <strong>Location:</strong> {general.location}
        </p>
        <p>
          <strong>Date of birth:</strong> {general.birth}
        </p>
      </div>
      <div className={styles.General__social}>
        {Object.entries(social).map(([key, value]) => (
          <div key={key}>{renderSocialLink(key, value)}</div>
        ))}
      </div>
    </section>
  );
};

export default General;
