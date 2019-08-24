import React from 'react';

import styles from './Chip.module.css';

const Chip = ({ children, className, ...rest }) => {
  return (
    <span className={[styles.Chip, className].join(' ')} {...rest}>
      {children}
    </span>
  );
};

export default Chip;
