import { combineReducers } from "redux";
import cartReducers from "./cart-reducers";
import productsReducer from "./products-reducer";
import cartAdd from "./cart-add-reducers";
import detailsProducts from "./details-add-reducers";
const rootReducers = combineReducers({
  cartReducers,
  productsReducer,
  cartAdd,
  detailsProducts
});
export default rootReducers;
