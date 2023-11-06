import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import CV from './pages/cv';
import MyForm from './pages/form';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cv" component={CV} />
        <Route path="/form" component={MyForm} />
        <Redirect from="/" to="/form" />
      </Switch>
    </Router>
  );
}

export default App;
