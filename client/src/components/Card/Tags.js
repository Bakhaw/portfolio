import React from 'react';
import Chip from '../Chip';

function Tags({ backgroundColor, tags }) {
  return (
    <ul className='Card__CardTitle__tags'>
      {tags &&
        tags.map((item, index) => (
          <li key={index} className='Card__CardTitle__tags__tag'>
            <Chip backgroundColor={backgroundColor} text={item} />
          </li>
        ))}
    </ul>
  );
}

export default Tags;
