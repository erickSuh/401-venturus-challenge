import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import BaseLayout from 'containers/MyAccount';
import Team from 'containers/Team';
import Home from 'containers/Home';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/my-account">
          <BaseLayout />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/team/:id">
          <Team />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
