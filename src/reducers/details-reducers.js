import {
  FETCH_PRODUCT_DETAILS,
  RECEIVE_PRODUCT_DETAILS,
  FETCH_PRODUCT_DETAILS_FAILED
} from "../action/detailsAction";

const initialState = {
  items: []
};

export default function detailsReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_DETAILS:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_PRODUCT_DETAILS: {
      const { data } = action.payload;
      const { productId } = action;
      const productDetails = data.find(product => {
        if (product.id === productId) return product;
      });
      return {
        ...state,
        isFetching: false,
        items: productDetails
      };
    }

    case FETCH_PRODUCT_DETAILS_FAILED:
      return {
        ...state,
        isFetching: false
      };

    default:
      return state;
  }
}
