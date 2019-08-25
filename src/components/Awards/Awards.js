import React, { useContext } from 'react';
import ResumeContext from '../../ResumeContext';

import styles from './Awards.module.css';

const Awards = () => {
  const { awards } = useContext(ResumeContext);

  return (
    <div className={styles.Awards}>
      <h2>Awards</h2>
      <div>
        {awards.map(a => (
          <div key={a.title} className={styles.Awards__item}>
            <strong>{a.title}</strong>
            <p>- {a.date}</p>
            <p>- {a.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
