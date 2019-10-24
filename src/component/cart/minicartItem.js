import React from "react";
import styles from "../css/header/header.module.css";
export default class MinicartItem extends React.Component {
  handleDeleteClick = event => {
    event.preventDefault();
    console.log("ID delete:", this.props.id);
    this.props.onDelFromCart(this.props.id);
    return this.props.id;
  };
  render() {
    const { title, price, quantity, img } = this.props;
    console.log("Props Cart:", this.props);
    return (
      <li>
        <div className={styles.cartImg}>
          <a href='#'>
            <img src={img} alt='' />
          </a>
        </div>
        <div className={styles.cartContent}>
          <h3>
            <a href='#'>{title}</a>
          </h3>
          <div className={styles.cartPrice}>
            <span className='new'>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "VND"
              }).format(price)}
            </span>
            <strong>x {quantity}</strong>
          </div>
        </div>
        <div className={styles.delIcon}>
          <a href='#' onClick={this.handleDeleteClick}>
            <i className='far fa-trash-alt' />
          </a>
        </div>
      </li>
    );
  }
}
