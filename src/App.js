import React, { Component } from 'react';
import HelloView from './views/helloView';
import TestView from './views/testView';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <HelloView />
            </div>
          )}/>
          <Route exact={true} path='/test' render={() => (
            <div className="App">
              <TestView />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
