import {
  FACTS_FETCH,
  FACTS_FETCH_ERROR,
  SET_FACTS,
  RESET_FACTS,
} from "./actionTypes";

const fetchFacts = () => ({ type: FACTS_FETCH });
const fetchFactsError = (error) => ({ type: FACTS_FETCH_ERROR, error });

const resetFacts = () => ({ type: RESET_FACTS });
const setFacts = (payload) => ({
  type: SET_FACTS,
  payload,
});

const factActions = {
  fetchFacts,
  fetchFactsError,
  setFacts,
  resetFacts,
};

export default factActions;
