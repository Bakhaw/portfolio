import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Tags from './Tags';

function CardTitle({ backgroundColor, bannerTitle, projectName, tags }) {
  return (
    <div className='Card__CardTitle'>
      <div className='Card__CardTitle__banner'>
        <h1 className='Card__CardTitle__banner__title'>{bannerTitle}</h1>
        <Link
          className='Card__CardTitle__banner__button'
          to={`/project/${projectName}`}
        >
          <Button backgroundColor={backgroundColor}>View project</Button>
        </Link>
      </div>
      {/* <Tags backgroundColor={backgroundColor} tags={tags} /> */}
    </div>
  );
}

export default CardTitle;
