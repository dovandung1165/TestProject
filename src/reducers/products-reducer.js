import {
  FETCH_PRODUCTS,
  RECEIVE_PRODUCTS,
  FETCH_PRODUCTS_FAILED
} from "../action/productActions";

const initialState = {
  isFetching: false,
  total: 0,
  page: 0,
  pageSize: 0,
  items: []
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_PRODUCTS: {
      const { status, data } = action.payload;
      return {
        ...state,
        isFetching: false,
        total: status.total,
        page: status.page,
        pageSize: status.pageSize,
        items: data
      };
    }

    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        isFetching: false
      };

    default:
      return state;
  }
}
