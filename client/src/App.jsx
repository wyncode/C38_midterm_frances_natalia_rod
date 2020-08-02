import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ControlledCarousel from './components/carousel1';
import Questionnaire from './components/Questionnaire';

import Nav from './components/Nav';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={ControlledCarousel} />
        <Route exact path="/quiz" component={Questionnaire} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
