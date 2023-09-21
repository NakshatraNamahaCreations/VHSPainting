import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarsIcon from "@mui/icons-material/Stars";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from "axios";
import moment from "moment";
import Row from "react-bootstrap/Row";

const starColorClass = {
  red: "red-star",
  yellow: "yellow-star",
  green: "green-star",
};

const DetailsPage = (props) => {


  return (
    <>
      <Header />
      <div className="row m-auto">
        <div className="col-md-12">
          <div className="row mt-3 m-auto">
            <div className="col-md-4">
              <div className="row">
                <div
                  style={{
                    color: "black",
                    fontSize: "19px",
                    fontWeight: "bold",
                  }}
                ></div>

                <div className="row">
                {firstItem[Object.keys(firstItem)[0]].map((item, index) => (
              <li key={index}>{/* Display your item data here */}</li>
            ))}
                  <div className="col-md-4 mt-4 text-center">
                    {/* {filteredData[0]?.map((ele) => (
                      <>
                        <img
                          width={100}
                          height={100}
                          src={ele.img}
                          alt=""
                          style={{ borderRadius: "10px" }}
                        />
                        <p className="m-auto fntf" style={{ fontSize: "10px" }}>
                          {ele.categoryName}
                        </p>
                      </>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                <video autoPlay muted loop width="100%" height="350">
                  {/* <source src={categoryData.demovideo} type="video/mp4" /> */}
                </video>
              </div>
            </div>
          </div>

          <div className="row m-auto mt-3">
            <div className="col-md-5">
              <img
                style={{
                  width: "100%",
                  height: "auto",
                  marginTop: "5px",
                  borderRadius: "10px",
                }}
                src="..\assests\homebanner.jpeg"
                alt=""
              />
            </div>
            <div className="col-md-7 pb-5">
              <Card>
                <div className="row">
                  <div className="row">
                    <div className="row  p-3 ">
                      {/* {Object.entries(categoryData).map(
                        ([category, properties], index) => {
                          if (Array.isArray(properties)) {
                            return (
                              <div key={index}>
                                <ul>
                                  {properties.map((item, itemIndex) => {
                                    let starIcon,
                                      starColor = "",
                                      Rate = 0,
                                      unitrs = "";

                                    // if (item.rate >= 1000) {
                                    //   unitrs = "k";
                                    // } else if (item.rate >= 100000) {
                                    //   unitrs = "lakh";
                                    // } else if (item.rate >= 1000000) {
                                    //   unitrs = "M";
                                    // }
                                    if (item.rate >= 5000) {
                                      starColor = starColorClass.green;
                                    } else if (item.rate >= 2000) {
                                      starColor = starColorClass.yellow;
                                    } else {
                                      starColor = starColorClass.red;
                                    }

                                    if (item.rate <= 1000) {
                                      starIcon = <StarBorderIcon />;
                                      starColor = starColorClass.red;
                                      Rate = item.rate >= 1000 ? 1 : 0.5;
                                    } else if (item.rate <= 3000) {
                                      starIcon = <StarHalfIcon />;
                                      starColor = starColorClass.yellow;
                                      Rate = item.rate >= 2000 ? 2 : 1.5;
                                    } else {
                                      starIcon = <StarIcon />;
                                      starColor = starColorClass.green;
                                      Rate =
                                        item.rate >= 5000
                                          ? 5
                                          : item.rate >= 4000
                                          ? 4.8
                                          : item.rate >= 3000
                                          ? 4.5
                                          : 0;
                                    }

                                    return (
                                      <div
                                        key={itemIndex}
                                        className="row mb-3"
                                        style={{
                                          borderBottom: "1px solid grey",
                                        }}
                                      >
                                        <div className="col-md-8">
                                          <p
                                            style={{
                                              fontSize: "25px",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            {item.categoryName}
                                          </p>
                                          <p>
                                            <span
                                              className="starColor"
                                              style={{ color: "green" }}
                                            >
                                              {starIcon}
                                            </span>
                                            {Rate} ({item.rate} reviews)
                                          </p>
                                          <p>
                                            ₹ {item.price}
                                            {unitrs}
                                          </p>
                                          <li className="fntf">
                                            {item.discription}
                                          </li>{" "}
                                        </div>
                                        <div className="col-md-4 m-auto ">
                                          <div className="row">
                                            <img
                                              width={100}
                                              height={150}
                                              style={{ borderRadius: "10px" }}
                                              src={item.img}
                                              alt=""
                                            />
                                          </div>
                                          <div className="row mb-3">
                                            <Button
                                              style={{
                                                backgroundColor: "#AE445A",
                                                border: "none",
                                              }}
                                              onClick={() => handleShow(item)}
                                              className="col-md-5 p-1 mt-3 text-center m-auto"
                                            >
                                              Book Now
                                            </Button>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          } else {
                            return null;
                          }
                        }
                      )} */}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label> Name</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                placeholder="First name"
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label> Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                required
                type="text"
                placeholder="Email "
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label> Contact</Form.Label>
              <Form.Control
                onChange={(e) => setcontact1(e.target.value)}
                required
                type="text"
                placeholder="Contact"
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label> Address</Form.Label>
              <Form.Control
                onChange={(e) => setAddress(e.target.value)}
                required
                type="text"
                placeholder="Address"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label> category</Form.Label>
              <Form.Control
                value={serviceBookData?.categoryName}
                required
                type="text"
                placeholder="Category"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label> City</Form.Label>

              <Form.Select
                value={City}
                onChange={(e) => setCity(e.target.value)}
              >
                <option>Choose City</option>
                {Citydata?.map((ele) => (
                  <option value={ele.city}>{ele?.city}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addenquiry}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DetailsPage;
