import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Container from "react-bootstrap/Container";
export default function Header() {
  return (
    <>
      {/* <Navbar style={{ backgroundColor: "rgb(108 25 84)" }}>
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img
              style={{ width: "50px", height: "50px" }}
              src="..\assests\vhs-lgo.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Container>
      </Navbar> */}
      <div
        className="row"
        style={{ backgroundColor: "#f5f5f5", padding: "8px" }}
      >
        <div className="col-md-6">
          <a href="/">
            <img
              style={{ width: "60px", height: "50px", paddingLeft: "10px" }}
              src="..\images\vhs-lgo.png"
              alt=""
            />{" "}
          </a>
        </div>
        <div className="col-md-6 m-auto" style={{ justifyContent: "center" }}>
          <div
            style={{
              textAlign: "end",
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
              paddingRight: "10px",
            }}
          >
            Vijay Home Services
          </div>
        </div>
      </div>
    </>
  );
}
