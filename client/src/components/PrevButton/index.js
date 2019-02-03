import React from 'react';
import LeftArrow from '../../assets/images/left-arrow.svg';

function PrevButton({ history }) {
  return (
    <div className='PrevButton'>
      <img alt='Go back button' onClick={history.goBack} src={LeftArrow} />
    </div>
  );
}

export default PrevButton;
