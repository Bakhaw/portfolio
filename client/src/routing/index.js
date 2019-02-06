import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Contact from '../screens/Contact';
import Home from '../screens/Home';
import Portfolio from '../screens/Portfolio';
import Project from '../screens/Project';
import Skills from '../screens/Skills';
import NavBar from '../components/NavBar';

function Router() {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <Switch>
          {/* :projectName is the associated to the current project images folder */}
          <Route path='/project/:projectName' component={Project} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/skills' component={Skills} />
          <Route path='/contact' component={Contact} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default Router;
