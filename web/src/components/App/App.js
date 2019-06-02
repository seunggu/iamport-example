import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  
  componentDidMount() {
    this.initIamportId();
  }

  initIamportId = () => {
    const IMP = window.IMP;
    const iamportId = process.env.IAMPORT_ID;
    IMP.init(iamportId);
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}
