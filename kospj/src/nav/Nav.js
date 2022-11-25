import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdOutlineRateReview, MdStar, MdFavorite, MdArrowUpward } from "react-icons/md";

export default function ColorSchemesExample() {
  return (
    <>
      <Navbar className="position-fixed top-0 end-0" bg="dark" variant="dark">
        <Container className="d-flex flex-column vh-100 justify-content-center">
          {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
          <Nav className="ml-auto d-flex flex-column">
            <Nav.Link href="#home">
              {" "}
              <MdOutlineRateReview style={{ fontSize: 30 }} />
            </Nav.Link>
            <Nav.Link href="#home">
              <MdStar style={{ fontSize: 30 }} />
            </Nav.Link>
            <Nav.Link href="#features">
              <MdFavorite style={{ fontSize: 30 }} />
            </Nav.Link>
            <Nav.Link href="#root">
              <MdArrowUpward style={{ fontSize: 30 }} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
