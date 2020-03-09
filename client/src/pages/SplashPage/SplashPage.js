import React from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../../components/Footer/Footer";
import logo from "./capitol-blue.png";

const SplashPage = props => {
  return (
    <Container>
          <img
            alt="plebiscite Button"
            src={logo}
          />
    </Container>
  );
};

export default SplashPage;
