import React from 'react';
import Link from 'react-router-dom/Link';

// TODO this isn't rly for going back, actually its just a Link to /portfolio
function PrevButton() {
  return (
    <div className='PrevButton'>
      <Link to='/portfolio'>
        <img alt='Go back button' src='assets/images/left-arrow.svg' />
      </Link>
      <span>Portfolio</span>
    </div>
  );
}

export default PrevButton;
