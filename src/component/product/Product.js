import React from "react";
import MenuOption from "./menuoption";
import ProductsRender from "./products";
import styles from "../css/product/product.module.css";
function Product() {
  return (
    <section className={styles.product}>
      <div className={styles.productFrame}>
        <MenuOption />
        <ProductsRender />
      </div>
    </section>
  );
}

export default Product;
