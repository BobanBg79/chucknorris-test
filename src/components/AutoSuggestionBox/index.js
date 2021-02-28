import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Spinner } from "../index";
import { textTruncate } from "../../utils";
import "./styles.css";

const AutoSuggestionBox = () => {
  const { data: factResults, fetch } = useSelector((state) => state.facts);

  const displaySuggestions = () => {
    if (!factResults || !factResults.length) return <div>No results...</div>;
    return factResults.slice(0, 6).map(({ id, icon_url, value }) => (
      <Link key={id} className="single-suggestion" to={`/single-fact/${id}`}>
        <div className="image-container">
          <img src={icon_url} className="img-thumbnail" alt="suggestion-icon" />
        </div>
        {textTruncate(value, 60, "...")}
      </Link>
    ));
  };

  return (
    <div id="auto-suggestion-container">
      {fetch ? (
        <Spinner />
      ) : (
        <div id="fun-fact-suggestions">{displaySuggestions()}</div>
      )}
    </div>
  );
};

export default AutoSuggestionBox;
