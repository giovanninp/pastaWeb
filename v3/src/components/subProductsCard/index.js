import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const SubProductCard = (props) => {
    const { subproduct, price} = props;
    console.log("SubProdCardComponent |", props);
    return(
        <Card bg={"dark"}>
            <Card.Body>
                
            <Card.Title style={{fontWeight:"bold"}}>
                <Row>
                    <Col xs={8}>
                        { subproduct.name }
                    </Col>
                    <Col>
                        ${ subproduct.multiplier * price }/Kg
                    </Col>
                </Row>

            </Card.Title>
            <Card.Text>{ subproduct.description }</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SubProductCard;