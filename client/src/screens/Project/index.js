import React, { Component } from 'react';
import projects from '../../projects';
import Slider from './Slider';
import Loader from '../../components/Loader';
import Description from './Description';
import Header from './Header';
import Links from './Links';
import Technos from './Technos';

// ! project img screenshots are taken on web (web screen width size = 1366)
// ! then imgs are resized with mac thing to 1363 x 707

class Project extends Component {
  state = {
    isLoading: false,
    currentProject: null
  };

  async componentDidMount() {
    await this.getCurrentProject();
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    const prevProject = prevProps.match.params.projectName;
    const thisProject = this.props.match.params.projectName;

    if (prevProject !== thisProject) {
      this.getCurrentProject();
    }
  }

  toggleLoading = bool => {
    this.setState({ isLoading: bool });
  };

  getCurrentProject = async () => {
    this.toggleLoading(true);
    const currentProject = projects.filter(
      project => project.projectName === this.props.match.params.projectName
    );
    await this.setState({ currentProject: currentProject[0] });
    this.toggleLoading(false);
  };

  render() {
    const { isLoading, currentProject } = this.state;

    if (currentProject === null || isLoading)
      return (
        <div className='Project__Spinner'>
          <Loader />
        </div>
      );

    const { bannerTitle } = currentProject;

    return (
      <div className='Project'>
        <Header bannerTitle={bannerTitle} />
        <div className='Project__content'>
          <Slider {...currentProject} />
          <div className='Project__content__description'>
            <div>
              <Description currentProject={currentProject} />
              <Technos currentProject={currentProject} />
            </div>
            <Links currentProject={currentProject} />
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
