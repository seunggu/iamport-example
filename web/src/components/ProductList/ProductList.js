import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProductList.css';

import ProductItem from './ProductItem';

export default class ProductList extends Component {

  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })).isRequired,
    selectedProductId: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  renderProductItems = () => {
    const { products, selectedProductId, onSelect } = this.props;
    return products.map(product =>
      <ProductItem
        key={product._id}
        product={product}
        selectedProductId={selectedProductId}
        onSelect={onSelect}
      />
    );
  }

  render() {
    
    return (
      <div className="product-list-container">
        {this.renderProductItems()}
      </div>
    );
  }
}
