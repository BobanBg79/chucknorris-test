import React from "react";
import { Icon } from "../index";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const SearchList = ({ searchList, onTermClick, currentSearchTerm }) => {
  const listToDisplay = [...searchList].reverse().slice(0, 10);
  return (
    <div className="search-terms-history-container">
      <h4>
        <Icon icon={faHistory} placement="left" />
        Search terms history:
      </h4>
      <ul>
        {listToDisplay.map((searchTerm, index) => (
          <li
            key={`${searchTerm}-${index}`}
            onClick={onTermClick(searchTerm)}
            className={`${currentSearchTerm === searchTerm ? "disabled" : ""}`}
          >
            {searchTerm}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
