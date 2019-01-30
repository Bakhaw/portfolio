import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import projects from '../../projects';

// ! project img screenshots are taken on web (web screen width size = 1366)
// ! then imgs are resized with mac thing to 1363 x 707

function Project({ match }) {
  const { projectName } = match.params;
  const currentProject = projects.filter(
    project => project.projectName === projectName
  );
  const { galleryLength } = currentProject[0];
  return (
    <div className='Project'>
      <h1>{projectName}</h1>
      <Carousel showArrows useKeyboardArrows width='80%'>
        <div>
          <img
            alt={`${projectName} screen shot`}
            src={require(`../../assets/projects/${projectName}/banner.png`)}
          />
        </div>
        {[
          ...Array(galleryLength)
            .fill()
            .map((item, index) => {
              return (
                <div key={index}>
                  <img
                    alt={`${projectName} screen shot`}
                    src={require(`../../assets/projects/${projectName}/step_${index}.png`)}
                  />
                </div>
              );
            })
        ]}
      </Carousel>
    </div>
  );
}

export default Project;
