import React from "react";
import styles from "../../assets/header/header.module.css";

import MiniCartItem from "./minicartItem";

import { delToCart } from "../../action/cartActions";

import { connect } from "react-redux";

class MiniCart extends React.Component {
  handleDeleteItem = id => {
    const product = this.props.cartItems.find(product => id === product.id);
    this.props.delToCart(product);
  };
  render() {
    const { cartItems, total, count } = this.props;
    return (
      <React.Fragment>
        <sup className={styles.cartCount}>{count}</sup>
        <ul className={styles.miniCart}>
          {cartItems.map(item => {
            return (
              <MiniCartItem
                key={item.id}
                {...item}
                onDelFromCart={this.handleDeleteItem}
              />
            );
          })}

          <li>
            <div className={styles.totalPrice}>
              <p>
                <span className='f-left'>Count:</span>
                <span className='f-right'>{count}</span>
              </p>
              <span className='f-left'>Total:</span>
              <span className='f-right'>{total}</span>
            </div>
          </li>
          <li>
            <div className={styles.checkoutLink}>
              <a href='#'>Shopping Cart</a>
              <a className={styles.redColor} href='#'>
                Checkout
              </a>
            </div>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ cartAdd }) {
  return {
    cartItems: cartAdd.items,
    total: new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "VND"
    }).format(cartAdd.total),
    count: cartAdd.items.reduce((quantity, cur) => {
      return quantity + cur.quantity;
    }, 0)
  };
}

const mapDispatchToProps = {
  delToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniCart);
