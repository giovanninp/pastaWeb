import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

import ProductsList from '../../components/ProductsList';

export default class Products extends React.Component {
  render() {
    const { plates, sauces, parsleys } = this.props;
    return(
      <Container>
        <Row>
          <Col>
            <h3>Menu</h3>
          </Col>
        </Row>
        <Row id="plates-list">
          <Col>
            <ProductsList
              title={"Pratos"}
              products={plates}
            />
        </Col>
        </Row>,
      </Container>
    )
  }
}