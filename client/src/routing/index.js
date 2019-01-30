import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Contact from '../screens/Contact';
import Home from '../screens/Home';
import Project from '../screens/Project';

function Router() {
  return (
    <HashRouter>
      <Switch>
        {/* :projectName is the associated to the current project images folder */}
        <Route path='/project/:projectName' component={Project} />
        <Route path='/contact' component={Contact} />
        <Route path='/' component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default Router;
