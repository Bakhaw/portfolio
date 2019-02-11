import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Slider({ galleryLength, projectName }) {
  return (
    <Carousel
      showArrows
      showIndicators={false}
      showStatus={false}
      useKeyboardArrows
      width='60vw'
    >
      <div>
        <img
          alt={`${projectName} screen shot`}
          src={`src/assets/projects/${projectName}/banner.webp`}
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
                  src={`src/assets/projects/${projectName}/step_${index}.webp`}
                />
              </div>
            );
          })
      ]}
    </Carousel>
  );
}

export default Slider;
