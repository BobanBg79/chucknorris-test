import {
  RANDOM_FACT_FETCH,
  SET_RANDOM_FACT,
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
    case RANDOM_FACT_FETCH:
      return { ...state, randomFactFetch: true };
    case SET_RANDOM_FACT:
      return { ...state, randomFactFetch: false, randomFact: payload };
    case FACTS_FETCH:
      return { ...state, fetch: true };
    case FACTS_FETCH_ERROR:
      return { ...state, error, fetch: false };
    case SET_FACTS:
      return { ...state, data: payload, fetch: false };
    case RESET_FACTS:
      return { ...state, data: [] };
    default:
      return state;
  }
};

export default reducer;
