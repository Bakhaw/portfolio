import React, { useState } from 'react';
import Banner from './Banner';
import List from './List';

function Portfolio() {
  const [projectName, changeProjectName] = useState('twitch');
  return (
    <div className='Portfolio'>
      <List changeProjectName={changeProjectName} projectName={projectName} />
      <Banner projectName={projectName} />
    </div>
  );
}

export default Portfolio;
