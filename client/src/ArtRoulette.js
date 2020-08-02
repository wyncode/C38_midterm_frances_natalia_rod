import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ControlledCarousel from './components/carousel1';

import Nav from "./components/Nav"



const ArtRoulette = () => {

    return (

    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={ControlledCarousel} />
      </Switch>
    </BrowserRouter>
  );
}
        

    

export default ArtRoulette;