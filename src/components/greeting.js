import React, { Component } from 'react';

export default class Greeting extends Component {

    render(){
        let data = this.props.data
        //console.log({data})
        return(<h1>Hello {data.name}</h1>)
    }
}