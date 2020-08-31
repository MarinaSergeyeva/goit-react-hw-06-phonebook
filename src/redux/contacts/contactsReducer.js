import { combineReducers } from "redux";
import actionTypes from "./contactsActionTypes";

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD:
      console.log("state", state);
      return [...state, action.payload];

    case actionTypes.DELETE:
      return state.filter(contact => contact.id !== action.payload.id);

    default:
      return state;
  }
};

const filter = (state = "", action) => state;

export default combineReducers({
  items,
  filter
});
