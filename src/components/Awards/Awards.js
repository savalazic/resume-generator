import React, { useContext } from 'react';
import ResumeContext from '../../ResumeContext';

import styles from './Awards.module.css';

const Awards = () => {
  const { awards } = useContext(ResumeContext);

  return (
    <div>
      <h2>Awards</h2>
      <div>
        {awards.map(a => (
          <div key={a.title}>{a.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
