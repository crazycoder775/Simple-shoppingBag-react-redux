import grocery from "./grocery-reducer";
import shoppingBag from "./shoppingBag-reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  grocery,
  shoppingBag
});

export default rootReducer;
