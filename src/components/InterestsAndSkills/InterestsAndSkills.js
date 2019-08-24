import React, { useContext } from 'react';

import ResumeContext from '../../ResumeContext';
import Chip from '../../ui/Chip';

import styles from './InterestsAndSkills.module.css';

const InterestsAndSkills = () => {
  const { interestsAndSkills } = useContext(ResumeContext);

  return (
    <div>
      <h2>Interests & Skills</h2>
      <div>
        {interestsAndSkills.map(i => (
          <Chip key={i}>{i}</Chip>
        ))}
      </div>
    </div>
  );
};

export default InterestsAndSkills;
