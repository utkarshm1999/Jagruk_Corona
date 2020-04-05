import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Report from './report';
import Form from './form';
import Submit from './submit';

import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
          <Route path="/home">
            <App />
          </Route>
          <Route path="/report">
            <Report/>
          </Route>
          <Route path="/form">
            <Form/>
          </Route>
          <Route path="/submit">
            <Submit/>
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
