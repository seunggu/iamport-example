import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProductList.css';

import ProductItem from './ProductItem';

export default class ProductList extends Component {

  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })).isRequired,
  };

  renderProductItems = () => {
    const { products } = this.props;
    return products.map(product => <ProductItem key={product.id} product={product} />);
  }

  render() {
    
    return (
      <div className="product-list-container">
        {this.renderProductItems()}
      </div>
    );
  }
}
