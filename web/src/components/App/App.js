import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import ProductList from '../ProductList/ProductList';
import PaymentButton from '../PaymentButton/PaymentButton';

export default class App extends Component {

  static apiRootURL = 'http://localhost:4000';

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      selectedProductId: '',
    };
  }

  componentDidMount() {
    axios.get(`${App.apiRootURL}/products`)
      .then(res => this.setState({ products: res.data.result.products }))
  }

  onProductSelect = selectedProductId => {
    this.setState({ selectedProductId });
  }

  render() {
    const { products, selectedProductId } = this.state;
    return (
      <div className="App">
        <ProductList
          products={products}
          selectedProductId={selectedProductId}
          onSelect={this.onProductSelect}
        />
        <PaymentButton />
      </div>
    );
  }
}
