import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import classNames from 'classnames';
import ContentWrapper from '../../components/ContentWrapper';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import projects from '../../projects';

class Portfolio extends Component {
  state = {
    isBannerHovered: false,
    projectName: 'avocado'
  };

  handleShowProject = projectName => {
    this.setState({ projectName });
  };

  toggleHoverBanner = bool => {
    this.setState({ isBannerHovered: bool });
    // if ('lol' === 'lol') alert('OUIIIII');
  };

  render() {
    const { isBannerHovered, projectName } = this.state;
    return (
      <ContentWrapper>
        <div className='Portfolio'>
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
                    onClick={() => this.handleShowProject(project.projectName)}
                  >
                    {project.bannerTitle}
                  </h1>
                </li>
              );
            })}
          </ul>

          <div
            className={classNames(
              'fade-in',
              'Portfolio__list__listitem__banner__container'
            )}
            onMouseEnter={() => this.toggleHoverBanner(true)}
            onMouseLeave={() => this.toggleHoverBanner(false)}
          >
            {isBannerHovered && (
              <div className='Portfolio__list__listitem__banner__eye'>
                <Link to={`/project/${projectName}`}>
                  <RemoveRedEye />
                </Link>
              </div>
            )}
            <img
              alt='Project screen shot'
              className={classNames('Portfolio__list__listitem__banner__image')}
              src={`src/assets/projects/${projectName}/banner.webp`}
            />
          </div>
        </div>
      </ContentWrapper>
    );
  }
}

export default Portfolio;
