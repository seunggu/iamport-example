import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProductItem.css';

export default class ProductItem extends Component {

  static propTypes = {
    product: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    selectedProductId: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  onRadioChange = () => {
    const { product, onSelect } = this.props;
    onSelect(product._id);
  }

  render() {
    const { product, selectedProductId } = this.props;
    return (
      <div className="product-item-container">
        <input
          type="radio"
          checked={product._id === selectedProductId}
          onChange={this.onRadioChange}
        />
        <p>{product.name}</p>
        <p>{product.price}원</p>
      </div>
    );
  }
}
