import React, { useContext } from 'react';

import ResumeContext from '../../ResumeContext';
import Chip from '../../ui/Chip';

import styles from './InterestsAndSkills.module.css';

const InterestsAndSkills = () => {
  const { interestsAndSkills } = useContext(ResumeContext);

  return (
    <div className={styles.InterestsAndSkills}>
      <h2>Interests & Skills</h2>
      <div className={styles.InterestsAndSkills__list}>
        {interestsAndSkills.map(i => (
          <Chip key={i} className={styles.InterestsAndSkills__chip}>
            {i}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default InterestsAndSkills;
