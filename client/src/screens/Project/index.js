import React, { Component } from 'react';
import projects from '../../projects';
import Slider from './Slider';
import Footer from '../../components/Footer';
import PrevButton from '../../components/PrevButton';
import Spinner from '../../components/Spinner';

// ! project img screenshots are taken on web (web screen width size = 1366)
// ! then imgs are resized with mac thing to 1363 x 707

class Project extends Component {
  state = {
    isLoading: false,
    currentProject: {
      galleryLength: 0,
      projectName: ''
    }
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
    const { galleryLength, projectName } = currentProject[0];
    await this.setState({ currentProject: { galleryLength, projectName } });
    this.toggleLoading(false);
  };

  render() {
    const { isLoading, currentProject } = this.state;
    const { projectName } = currentProject;

    if (isLoading)
      return (
        <div className='Project__Spinner'>
          <Spinner />
        </div>
      );

    return (
      <div className='Project'>
        <div className='Project__header'>
          <PrevButton history={this.props.history} />
          <h1>{projectName}</h1>
        </div>
        <Slider {...currentProject} />
        <Footer />
      </div>
    );
  }
}

export default Project;
