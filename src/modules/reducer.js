import {
  FACTS_FETCH,
  FACTS_FETCH_ERROR,
  SET_FACTS,
  RESET_FACTS,
} from "./actionTypes";

const INITIAL_STATE = {
  data: [],
};

const reducer = (state = INITIAL_STATE, { type, payload, error }) => {
  switch (type) {
    case FACTS_FETCH:
      return { ...state, fetch: true };
    case FACTS_FETCH_ERROR:
      return { ...state, error, fetch: false };
    case SET_FACTS:
      return { ...state, data: payload, fetch: false };
    case RESET_FACTS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
