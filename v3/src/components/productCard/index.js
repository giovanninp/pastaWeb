import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './style.css';

import SubProductCard from '../subProductsCard';

export default class productCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product:this.props.product,
      open: false
    }
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    let { open } = this.state;
    this.setState({open: (open ? false : true)});
  }

  size = {
    mini: { width: '18rem' },
    full: { width: "18rem", height:"25rem"}
  }

  render() {
    console.log("ProdCardComponent |", this.state);

    const { product, open } = this.state;
    return(
      <Card style={open ? this.size["full"] : this.size["mini"]}>
        <Card.Img src={ product.base_image_url } alt={ product.name } />
        <Card.ImgOverlay>
        <Card.Title>
          <Row>
            <Col xs={9}>
            { product.name }
            </Col>
            <Col>
              <Button variant={open ? "danger" : "success"}  onClick={this.handleOpen} id="openCardBtn">{open ? "x" : "..."}</Button>
            </Col>
          </Row>
        </Card.Title>
        <Card.Text>
          { product.base_description }
        </Card.Text>
          <Row>
            <Col>
            {
              open
              ? (
                  product.flavor.map((flavor)=>(
                    <SubProductCard subproduct={flavor} price={product.price} />
                  ))
                )
              : <></>
            }
            </Col>
        </Row>
      </Card.ImgOverlay>
      </Card>
    )
  }
}

