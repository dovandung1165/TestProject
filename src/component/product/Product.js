import React from "react";
import MenuOption from "./menuoption";
import ProductsRender from "./products";
import styles from "../css/product/product.module.css";
import store from "../../store/index";
import { Provider } from "react-redux";
function Product() {
  return (
    <section className={styles.product}>
      <div className={styles.productFrame}>
        <MenuOption />
        <Provider store={store}>
          <ProductsRender />
        </Provider>
      </div>
    </section>
  );
}

export default Product;
