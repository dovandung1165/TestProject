import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "../../action/cartActions";
import { addToDetails } from "../../action/cartActions";
import { fetchProducts } from "../../action/productActions";
import { NavLink } from "react-router-dom";
import styles from "../css/product/products.module.css";
import ProductItem from "./productItem";

class ProductsRender extends Component {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    addToDetails: PropTypes.func.isRequired
  };
  handleAddToCart = id => {
    const product = this.props.products.find(product => id === product.id);
    if (product) {
      this.props.addToCart(product);
    }
  };
  handleAddToDetails = id => {
    const product = this.props.products.find(product => id === product.id);
    if (product) {
      this.props.addToDetails(product);
    }
  };
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { products } = this.props;
    console.log("product fetch", products);
    return (
      <div className={styles.productFrame}>
        {products.map(item => {
          return (
            <NavLink
              key={item.id}
              to={`/details/${item.id}`}
              activeClassName='active'>
              <ProductItem
                {...item}
                onAddToCart={this.handleAddToCart}
                onAddToDetails={this.handleAddToDetails}
              />
            </NavLink>
          );
        })}
      </div>
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
  fetchProducts,
  addToDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsRender);
