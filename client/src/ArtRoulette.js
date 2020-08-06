import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Homepage';
import Paintings from './components/Paintings';
import Sculpture from './components/Sculpture';
import Weapons from './components/Weapons';
import Photography from './components/Photography';
import Quiz from './components/Quiz';

import Nav from './components/Nav';


const ArtRoulette = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/Paintings" component={Paintings} />
        <Route exact path="/Sculpture" component={Sculpture} />
        <Route exact path="/Weapons" component={Weapons} />
        <Route exact path="/Photography" component={Photography} />
      </Switch>
    </BrowserRouter>
  );
};

export default ArtRoulette;
