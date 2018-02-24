import { ADD_GROCERY } from "../actions";
import { addToBag } from "./helper";

export default function shoppingBag(state = [], action) {
  switch (action.type) {
    case ADD_GROCERY:
      console.log("add grocery and shopping bag action is", action);
      let shoppingBag = [...state, addToBag(action.id)];
      console.log("shopping bag is", shoppingBag);
      return shoppingBag;
    default:
      return state;
  }
}
