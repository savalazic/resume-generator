import React, { useContext } from 'react';
import ResumeContext from '../../ResumeContext';

import styles from './SideProjects.module.css';

const SideProjects = () => {
  const { sideProjects } = useContext(ResumeContext);

  return (
    <div>
      <h2>SideProjects</h2>
      <div>
        {sideProjects.map(s => (
          <div key={s.title}>{s.title}</div>
        ))}
      </div>
    </div>
  );
};

export default SideProjects;
