import { ADD_SEARCH_TERM } from "./actionTypes";

const INITIAL_STATE = [];

const isTermEligable = (state, term) => {
  const hasMeaningfulLength = term && term.length > 1;
  const notEquealToThePreviousTerm = state[state.length - 1] === term;
  return hasMeaningfulLength && !notEquealToThePreviousTerm;
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_SEARCH_TERM:
      return isTermEligable(state, payload) ? state.concat(payload) : state;
    default:
      return state;
  }
};

export default reducer;
