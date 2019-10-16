export const ADD_TO_CART = "ADD_TO_CART";
export const DEL_TO_CART = "DEL_TO_CART";
export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product
  };
}

export function delToCart() {
  return {
    type: DEL_TO_CART
  };
}
