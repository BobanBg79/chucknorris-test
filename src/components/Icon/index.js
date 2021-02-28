import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, className, size = "sm" }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      size={size}
      className={`custom-icon ${className ? className : ""}`}
    />
  );
};

export default Icon;
