import React, { useContext } from 'react';
import ResumeContext from '../../ResumeContext';

import styles from './Work.module.css';

const Work = () => {
  const { work } = useContext(ResumeContext);

  return (
    <div className={styles.Work}>
      <h2>Work Expeirence</h2>
      <div>
        {work.map(w => (
          <div key={w.company}>
            <h3>{w.company}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
