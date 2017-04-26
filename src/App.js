import React, { Component } from 'react';
import './App.css';

import Container from './Container'; 
import {List, Series, Error, Home, Technology, Simulations} from './Pages'; 

import {Router, Route, IndexRoute, browserHistory} from 'react-router';  

import 'amcharts3'; 
import "amstock3/amcharts/amstock"; 

class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={Home}/>
          <Route path="campaign" component={Series} />  
          <Route path="error" component={Error} />
          <Route path="home" component={Home}/> 
          <Route path="simulations/old" component={List} />
          <Route path="simulations" component={Simulations} />
          <Route path="technology" component={Technology} />
        </Route>
      </Router>
    );
  }
}

export default App;
