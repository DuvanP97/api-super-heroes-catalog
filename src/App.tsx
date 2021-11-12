import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './pages/404';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import PowerstatsFilter from './pages/PowerstatsFilter';
import SearchName from './pages/SearchName';
import AppearanceFilter from './pages/AppearanceFilter';

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
          <Route path="/powerstats">
            <PowerstatsFilter />
          </Route>
          <Route path="/name">
            <SearchName />
          </Route>
          <Route path="/appearance">
            <AppearanceFilter />
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
