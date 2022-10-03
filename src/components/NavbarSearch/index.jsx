import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarSearch = () => {
  return (
    <nav className="navbar">
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="#">Natural pick</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="navbar" style={{ maxHeight: "100px" }} navbarScroll>
              <Link to={"home"}>
                <Nav.Link href="#action1">Home</Nav.Link>
              </Link>
              <Link to={"favoritesPhotos"}>
                <Nav.Link href="#action2">Fotos Favoritas</Nav.Link>
              </Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className="button">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavbarSearch;
