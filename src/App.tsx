import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './pages/404';
import FilterSkills from './pages/FilterSkills';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/filter">
            <FilterSkills />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
