import React, { Component } from 'react';
import './App.css';

import Container from './Container'; 
import {List, Series} from './Pages'

import {Router, Route, IndexRoute, hashHistory} from 'react-router'; 

class App extends Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={List} />
          <Route path="campaign" component={Series} />
          {/*  <Route path="/overview/:id"/>
            <Route path="/performance/:id" /> */}
        </Route>
      </Router>
    );
  }
}

export default App;
