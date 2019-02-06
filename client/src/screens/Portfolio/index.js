import React, { Component } from 'react';
import classNames from 'classnames';
import ContentWrapper from '../../components/ContentWrapper';
import projets from '../../projects';

class Portfolio extends Component {
  state = {
    projectName: 'twitch'
  };

  handleShowProject = projectName => {
    this.setState({ projectName });
  };

  render() {
    const { projectName } = this.state;
    return (
      <ContentWrapper>
        <div className='Portfolio'>
          <ul className='Portfolio__list'>
            {projets.map((project, index) => {
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
                    onMouseEnter={() =>
                      this.handleShowProject(project.projectName)
                    }
                  >
                    {project.bannerTitle}
                  </h1>
                </li>
              );
            })}
          </ul>

          <img
            alt='Project screen shot'
            className='Portfolio__list__listitem__banner fade-in'
            src={`src/assets/projects/${projectName}/banner.webp`}
          />
        </div>
      </ContentWrapper>
    );
  }
}

export default Portfolio;
