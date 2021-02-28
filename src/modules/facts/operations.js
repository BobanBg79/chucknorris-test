import { factActions } from "../facts";
import { searchActions } from "../searches";
import { baseUrl } from "../../constants";

const {
  fetchRandomFact,
  setRandomFact,
  fetchFacts,
  fetchFactsError,
  setFacts,
  resetFacts,
} = factActions;
const { addSearchTerm } = searchActions;

const getFactsByQuery = (query) => async (dispatch) => {
  dispatch(resetFacts());
  dispatch(addSearchTerm(query));
  try {
    dispatch(fetchFacts());
    const url = `${baseUrl}/search?query=${query}`;
    const response = await fetch(url);
    const json = await response.json();
    dispatch(setFacts(json.result));
  } catch (error) {
    console.log("Greska: ", error.message);
    dispatch(fetchFactsError(error.message));
  }
};

const getRandomFact = () => async (dispatch) => {
  dispatch(fetchRandomFact());
  try {
    const url = `${baseUrl}/random`;
    const response = await fetch(url);
    const json = await response.json();
    dispatch(setRandomFact(json));
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

const factOperations = {
  getFactsByQuery,
  getRandomFact,
};

export default factOperations;
