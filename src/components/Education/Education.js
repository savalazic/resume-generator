import React, { useContext } from 'react';
import ResumeContext from '../../ResumeContext';

import styles from './Education.module.css';

const Education = () => {
  const { education } = useContext(ResumeContext);

  return (
    <div>
      <h2>Education</h2>
      <div>{education.school}</div>
    </div>
  );
};

export default Education;
