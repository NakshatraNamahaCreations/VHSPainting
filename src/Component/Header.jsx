import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";

import NavDropdown from "react-bootstrap/NavDropdown";
export default function Header() {
  const pathname = window.location.pathname;
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/" className="col-md-6">
            <img src="..\images\vhs-lgo.png" width={40} height={40} />
            <span
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {" "}
              Vijay Home Services
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
              {pathname === "/" || pathname === "/painting/" ? (
                <Nav.Link
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  href={`/painting/?selectedCategory=${encodeURIComponent(
                    "Painting"
                  )}`}
                >
                  Painting Services
                </Nav.Link>
              ) : null}

              {pathname === "/" || pathname === "/Cleaning/" ? (
                <Nav.Link
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  href={`/Cleaning/?selectedCategory=${encodeURIComponent(
                    "Cleaning"
                  )}`}
                >
                  Cleaning Services
                </Nav.Link>
              ) : null}
              {pathname === "/" || pathname === "/MiniServices/" ? (
                <Nav.Link
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  href={`/MiniServices/?selectedCategory=${encodeURIComponent(
                    "MiniServices"
                  )}`}
                >
                  Mini Services
                </Nav.Link>
              ) : null}
              {pathname === "/" || pathname === "/CommercialServices/" ? (
                <Nav.Link
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  href={`/CommercialServices/?selectedCategory=${encodeURIComponent(
                    "CommercialServices"
                  )}`}
                >
                  Commercial Services
                </Nav.Link>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
