import React, { Component } from 'react';
import './App.css';

import ProductList from '../ProductList/ProductList';
import PaymentButton from '../PaymentButton/PaymentButton';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: "5cf488d468f44cc37a0fff51",
          name: "상품1",
          price: 3000,
        },
        {
          id: "5cf488d468f44cc37a0fff52",
          name: "상품2",
          price: 4000,
        },
      ],
    };
  }

  componentDidMount() {
    
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <ProductList products={products} />
        <PaymentButton />
      </div>
    );
  }
}
