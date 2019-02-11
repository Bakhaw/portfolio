import React from 'react';
import classNames from 'classnames';
import projects from '../../projects';
import Link from 'react-router-dom/Link';

export default function List({ changeProjectName, projectName }) {
  return (
    <ul className='Portfolio__list'>
      {projects.map((project, index) => {
        const isActive = projectName === project.projectName;
        return (
          <li
            key={index}
            className={classNames(
              'Portfolio__list__listitem',
              isActive && 'Portfolio__list__listitem__active'
            )}
          >
            <h1
              className='Portfolio__list__listitem__title'
              onClick={() => changeProjectName(project.projectName)}
            >
              {project.bannerTitle}
              {isActive && (
                <Link to={`/project/${project.projectName}`}>
                  <div className='Portfolio__list__listitem__title__explore'>
                    <p>Voir</p>
                  </div>
                </Link>
              )}
            </h1>
          </li>
        );
      })}
    </ul>
  );
}
