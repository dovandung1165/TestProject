import React from "react";
import styles from "../css/header/header.module.css";
import { delToCart } from "../../action/cartActions";
import store from "../../store/index";
export default class MiniCart extends React.Component {
  handleDeleteClick(event) {
    event.preventDefault();
    store.dispatch(delToCart());
  }
  render() {
    return (
      <ul className={styles.miniCart}>
        <li>
          <div className={styles.cartImg}>
            <a href='#'>
              <img src='/img/product/product-1.png' alt='' />
            </a>
          </div>
          <div className={styles.cartContent}>
            <h3>
              <a href='#'>Black &amp; White Shoes</a>
            </h3>
            <div className={styles.cartPrice}>
              <span className='new'>$ 229.9</span>
              <span>
                <del>$239.9</del>
              </span>
            </div>
          </div>
          <div className={styles.delIcon}>
            <a href='#' onClick={this.handleDeleteClick}>
              <i className='far fa-trash-alt' />
            </a>
          </div>
        </li>
        <li>
          <div className={styles.cartImg}>
            <a href='#'>
              <img src='/img/product/product-1.png' alt='' />
            </a>
          </div>
          <div className={styles.cartContent}>
            <h3>
              <a href='#'>Black &amp; White Shoes</a>
            </h3>
            <div className={styles.cartPrice}>
              <span className='new'>$ 229.9</span>
              <span>
                <del>$239.9</del>
              </span>
            </div>
          </div>
          <div className={styles.delIcon}>
            <a href='#' onClick={this.handleDeleteClick}>
              <i className='far fa-trash-alt' />
            </a>
          </div>
        </li>
        <li>
          <div className={styles.cartImg}>
            <a href='#'>
              <img src='/img/product/product-1.png' alt='' />
            </a>
          </div>
          <div className={styles.cartContent}>
            <h3>
              <a href='#'>Black &amp; White Shoes</a>
            </h3>
            <div className={styles.cartPrice}>
              <span className='new'>$ 229.9</span>
              <span>
                <del>$239.9</del>
              </span>
            </div>
          </div>
          <div className={styles.delIcon}>
            <a href='#' onClick={this.handleDeleteClick}>
              <i className='far fa-trash-alt' />
            </a>
          </div>
        </li>
        <li>
          <div className={styles.totalPrice}>
            <span className='f-left'>Total:</span>
            <span className='f-right'>$300.0</span>
          </div>
        </li>
        <li>
          <div className={styles.checkoutLink}>
            <a href='#'>Shopping Cart</a>
            <a className='red-color' href='#'>
              Checkout
            </a>
          </div>
        </li>
      </ul>
    );
  }
}
