import { combineReducers } from "redux";

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

const items = (state = [], action) => state;
const filter = (state = "", action) => state;

export default combineReducers({
  items,
  filter,
});
