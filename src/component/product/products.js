import React, { Component } from "react";

import styles from "../../assets/product/products.module.css";

import MenuOption from "./menuoption";
import ProductItem from "./productItem";

import { addToCart } from "../../action/cartActions";
import { fetchProducts } from "../../action/productActions";

import PropTypes from "prop-types";
import { connect } from "react-redux";

class ProductsRender extends Component {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    sortProductAZ: PropTypes.func.isRequired,
    sortProductZA: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired
  };
  handleAddToCart = id => {
    const product = this.props.products.find(product => id === product.id);
    if (product) {
      this.props.addToCart(product);
    }
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    console.log("product fetch", products);
    return (
      <>
        <MenuOption />
        <div className={styles.productFrame}>
          {products.map(item => {
            return <ProductItem {...item} onAddToCart={this.handleAddToCart} />;
          })}
        </div>
      </>
    );
  }
}

function mapStateToProps({ productsReducer }) {
  return {
    products: productsReducer.items
  };
}

const mapDispatchToProps = {
  addToCart,
  fetchProducts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsRender);
