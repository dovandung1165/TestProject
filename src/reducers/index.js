import { combineReducers } from "redux";
import productsReducer from "./products-reducer";
import cartAdd from "./cart-add-reducers";
import detailsReducers from "./details-reducers";
const rootReducers = combineReducers({
  productsReducer,
  cartAdd,
  detailsReducers
});
export default rootReducers;
