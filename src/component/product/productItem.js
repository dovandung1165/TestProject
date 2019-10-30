import React from "react";
import styles from "../../assets/product/products.module.css";

import { NavLink } from "react-router-dom";

class ProductItem extends React.Component {
  handleCartClick = event => {
    event.preventDefault();
    console.log("ID add:", this.props.id);
    this.props.onAddToCart(this.props.id);
  };

  render() {
    const { img, title, price, id } = this.props;
    console.log("Props Product Item:", this.props);
    return (
      <NavLink key={id} to={`/details/${id}`} activeClassName='active'>
        <div
          className={styles.product}
          id={id}
          onClick={this.handleDetailsClick}>
          <div className={styles.overflow}>
            <div className={styles.productImg}>
              <img src={img} alt='Product' />
              <button
                className={styles.btnAddToCart}
                onClick={this.handleCartClick}>
                Add to card
              </button>
            </div>
          </div>
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>{price}</div>
        </div>
      </NavLink>
    );
  }
}

export default ProductItem;
