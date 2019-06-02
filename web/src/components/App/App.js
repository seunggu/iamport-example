import React, { Component } from 'react';
import './App.css';
import PaymentButton from '../PaymentButton/PaymentButton';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <PaymentButton />
      </div>
    );
  }
}
