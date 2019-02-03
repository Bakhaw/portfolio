import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Socials from '../Socials';

function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer__contact__button'>
        <Link to='/contact'>
          <Button backgroundColor='#ef4b6c'>Contact me</Button>
        </Link>
      </div>
      <Socials />
    </div>
  );
}

export default Footer;
