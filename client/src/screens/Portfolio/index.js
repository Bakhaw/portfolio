import React, { useState } from 'react';
import Banner from './Banner';
import List from './List';
import MobileSlider from './MobileSlider';

function Portfolio() {
  const [selectedProject, handleChangeProject] = useState('twitch');
  const smallScreen = window.screen.width < 767;

  if (smallScreen) {
    return <MobileSlider />;
  }

  return (
    <div className='Portfolio'>
      <List
        handleChangeProject={handleChangeProject}
        selectedProject={selectedProject}
      />
      <Banner selectedProject={selectedProject} />
    </div>
  );
}

export default Portfolio;
