import React, { useContext } from 'react';
import ResumeContext from '../../ResumeContext';

import styles from './Skills.module.css';

import Chip from '../../ui/Chip';

const Skills = () => {
  const { skills } = useContext(ResumeContext);

  return (
    <div className={styles.Skills}>
      <h3>Skills</h3>
      <div className={styles.Skills__list}>
        {skills.map(s => (
          <Chip className={styles.Skills__chip} key={s}>
            {s}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default Skills;
