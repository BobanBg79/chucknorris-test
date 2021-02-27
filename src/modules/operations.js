import { factActions } from "../modules";
import { baseUrl } from "../constants";

const { fetchFacts, fetchFactsError, setFacts, resetFacts } = factActions;

const getSingleFact = (query) => async (dispatch) => {
  dispatch(resetFacts());
  try {
    dispatch(fetchFacts);
    const url = `${baseUrl}?query=${query}`;
    const response = await fetch(url);
    const json = await response.json();
    dispatch(setFacts(json.result));
  } catch (error) {
    dispatch(fetchFactsError(error.message));
  }
};

const factOperations = {
  getSingleFact,
};

export default factOperations;
