import React from "react";
import styles from "../../assets/product/product.module.css";

import ProductsRender from "./products";
import store from "../../store/index";

import { Provider } from "react-redux";

class Product extends React.Component {
  render() {
    return (
      <section className={styles.product}>
        <div className={styles.productFrame}>
          <Provider store={store}>
            <ProductsRender />
          </Provider>
        </div>
      </section>
    );
  }
}

export default Product;
