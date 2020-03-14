import React from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, Container } from "reactstrap";

const MemberSearch = props => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          {props.chamber === "House" ? (
            <h2> United States House of Representatives</h2>
          ) : (
            <h2> United States Senate</h2>
          )}
        </Col>
        <Col>
          <Form inline>
            <FormGroup >
              <Label for="searchTerm"> Search by State </Label>
              <Col>
                <Input
                  type="text"
                  name="searchTerm"
                  id="searchTerm"
                  onChange={props.handleInputChange}
                  value={props.searchTerm}
                />
                <Button>Search</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MemberSearch;