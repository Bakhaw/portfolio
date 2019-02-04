import React from 'react';
import { withRouter } from 'react-router-dom';
import LeftArrow from '../../assets/images/left-arrow.svg';

function PrevButton({ history }) {
  return (
    <div className='PrevButton'>
      <img alt='Go back button' onClick={history.goBack} src={LeftArrow} />
    </div>
  );
}

export default withRouter(PrevButton);
