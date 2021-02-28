import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import ThemeContext, { themes } from "../../themes";
import "./styles.css";

const PageHeader = ({ children, className, backButton, switchTheme }) => {
  const history = useHistory();
  const theme = useContext(ThemeContext);

  return (
    <header className={`page-header${className ? ` ${className}` : ""}`}>
      {backButton && (
        <Button
          variant="primary"
          onClick={history.goBack}
          className="header-button back-button"
        >
          Back
        </Button>
      )}
      <div className="page-header-main-content">{children}</div>
      {switchTheme && (
        <Button
          variant="primary"
          onClick={switchTheme}
          className="header-button switch-theme-btn"
        >
          {theme === themes.dark ? "Light theme" : "Dark theme"}
        </Button>
      )}
    </header>
  );
};

export default PageHeader;
