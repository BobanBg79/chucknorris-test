import { ADD_SEARCH_TERM } from "./actionTypes";

const addSearchTerm = (payload) => ({
  type: ADD_SEARCH_TERM,
  payload,
});

const factActions = {
  addSearchTerm,
};

export default factActions;
