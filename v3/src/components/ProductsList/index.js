import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css';

import ProductCard from '../productCard';

const productList = (props) => {
  console.log("ProductListComp |", props);
  const { title, products } = props;
  return(
    <div className="product-list">
    <Row>
      <Col>
        <h4>{title}</h4>
      </Col>
    </Row>
    <Row>
 
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
  
    </Row>
    </div>
  )
}

export default productList;