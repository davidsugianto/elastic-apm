//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Header} from "./components/Header";

import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import UpdateTodo from './components/UpdateTodo';

import './index.css';

// import { init as initApm } from '@elastic/apm-rum'

// const apm = initApm({
//  serviceName: 'node-frontend',
//  serverUrl: 'http://apm-server:8200',
// })

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <Header/>
      </div>
    </div>
    <div>
      <Router>
        <div>
          <Route path='/add' component={AddTodo} />
          <Route exact path='/' component={ListTodo} />
          <Route path='/update/:id' component={UpdateTodo} />
        </div>
      </Router>
    </div>
  </div>
,
  document.getElementById('root')
);
