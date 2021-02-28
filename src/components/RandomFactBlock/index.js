import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "../index";
import { Icon } from "../index";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { factOperations } from "../../modules/facts";
import "./styles.css";

const RandomFactBlock = () => {
  const dispatch = useDispatch();
  const { randomFact, randomFactFetch } = useSelector((state) => state.facts);

  useEffect(() => {
    dispatch(factOperations.getRandomFact());
  }, []);

  return (
    <div className="random-fact-block-container">
      {randomFactFetch ? (
        <Spinner />
      ) : (
        <div>
          <h4>
            <Icon icon={faLightbulb} placement="left" />
            Did you know:
          </h4>
          <p className="random-fact">{randomFact && randomFact.value}</p>
        </div>
      )}
    </div>
  );
};

export default RandomFactBlock;
