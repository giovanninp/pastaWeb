import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

import ProductsList from '../../components/ProductsList';

export default class Products extends React.Component {
  render() {
    const { plates } = this.props;
    return(
      <Container>
        <Row>
          <Col>
            <h3>Menu</h3>
          </Col>
        </Row>
        <Row className="section justify-content-md-center" id="plates-list">
          <Col xs={12}>
            <ProductsList
              title={"Pratos"}
              products={plates}
            />
        </Col>
        </Row>
      </Container>
    )
  }
}