import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './style.css';

const productCard = (props) => {
  const { product } = props;
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img src={ product.base_image_url } alt={ product.name } />
      <Card.ImgOverlay>
      <Card.Title>{ product.name }</Card.Title>
      <Card.Text>
        { product.base_description }
      </Card.Text>
      <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
    </Card>
  )
}

export default productCard;