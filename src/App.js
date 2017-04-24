import React, { Component } from 'react';
import './App.css';

import Container from './Container'; 
import {List, Series, Error, Home} from './Pages'; 

import {Router, Route, IndexRoute, browserHistory} from 'react-router';  

import 'amcharts3'; 
import "amstock3/amcharts/amstock"; 

class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={List}/>
          <Route path="campaign" component={Series} /> 
          <Route path="campaign/:id" component={Series} />
          <Route path="error" component={Error} />
          <Route path="home" component={Home}/>
        </Route>
      </Router>
    );
  }
}

export default App;
