import React, { useContext } from 'react';
import ResumeContext from '../../ResumeContext';

import styles from './Certificates.module.css';

const Certificates = () => {
  const { certificates } = useContext(ResumeContext);

  return (
    <div>
      <h2>Certificates</h2>
      <div>
        {certificates.map(c => (
          <div key={c}>{c}</div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
