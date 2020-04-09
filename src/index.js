import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Report from './report';
import Form from './form';
import Submit from './submit';
import AddToHomescreen_ from './addtohs';
import Intro from './intro';
import Mainpage from './mainpage';
import ReportForm from './reportform';
import ReportFormFinal from './reportformfinal';
import UsefulLinks from './usefullinks';
import Stats from './stats';
import Share from './share';
import WhatIs from './whatis';

import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactGA.initialize('UA-162864526-1');
ReactGA.pageview(window.location.pathname + window.location.search);




ReactDOM.render(
  
  <React.StrictMode>
    
    <AddToHomescreen_ />
    <Router>
    <Switch>
          <Route path="/home">
            <App />
          </Route>
          {/* <Route path="/report">
            <Report/>
          </Route> */}
          {/* <Route path="/form">
            <Form/>
          </Route> */}
          <Route path="/submit">
            <Submit/>
          </Route>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route path="/main">
            <Mainpage />
          </Route>
          <Route path="/about">
            <WhatIs />
          </Route>
          <Route path="/share">
            <Share />
          </Route>
          <Route path="/formpage">
            <ReportForm />
          </Route>
         
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/usefullinks">
            <UsefulLinks />
          </Route>
          <Route path="/">
            <App />
          </Route>
         
        </Switch>

    </Router>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
