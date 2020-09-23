import { combineReducers } from "redux";

import user from "./user";
import player from "./player";
import search from "./search";

export default combineReducers({
  user,
  player,
  search,
});
