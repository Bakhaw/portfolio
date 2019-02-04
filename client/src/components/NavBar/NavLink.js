import React from 'react';
import Link from 'react-router-dom/Link';

function NavLink({ children, to }) {
  return (
    <Link className='NavBar__NavLinks__NavLink' to={to}>
      {children}
    </Link>
  );
}

export default NavLink;
