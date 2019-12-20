import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './style.css';

import ProductCard from '../productCard';

const productList = (props) => {
  console.log("ProductListComp |", props);

  const { title, products } = props;

  return(
    <Container fluid className="product-list">
    <Row>
      <Col>
        <h4>{title}</h4>
      </Col>
    </Row>
    <Row className="justify-content-md-center">


      { products.map((product) => (
        <ProductCard product={product} />
      )) }

    </Row>
    </Container>
  )
}

export default productList;