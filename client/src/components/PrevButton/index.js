import React from 'react';
import { withRouter } from 'react-router-dom';
import LeftArrow from '../../assets/images/left-arrow.svg';

function PrevButton({ history: { goBack } }) {
  return (
    <div className='PrevButton'>
      <img alt='Go back button' onClick={goBack} src={LeftArrow} />
      <span>Portfolio</span>
    </div>
  );
}

export default withRouter(PrevButton);
