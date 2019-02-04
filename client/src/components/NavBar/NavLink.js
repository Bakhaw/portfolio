import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import classNames from 'classnames';
import Link from 'react-router-dom/Link';

function NavLink({ children, location, to }) {
  const isRouteActive = to === location.pathname;
  return (
    <Link
      className={classNames(
        'NavBar__NavLinks__NavLink',
        isRouteActive && 'NavBar__NavLinks__NavLink__active'
      )}
      to={to}
    >
      {children}
    </Link>
  );
}

export default withRouter(NavLink);
