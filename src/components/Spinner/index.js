import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const Spinner = () => {
  return (
    <FontAwesomeIcon
      icon={faSpinner}
      size="2x"
      className="spinner text-primary"
    />
  );
};

export default Spinner;
