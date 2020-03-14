import React from "react";
import { Container, Row, Col } from "reactstrap";
// import Footer from "../../components/Footer/Footer";
import Capitol from "./capitol-blue.png"
import Logo from "./plebiSite-red.png";

const SplashPage = props => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <img src={Capitol} alt="capitol dome"/>
        </Col>
        <Col md={3}>
          <input 
            type="image" 
            alt="logo-button"
            src={Logo}>
          </input>
        </Col>
      </Row>
    </Container>
  );
};

export default SplashPage;
