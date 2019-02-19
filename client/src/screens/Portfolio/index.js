import React from 'react';
import Loader from '../../components/Loader';
const Banner = React.lazy(() => import('./Banner'));
const List = React.lazy(() => import('./List'));
const MobileSlider = React.lazy(() => import('./MobileSlider'));

function Portfolio() {
  const [selectedProject, handleChangeProject] = React.useState('twitch');
  const smallScreen = window.screen.width < 767;

  if (smallScreen) {
    return (
      <React.Suspense fallback={<Loader />}>
        <MobileSlider />
      </React.Suspense>
    );
  }

  return (
    <div className='Portfolio'>
      <React.Suspense fallback={<Loader />}>
        <List
          handleChangeProject={handleChangeProject}
          selectedProject={selectedProject}
        />
        <Banner selectedProject={selectedProject} />
      </React.Suspense>
    </div>
  );
}

export default Portfolio;
