import React from "react";
import Product from "../component/product/Product";
import SupTopBarRender from "../component/header/suptopbar";
import BackgroundRender from "../component/main/background";
function Category() {
  return (
    <section>
      <SupTopBarRender />
      <BackgroundRender />
      <Product />
    </section>
  );
}

export default Category;
