import React, { Component } from 'react';
import './App.css';

import Container from './Container'; 
import { 
  List, 
  Series, 
  Error, 
  Home, 
  Technology, 
  Simulations, 
  IndexationApproach, 
  EXOFacts, 
  PortfolioRiskThemes, 
  IndustrialCommodityUser, 
  Getstarted
} from './Pages'; 

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
          <Route path="services/indexation" component={IndexationApproach} />
          <Route path="services/exo-facts" component={EXOFacts} /> 
          <Route path="services/portfolio-risk-themes" component={PortfolioRiskThemes} /> 
          <Route path="industrial-commodity-user" component={IndustrialCommodityUser}/>
          <Route path="Getstarted" component={Getstarted} />
        </Route>
      </Router>
    );
  }
}

export default App;
