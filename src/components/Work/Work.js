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
          <div className={styles.Work__item} key={w.company}>
            <div className={styles.Work__title}>
              <div>
                <h3>
                  {w.title} @ {w.company}
                </h3>
                <p>{w.date}</p>
              </div>

              <div>
                <span>{w.location}</span>
              </div>
            </div>
            <p>
              <strong>Stack:</strong> {w.stack}
            </p>
            {w.projects.length > 0 && (
              <>
                <p>
                  <strong>Projects:</strong>
                </p>
                <ul className={styles.Work__projects}>
                  {w.projects.map(project => (
                    <li key={project.name}>
                      - <strong>{project.name}</strong>{' '}
                      <a href={project.link}>{project.link}</a>
                      <div className={styles['Work__project-wrapper']}>
                        <p>{project.description}</p>
                        <p>
                          <strong>Responsibilities:</strong>{' '}
                          {project.responsibilities}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
