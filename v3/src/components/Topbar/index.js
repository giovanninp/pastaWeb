import React from 'react';
import { Navbar, Button, Col, Row } from 'react-bootstrap';
import './style.css';

import menuIcon from '../../assets/icons/restaurant-menu.svg';
import homeIcon from '../../assets/icons/house.svg';

const Topbar = (props) => {
  console.log("Topbar component |",props);
  const { handleChangePage, session } = props;
  return (
    <Navbar collapseOnSelect expand="lg" bg="none" variant="dark" fixed={"bottom"}>
        <Button variant="none" value={"home"} onClick={handleChangePage}>
          <Row>
            <Col>
            <img className="menu-icon" alt="menu-icon" src={homeIcon} />
          </Col>
          </Row>
          <Row>
            <Col>
              {"Inicio"}
            </Col>
          </Row>
        </Button>
        <Button variant="none" value={"products"} onClick={handleChangePage}>
          <Row>
            <Col>
              <img className="menu-icon" alt="menu-icon" src={menuIcon} />
            </Col>
          </Row>
          <Row>
            <Col>
            {"Menu"}
            </Col>
          </Row>
        </Button>
        {
          session.logged 
          ? <Button value={"cart"} onClick={handleChangePage}>Carrinho</Button>
          : null
        }
    </Navbar>
  )
}

export default Topbar;