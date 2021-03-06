import { combineReducers } from "redux";
import actionTypes from "./contactsActionTypes";

const items = (
  state = [
    {
      id: "id-1",
      name: "Rosie Simpson",
      number: "459-12-56"
    },
    {
      id: "id-2",
      name: "Hermione Kline",
      number: "443-89-12"
    },
    {
      id: "id-3",
      name: "Eden Clements",
      number: "645-17-79"
    },
    {
      id: "id-4",
      name: "Annie Copeland",
      number: "227-91-26"
    }
  ],
  action
) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [...state, action.payload];

    case actionTypes.DELETE:
      return state.filter(contact => contact.id !== action.payload.id);

    default:
      return state;
  }
};

const filter = (state = "", action) => {
  switch (action.type) {
    case actionTypes.FILTER:
      return action.payload.filter;

    default:
      return state;
  }
};

const alert = (state = false, action) => {
  switch (action.type) {
    case actionTypes.ALERT:
      return !state;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
  alert
});
