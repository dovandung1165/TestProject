import React from "react";
import styles from "../css/product/products.module.css";
export default class ProductItem extends React.Component {
  handleCartClick = event => {
    event.preventDefault();
    console.log("ID add:", this.props.id);
    this.props.onAddToCart(this.props.id);
    return this.props.id;
  };
  handleDetailsClick = () => {
    console.log("ID add details:", this.props.id);
    this.props.onAddToDetails(this.props.id);
    return this.props.id;
  };
  render() {
    const { img, title, price, id } = this.props;
    return (
      <div className={styles.product} id={id} onClick={this.handleDetailsClick}>
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
    );
  }
}
