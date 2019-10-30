import React from "react";
import Product from "../component/product/Product";
import SupTopBarRender from "../component/header/suptopbar";
import BackgroundRender from "../component/main/background";
import { Provider } from "react-redux";
import store from "../store/index";
function Category() {
  return (
    <section>
      <SupTopBarRender />
      <BackgroundRender />
      <Provider store={store}>
        <Product />
      </Provider>
    </section>
  );
}

export default Category;
