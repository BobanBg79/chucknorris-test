import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import debounce from "lodash.debounce";
import { factOperations } from "../modules";

const Home = (props) => {
  const getChuckNorrisFactRef = useRef();
  const dispatch = useDispatch();
  const [searchInputValue, setSearchInputValue] = useState("");

  const onSearchInputTextChange = ({ target }) =>
    setSearchInputValue(target.value);

  useEffect(() => {
    getChuckNorrisFactRef.current = debounce((value) => {
      console.log("Api call with value: ", value);
      dispatch(factOperations.getSingleFact(value));
    }, 1000);
  }, []);

  useEffect(() => {
    if (searchInputValue) getChuckNorrisFactRef.current(searchInputValue);
  }, [searchInputValue]);

  return (
    <Container>
      <header className="text-center">Chuck Norris fact </header>
      <Row className="bg-primary">
        <Col className="align-items-center p-2">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={searchInputValue}
              onChange={onSearchInputTextChange}
              placeholder="Search Chuck Norris facts"
              aria-label="chuck-norris-facts-search"
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
};

export default Home;
