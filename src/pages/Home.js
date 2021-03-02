import React, { useState, useEffect, useRef, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import debounce from "lodash.debounce";
import ThemeContext from "../themes";
import {
  PageHeader,
  PageMainContent,
  AutoSuggestionBox,
  SearchList,
  RandomFactBlock,
} from "../components";
import { factOperations } from "../modules/facts";

const Home = ({ switchTheme }) => {
  const theme = useContext(ThemeContext);
  const getChuckNorrisFactRef = useRef();
  const dispatch = useDispatch();
  const searchList = useSelector((state) => state.searches);
  // local state
  const [searchInputValue, setSearchInputValue] = useState("");
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  // event callbacks
  const onSearchInputTextChange = ({ target }) =>
    setSearchInputValue(target.value);

  const closeSuggestionsDropdown = () => setShowSuggestionBox(false);

  const selectSearchTermFromHistory = (searchTerm) => () =>
    setSearchInputValue(searchTerm);

  const getFacts = (query) => () => {
    if (query) {
      dispatch(factOperations.getFactsByQuery(query));
      setShowSuggestionBox(true);
    }
  };

  useEffect(() => {
    // when user stops typing for more then 1sec, api get request is sent
    getChuckNorrisFactRef.current = debounce((value) => {
      getFacts(value)();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchInputValue) getChuckNorrisFactRef.current(searchInputValue);
  }, [searchInputValue]);

  useEffect(() => {
    if (showSuggestionBox) {
      window.addEventListener("click", closeSuggestionsDropdown);
    }
    return () => {
      window.removeEventListener("click", closeSuggestionsDropdown);
    };
  }, [showSuggestionBox]);

  return (
    <div
      className="page home-page"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <PageHeader
        className="text-light bg-dark text-center"
        switchTheme={switchTheme}
      >
        Welcome to Chuck Norris Fun Facts Page!
      </PageHeader>
      <Container>
        <Row className="bg-primary justify-content-md-center no-gutters">
          <Col className="align-items-center p-2 position-relative" md={6}>
            <InputGroup className="position-relative">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-primary"
                    onClick={getFacts(searchInputValue)}
                  />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                value={searchInputValue}
                onChange={onSearchInputTextChange}
                placeholder="Search for Chuck Norris fun facts"
                aria-label="chuck-norris-facts-search"
              />
              {showSuggestionBox && <AutoSuggestionBox />}
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={6} className="align-items-center p-2 position-relative">
            <PageMainContent>
              {searchList && searchList.length ? (
                <SearchList
                  searchList={searchList}
                  onTermClick={selectSearchTermFromHistory}
                  currentSearchTerm={searchInputValue}
                />
              ) : (
                <RandomFactBlock />
              )}
            </PageMainContent>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
