import React from 'react';
import classNames from 'classnames';
import projects from '../../projects';
import Link from 'react-router-dom/Link';

export default function List({ handleChangeProject, selectedProject, t }) {
  return (
    <ul className='Portfolio__list'>
      {projects.map(({ bannerTitle, projectName }, index) => {
        const isActive = selectedProject === projectName;
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
              onClick={() => handleChangeProject(projectName)}
            >
              {bannerTitle}
              {isActive && (
                <Link to={`/project/${projectName}`}>
                  <div className='Portfolio__list__listitem__title__explore'>
                    <p>Go</p>
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
