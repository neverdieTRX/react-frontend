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
    this.getFormattedNameFromBackend.bind(this);
    this.setState.bind(this);
  }

  componentDidMount() {
    this.getFormattedNameFromBackend(this.state.name);
  }
  
  getFormattedNameFromBackend(name) {
    axios({
      method:'get',
      url:'http://localhost:8080/hello?name=' + name
    }).then((response) => {
      console.log(this);
      this.setState({ name : response.data.name});
    }).catch(function(error){
      console.log(error);
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greeting data={this.state}/>
          <TextInput callBack = {(name)=>this.getFormattedNameFromBackend(name)}/>
        </header>
      </div>
    );
  }
  
}

export default App;
