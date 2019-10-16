/* eslint-disable react/prop-types */
import React from "react";
import styles from "../css/product/products.module.css";
import dataJSON from "../../dataProducts";
import store from "../../store/index";
import { addToCart } from "../../action/cartActions";
import { NavLink } from "react-router-dom";

function ProductsRender() {
  return <Product data={dataJSON} />;
}
function Product({ data }) {
  return (
    <div className={styles.productFrame}>
      {data.map(item => (
        <ProductIn key={item.id} {...item} />
      ))}
    </div>
  );
}

function handleCartButtonClick(event) {
  event.preventDefault();
  store.dispatch(addToCart());
}
function ProductIn({ img, title, price, id }) {
  return (
    <NavLink to='/details' activeClassName='active'>
      <div className={styles.product} id={id}>
        <div className={styles.overflow}>
          <div className={styles.productImg}>
            <img src={img} />
            <button
              className={styles.btnAddToCart}
              onClick={handleCartButtonClick}>
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

export default ProductsRender;
