import React from "react";
import { Container, Col, Row, Jumbotron } from "reactstrap";
import Navbar from "../../components/Navbar/Navbar";


const Home = () => {

  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1 className="display-3 text-center">Welcome to plebiSite!</h1>
            <p className="lead text-center">See how well congress represents you</p>
            <hr className="my-2" />
            <p className="lead text-center">Select a branch of congress to explore or log in to view your watchlist</p>
          <Navbar />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;

//potential future dev... create cards under the jumbotron with images and hrefs to the different areas of the site