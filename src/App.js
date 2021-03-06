import React, { Component } from 'react';
import './App.css';
import 'sweetalert2/dist/sweetalert2.css'; 

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
  Getstarted,
  WelcomePage,
  About,
  TellAbout, 
  Login, 
  MyExos, 
  Signup, 
  Services,
  GetstartedSlider,
  ForgPass,
  ResetPass
} from './Pages'; 

import {Router, Route, IndexRoute, browserHistory} from 'react-router';  

import 'amcharts3'; 
import "amstock3/amcharts/amstock"; 

class App extends Component {

  render() {
    return (
      <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
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
          <Route path="getstarted" component={Getstarted} />
          <Route path="welcome-page" component={WelcomePage} />
          <Route path="about-us" component={About} />
          <Route path="tell-about" component={TellAbout}/> 
          <Route path="login" component={Login} />  
          <Route path="my-exos" component={MyExos} /> 
          <Route path="signup" component={TellAbout} /> 
          <Route path="robo-hedger" component={Services} /> 
          <Route path="value-propositions" component={Services} />
          <Route path="alpha-project" component={Services} /> 
          <Route path="tech-services" component={Services} />
          <Route path="forgot-password" component={ForgPass} />
          <Route path="getstrated-slider" component={GetstartedSlider}/>
          <Route path="reset" component={ResetPass}/>
        </Route>
      </Router>
    );
  }
}

export default App;
