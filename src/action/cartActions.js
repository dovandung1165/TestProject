export const ADD_TO_CART = "ADD_TO_CART";
export const DEL_TO_CART = "DEL_TO_CART";
export const ADD_TO_DETAILS = "ADD_TO_DETAILS";
export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product
  };
}

export function delToCart(product) {
  return {
    type: DEL_TO_CART,
    product
  };
}

export function addToDetails(product) {
  return {
    type: ADD_TO_DETAILS,
    product
  };
}
