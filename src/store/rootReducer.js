import { combineReducers } from "redux";
import facts from "../modules/facts";
import searches from "../modules/searches";
export default combineReducers({
  facts,
  searches,
});
