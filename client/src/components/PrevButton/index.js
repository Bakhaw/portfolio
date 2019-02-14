import React from 'react';
import Link from 'react-router-dom/Link';
import LeftArrow from '../../assets/images/left-arrow.svg';

// TODO this isn't rly for going back, actually its just a Link to /portfolio
function PrevButton() {
  return (
    <div className='PrevButton'>
      <Link to='/portfolio'>
        <img alt='Go back button' src={LeftArrow} />
      </Link>
      <span>Portfolio</span>
    </div>
  );
}

export default PrevButton;
