import React, { useContext } from 'react';
import ResumeContext from '../../ResumeContext';

import styles from './SideProjects.module.css';

const SideProjects = () => {
  const { sideProjects } = useContext(ResumeContext);

  return (
    <div className={styles.SideProjects}>
      <h2>Side Projects</h2>
      <div>
        {sideProjects.map(s => (
          <div key={s.title} className={styles.SideProjects__item}>
            <div className={styles['SideProjects__item-header']}>
              <h3>
                {s.title} {s.link && <a href={s.link}>{s.link}</a>}
              </h3>
              <p>{s.date}</p>
            </div>
            <p>- {s.description}</p>
            <p>
              <strong>Stack:</strong> {s.stack}
            </p>
            <p>
              <strong>Responsibilities:</strong> {s.responsibilities}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideProjects;
