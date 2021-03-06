import React, { Component } from 'react';
import projects from '../../projects';
import Loader from '../../components/Loader';
const Slider = React.lazy(() => import('./Slider'));
const Description = React.lazy(() => import('./Description'));
const Header = React.lazy(() => import('./Header'));
const Links = React.lazy(() => import('./Links'));
const Technos = React.lazy(() => import('./Technos'));

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
        <React.Suspense fallback={<Loader />}>
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
        </React.Suspense>
      </div>
    );
  }
}

export default Project;
