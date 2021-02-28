import {
  RANDOM_FACT_FETCH,
  SET_RANDOM_FACT,
  FACTS_FETCH,
  FACTS_FETCH_ERROR,
  SET_FACTS,
  RESET_FACTS,
} from "./actionTypes";

const fetchRandomFact = () => ({ type: RANDOM_FACT_FETCH });
const fetchFacts = () => ({ type: FACTS_FETCH });
const fetchFactsError = (error) => ({ type: FACTS_FETCH_ERROR, error });

const resetFacts = () => ({ type: RESET_FACTS });
const setFacts = (payload) => ({
  type: SET_FACTS,
  payload,
});

const setRandomFact = (payload) => ({
  type: SET_RANDOM_FACT,
  payload,
});

const factActions = {
  fetchRandomFact,
  setRandomFact,
  fetchFacts,
  fetchFactsError,
  setFacts,
  resetFacts,
};

export default factActions;
