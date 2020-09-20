import React from 'react';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import BaseLayout from './containers/MyAccount';
import Team from './containers/Team';
import Home from './containers/Home';
import Global from './theme/global';
import Theme from './theme/theme';
import i18n from './i18n';

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={Theme}>
          <Global />
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
              <Redirect to="/" />
            </Switch>
          </Router>
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
}

export default App;
