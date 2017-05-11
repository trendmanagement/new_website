import React, { Component } from 'react';
import './App.css';

import Container from './Container'; 
import { Simulations } from './Pages'; 

import {Router, Route, IndexRoute, browserHistory} from 'react-router';  

import 'amcharts3'; 
import "amstock3/amcharts/amstock"; 

class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={Simulations}/>
          <Route path="/" component={Simulations} /> 
          <Route path="/simulations" component={Simulations} />
        </Route>
      </Router>
    );
  }
}

export default App;
