import React, { Component } from 'react';
import logo from './logo.svg';
import Greeting from './components/greeting';
import TextInput from './components/textInput';
import './App.css';

const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "World"};
  }

  componentDidMount() {
    axios({
      method:'get',
      url:'http://localhost:8080/hello?name=Marcus'
    }).then((response) => {
      this.setState({ name : response.data.name});
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greeting data={this.state}/>
          <TextInput/>
        </header>
      </div>
    );
  }
  
}

export default App;
