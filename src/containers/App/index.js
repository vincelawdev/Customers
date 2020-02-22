import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GlobalStyle from './global-style';
import Home from '../Home';
import Form from '../Form';
import Results from '../Results';

const App = () => (
  <Router>
    <GlobalStyle />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path="/results">
        <Results />
      </Route>
    </Switch>
  </Router>
);

export default App;
