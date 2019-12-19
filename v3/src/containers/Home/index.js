import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default class Home extends React.Component {
  render() {
    return(
      <Container>
        <Row>
          <Col>
            <h3>Home</h3>
          </Col>
        </Row>
      </Container>
    )
  }
}