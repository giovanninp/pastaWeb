import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

const Topbar = (props) => {
  console.log("Topbar component |",props);
  const { handleChangePage } = props;
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed={"bottom"}>
        <Button value={"home"} onClick={handleChangePage}>Home</Button>
        <Button value={"products"} onClick={handleChangePage}>Menu</Button>
        <Button value={"cart"} onClick={handleChangePage}>Carrinho</Button>
    </Navbar>
  )
}

export default Topbar;