export const FETCH_PRODUCT_DETAILS = "FETCH_PRODUCT_DETAILS";
export const RECEIVE_PRODUCT_DETAILS = "RECEIVE_PRODUCT_DETAILS";
export const FETCH_PRODUCT_DETAILS_FAILED = "FETCH_PRODUCT_DETAILS_FAILED";
//fetching by id
export function fetchProductDetails(productId) {
  console.log("Fetch product by ID:", productId);
  return dispatch => {
    dispatch({ type: FETCH_PRODUCT_DETAILS });
    //start fetching
    fetch("/dataProducts.json")
      .then(res => res.json())
      .then(json => {
        if (json.status && json.status.success) {
          return dispatch({
            type: RECEIVE_PRODUCT_DETAILS,
            payload: json,
            productId
          });
        }
        dispatch({ type: FETCH_PRODUCT_DETAILS_FAILED, error: json.status });
      })
      .catch(error => {
        dispatch({ type: FETCH_PRODUCT_DETAILS_FAILED, error });
      });
  };
}
