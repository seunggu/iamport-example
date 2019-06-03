import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProductItem.css';

export default class ProductItem extends Component {

  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };

  render() {
    const { product } = this.props;
    return (
      <div className="product-item-container">
        <input type="radio" />
        <p>{product.name}</p>
        <p>{product.price}원</p>
      </div>
    );
  }
}
