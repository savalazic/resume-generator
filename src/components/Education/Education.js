import React, { useContext } from 'react';
import ResumeContext from '../../ResumeContext';

import styles from './Education.module.css';

const Education = () => {
  const { education } = useContext(ResumeContext);

  return (
    <div className={styles.Education}>
      <h2>Education</h2>
      <strong>
        {education.field}, {education.degree} @ {education.school}
      </strong>
      <p>- {education.date}</p>
    </div>
  );
};

export default Education;
