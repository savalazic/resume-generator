import React, { useContext } from 'react';
import ResumeContext from '../../ResumeContext';

import styles from './Languages.module.css';

const Languages = () => {
  const { languages } = useContext(ResumeContext);

  return (
    <div>
      <h2>Languages</h2>
      <div>
        {languages.map(l => (
          <div key={l.language}>{l.language}</div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
