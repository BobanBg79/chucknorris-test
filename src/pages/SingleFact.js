import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ThemeContext from "../themes";
import { PageHeader, PageMainContent } from "../components";

const SingleFact = ({ match, switchTheme }) => {
  const theme = useContext(ThemeContext);
  const { id: factId } = match.params;
  const history = useHistory();
  const facts = useSelector((state) => state.facts);
  const singleFact =
    facts && facts.data && facts.data.find((result) => result.id === factId);

  if (!singleFact) history.push("/home");
  const { value, icon_url } = singleFact;
  return (
    <div
      className="page single-fact-page"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <PageHeader
        className="text-light bg-dark text-center"
        backButton
        switchTheme={switchTheme}
      >
        Single Fact Page
      </PageHeader>
      <Container>
        <Row className="justify-content-md-center no-gutters">
          <Col md={6} className="align-items-center p-2 position-relative">
            <PageMainContent>
              <div className="single-fact-container">
                <div className="image-container">
                  <img
                    src={icon_url}
                    className="img-thumbnail"
                    alt="suggestion-icon"
                  />
                </div>
                {value}
              </div>
            </PageMainContent>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleFact;
