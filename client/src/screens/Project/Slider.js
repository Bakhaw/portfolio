import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Slider({ galleryLength, projectName }) {
  const smallScreen = window.screen.availWidth < 767;
  const carouselWidth = smallScreen ? '100%' : '60vw';
  return (
    <Carousel
      dynamicHeight={false}
      showArrows={!smallScreen}
      showIndicators={false}
      showStatus={false}
      useKeyboardArrows
      transitionTime={smallScreen ? 125 : 350} // 350 is default transitionTime
      width={carouselWidth}
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
