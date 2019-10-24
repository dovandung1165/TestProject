export const FETCH_PRODUCTS = "FETCH_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCT";
export const FETCH_PRODUCTS_FAILED = "FETCH_PRODUCT_FAILED";

export function fetchProducts() {
  return dispatch => {
    dispatch({ type: FETCH_PRODUCTS });
    //start fetching
    fetch("/dataProducts.json")
      .then(res => res.json())
      .then(json => {
        if (json.status && json.status.success) {
          return dispatch({ type: RECEIVE_PRODUCTS, payload: json });
        }
        dispatch({ type: FETCH_PRODUCTS_FAILED, error: json.status });
      })
      .catch(error => {
        dispatch({ type: FETCH_PRODUCTS_FAILED, error });
      });
  };
}
