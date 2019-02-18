import React from 'react';
import Link from 'react-router-dom/Link';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import projects from '../../projects';

export default function MobileSlider() {
  return (
    <div className='MobileSlider'>
      <Carousel
        showArrows={false}
        showIndicators
        showThumbs={false}
        showStatus={false}
        transitionTime={125}
        width='100vw'
      >
        {projects.map(({ bannerTitle, projectName }, index) => (
          <div key={index}>
            <div>
              <img
                alt={`${projectName} screen shot`}
                src={`assets/projects/${projectName}/banner.png`}
              />
            </div>

            <div className='MobileSlider__title'>
              <h1>{bannerTitle}</h1>
              <Link to={`/project/${projectName}`}>
                <span>Go</span>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
