import Card from "react-bootstrap/Card";
import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

export default function Home1() {
  const [jobcompleted, setJobcompleted] = useState(0);
  const [statisfieldcustomer, setStatisfieldcustomer] = useState(0);
  const [repeatcustomer, setRepeastCustomer] = useState(0);
  const [Monthlyjob, setMonthlyJob] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (jobcompleted < 40) {
        setJobcompleted((prevJobCompleted) => prevJobCompleted + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [jobcompleted]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (statisfieldcustomer < 31) {
        setStatisfieldcustomer((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [statisfieldcustomer]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Monthlyjob < 4) {
        setMonthlyJob((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [Monthlyjob]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (repeatcustomer < 96) {
        setRepeastCustomer((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [repeatcustomer]);
  const slidesData = [
    {
      id: 1,
      image: "/assests/thumb-deep-cleaning.jpg",
    },
    {
      id: 2,
      image: "/assests/thumb-commercial-pest-control.jpg",
    },
    {
      id: 3,
      image: "/assests/repaiirng-banner.jpg",
    },
    {
      id: 4,
      image: "/assests/homepainting.jpg",
    },
  ];

  const [start, setStart] = useState(0);

  const onNextClick = () => {
    setStart((start + 1) % slidesData.length);
  };

  const onPrevClick = () => {
    setStart((start - 1 + slidesData.length) % slidesData.length);
  };

  const onDotClick = (index) => {
    setStart(index);
  };

  const slidesData1 = [
    {
      id: 1,
      image: "../assests/frame-vhspng-750.png",
    },
    {
      id: 2,
      image: "../assests/9001-005-750 (1).jpg",
    },
    {
      id: 3,
      image: "../assests/01-thumb.jpg",
    },
    {
      id: 4,
      image: "../assests/05-thumb (1).jpg",
    },
  ];

  const [start1, setStart1] = useState(0);

  const onNextClick1 = () => {
    setStart1((start1 + 1) % slidesData1.length);
  };

  const onPrevClick1 = () => {
    setStart1((start1 - 1 + slidesData1.length) % slidesData1.length);
  };

  const onDotClick1 = (index) => {
    setStart1(index);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const faqs = [
    {
      title: " What cleaning solutions do you use?",
      content:
        "Local Steam Cleaning makes sure that we do not do any impact to nature, environment and those dwelling in their homes and commercial spaces. Our team only uses eco-friendly. We only use cleaning agents and solutions that are environment-friendly to protect mother nature, ensure our client’s safety and protect our cleaners.",
    },
    {
      title: "What is your 100% satisfaction guarantee policy?",
      content:
        "We will not stop unless you are satisfied. Your satisfaction seals the deal and we always strive to keep you smiling in every cleaning appointment we do for you.",
    },
    {
      title: "What is your Pet Policy?",
      content:
        "For the safety and security of your pets please have dogs and cats crated or gated prior to our arrival.",
    },
    {
      title: "What work can I expect to be done ?",
      content:
        "Vijay Home Services Cleaners offer a systemised approach to our services. We would love the opportunity to show you through the types of services on offer during one of our friendly face-to-face consultations/quotations. Simply complete a booking form and we will be more than happy to show you how we can assist with your house cleaning needs.",
    },
    {
      title: "What is your 100% satisfaction guarantee policy?",
      content:
        "We will not stop unless you are satisfied. Your satisfaction seals the deal and we always strive to keep you smiling in every cleaning appointment we do for you. walls.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const data2 = [
    {
      "Deep Cleaning": ["Fridge cleaning", "safa shampoo"],
    },
    ,
    {
      "Vacant flat cleaning": ["Pest Control", "Kitchen Grounting"],
    },
    ,
    {
      "Bathroom cleaning": ["Pest Control", "Kitchen Grounting"],
    },
    ,
    {
      "Kitchen Cleaning": ["Pest Control", "Kitchen Grounting"],
    },
    {
      " Furniture and furnishings": [
        "Safa cleaning",
        "Carpet cleaning",
        "Bathroom cleaning AMC",
      ],
    },
    {
      " Sanitization": ["Home Steam Sanitization"],
    },
  ];

  const data1 = [
    {
      "Interior Painting": [],
    },
    {
      "Vaccant flat painting": [],
    },
    {
      "Exterior painting": [],
    },
    ,
    {
      " Interior texture painting": [],
    },
  ];
  const data3 = [
    {
      "Cocroach Control": ["Cocroach treatment"],
    },
    ,
    {
      " Bed bug control": ["Bed bug treatment"],
    },
    {
      "Terminate Control": [
        "Termite Treatment for bungalow",
        "Termite Treatment",
      ],
    },
  ];

  const data4 = [
    {
      "Corporate offices": [],
    },
    {
      " Banks": [],
    },
    {
      " Office buildings": [],
    },
    {
      " Food proccesing": [],
    },
    ,
  ];

  return (
    <>
      <div className="row">
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">
              {" "}
              <img
                style={{ width: "30px", height: "30px" }}
                src="..\assests\vhs-lgo.png"
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text style={{ color: "white" }} className="me-4">
                Register
              </Navbar.Text>
              <Navbar.Text style={{ color: "white" }} className="me-4">
                Help
              </Navbar.Text>
              <Navbar.Text style={{ color: "white" }} className="me-4">
                Login/Sign up
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="row  bg_img"></div>
      <div className="row mt-3 float-center m-auto">
        <div
          className={
            hoveredIndex === 0
              ? "col-md-2 me-2 active categoy_div1"
              : "col-md-2 me-2 categoy_div1"
          }
          onMouseEnter={() => handleHover(0)}
          style={{ width: "15rem", height: "10vh" }}
        >
          <Card.Body>
            <p>
              {" "}
              <span>
                <img
                  alt=""
                  className="me-2"
                  width={30}
                  height={30}
                  src="..\assests\homepainting.jpg"
                />
              </span>
              <span> Painting Service</span>
            </p>
          </Card.Body>{" "}
        </div>
        <div
          className={
            hoveredIndex === 1
              ? "col-md-2 me-2 active categoy_div1"
              : "col-md-2 me-2 categoy_div1"
          }
          onMouseEnter={() => handleHover(1)}
        >
          <Card.Body>
            <p>
              <span>
                <img
                  alt=""
                  className="me-2"
                  width={30}
                  height={30}
                  src="..\assests\House-Cleaning.jpg"
                />
              </span>
              <span> Cleaning</span>
            </p>
          </Card.Body>{" "}
        </div>{" "}
        <div
          className={
            hoveredIndex === 2
              ? "col-md-2 me-2 active categoy_div1"
              : "col-md-2 me-2 categoy_div1"
          }
          onMouseEnter={() => handleHover(2)}
        >
          <div>
            <p>
              {" "}
              <span>
                <img
                  alt=""
                  className="me-2"
                  width={30}
                  height={30}
                  src="..\assests\Ac-service.jpg"
                />
              </span>
              <span> Small Service</span>
            </p>
          </div>{" "}
        </div>
        <div
          className={
            hoveredIndex === 3
              ? "col-md-2 me-2 active categoy_div1"
              : "col-md-2 me-2 categoy_div1 "
          }
          onMouseEnter={() => handleHover(3)}
        >
          <div>
            <p>
              {" "}
              <span>
                <img
                  alt=""
                  className="me-2"
                  width={30}
                  height={30}
                  src="..\assests\food-Processing.jpg"
                />
              </span>
              <span>Commercial Service</span>
            </p>
          </div>{" "}
        </div>
      </div>
      <div className="col-md-12" onMouseLeave={handleMouseLeave}>
        {hoveredIndex === 0 && (
          <div className="col-md-12" style={{ padding: "10px" }}>
            <div className="row">
              {data1.map((item, index) => {
                const categoryKey = Object.keys(item)[0];
                const parentName = categoryKey; // Get the parent name
                const values = item[categoryKey];

                return (
                  <div key={index} className="col-md-2">
                    <p
                      style={{
                        fontFamily: "bold",
                        fontSize: "20px",
                        color: "blue",
                      }}
                    >
                      {parentName}
                    </p>
                    {values.map((value, valueIndex) => (
                      <li key={valueIndex} className="col-md-11 li_f">
                        <a href="#" className="amazon_fnt">
                          {value}
                        </a>
                      </li>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {hoveredIndex === 1 && (
          <div className="col-md-12" style={{ padding: "10px" }}>
            <div className="row">
              {data2.map((item, index) => {
                const categoryKey = Object.keys(item)[0];
                const parentName = categoryKey; // Get the parent name
                const values = item[categoryKey];

                return (
                  <div key={index} className="col-md-2">
                    <p
                      style={{
                        fontFamily: "bold",
                        fontSize: "20px",
                        color: "blue",
                      }}
                    >
                      {parentName}
                    </p>
                    {values.map((value, valueIndex) => (
                      <li key={valueIndex} className="col-md-11 li_f">
                        <a href="#" className="amazon_fnt">
                          {value}
                        </a>
                      </li>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {hoveredIndex === 2 && (
          <div className="col-md-12" style={{ padding: "10px" }}>
            <div className="row">
              {data3.map((item, index) => {
                const categoryKey = Object.keys(item)[0];
                const parentName = categoryKey; // Get the parent name
                const values = item[categoryKey];

                return (
                  <div key={index} className="col-md-2">
                    <p
                      style={{
                        fontFamily: "bold",
                        fontSize: "20px",
                        color: "blue",
                      }}
                    >
                      {parentName}
                    </p>
                    {values.map((value, valueIndex) => (
                      <li key={valueIndex} className="col-md-11 li_f">
                        <a href="#" className="amazon_fnt">
                          {value}
                        </a>
                      </li>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {hoveredIndex === 3 && (
          <div className="col-md-12" style={{ padding: "10px" }}>
            <div className="row">
              {data4.map((item, index) => {
                const categoryKey = Object.keys(item)[0];
                const parentName = categoryKey; // Get the parent name
                const values = item[categoryKey];

                return (
                  <div key={index} className="col-md-2">
                    <p
                      style={{
                        fontFamily: "bold",
                        fontSize: "20px",
                        color: "blue",
                      }}
                    >
                      {parentName}
                    </p>
                    {values.map((value, valueIndex) => (
                      <li key={valueIndex} className="col-md-11 li_f">
                        <a href="#" className="amazon_fnt">
                          {value}
                        </a>
                      </li>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="row mt-5 m-auto shadow-none p-5  bg-light rounded">
        <h6 className="text-center fnt28">Cleaning Service</h6>
        {/* {isVideoPlaying ? (
          <>
            <div
              style={{
                backgroundColor: "rgba(19, 19, 19, 0.479)",
                backdropFilter: "blur(10px)",
                zIndex: "100",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="col-md-8 shadow-sm p-3  bg-white rounded">
                <div style={{ textAlign: "end" }}>
                  <p
                    style={{
                      position: "absolute",
                      cursor: "pointer",
                      zIndex: "150",
                      fontSize: "30px",
                      margin: "auto",
                    }}
                    onClick={() => setVideoPlaying(false)}
                  >
                    X
                  </p>
                </div>
                <div className="row mt-5">
                  <div className="col-md-6">
                    <img
                      alt=""
                      width={300}
                      height={300}
                      src="..\assests\homepainting.jpg"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="m-2">
                      <img
                        alt=""
                        width={100}
                        height={100}
                        src="..\assests\thumb-interior-project-completion.jpg"
                      />
                      <span>Interior Painting</span>
                    </div>
                    <div className="m-2">
                      <img
                        alt=""
                        width={100}
                        height={100}
                        src="..\assests\thumb-exterior-cleaning.jpg"
                      />
                      <span>Exterior Painting</span>
                    </div>
                    <div className="m-2">
                      <img
                        alt=""
                        width={100}
                        height={100}
                        src="..\assests\homepainting.jpg"
                      />
                      <span>Office Painting</span>
                    </div>
                    <div className="m-2">
                      <img
                        alt=""
                        width={100}
                        height={100}
                        src="..\assests\homepainting.jpg"
                      />
                      <span>Factory painting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
          
          </>
        )} */}

        <div style={{ position: "relative" }}>
          <Carousel responsive={responsive}>
            <Card
              style={{ width: "18rem", height: "20vh" }}
              className=" m-1 m-auto"
            >
              <Card.Body>
                <p>
                  {" "}
                  <span className="me-2">
                    <img
                      alt=""
                      width={100}
                      height={100}
                      src="..\assests\thumb-express-cleaning.jpg"
                    />
                  </span>
                  <span>Interior Project completion </span>
                </p>
              </Card.Body>{" "}
            </Card>
            <Card
              style={{ width: "18rem", height: "20vh" }}
              className=" m-1 m-auto"
            >
              <Card.Body>
                <p>
                  {" "}
                  <img
                    alt=""
                    width={100}
                    height={100}
                    src="..\assests\thumb-deep-cleaning.jpg"
                  />
                  <span>Home Deep Cleaning</span>
                </p>
              </Card.Body>{" "}
            </Card>
            <Card
              style={{ width: "18rem", height: "20vh" }}
              className=" m-1 m-auto"
            >
              <Card.Body>
                <p>
                  {" "}
                  <img
                    alt=""
                    width={100}
                    height={100}
                    src="..\assests\thumb-Kitchen-Cleaning.jpg"
                  />
                  <span>Kitchen Cleaning</span>
                </p>
              </Card.Body>{" "}
            </Card>
            <Card
              style={{ width: "18rem", height: "20vh" }}
              className=" m-1 m-auto"
            >
              <Card.Body>
                <p>
                  {" "}
                  <img
                    alt=""
                    width={100}
                    height={100}
                    src="..\assests\thumb-vacant-flat-cleaning.jpg"
                  />
                  <span>Vacant Flat Cleaning</span>
                </p>
              </Card.Body>{" "}
            </Card>
          </Carousel>
        </div>
      </div>
      <div className="row mt-5 m-auto shadow-none p-5 bg-light rounded">
        <h6 className="text-center fnt28">Painting Service</h6>

        <div style={{ position: "relative" }}>
          <Carousel responsive={responsive}>
            <Card
              style={{ width: "18rem", height: "20vh" }}
              className=" m-1 m-auto"
            >
              <Card.Body>
                <p>
                  {" "}
                  <span className="me-2">
                    <img
                      alt=""
                      width={100}
                      height={100}
                      src="..\assests\thumb-interior-painting.jpg"
                    />
                  </span>
                  <span>Interior Painting</span>
                </p>
              </Card.Body>{" "}
            </Card>
            <Card
              style={{ width: "18rem", height: "20vh" }}
              className=" m-1 m-auto"
            >
              <Card.Body>
                <p>
                  {" "}
                  <img
                    alt=""
                    width={100}
                    height={100}
                    src="..\assests\thumb-interior-texture.jpg"
                  />
                  <span>Interior Texture painting</span>
                </p>
              </Card.Body>{" "}
            </Card>
            <Card
              style={{ width: "18rem", height: "20vh" }}
              className=" m-1 m-auto"
            >
              <Card.Body>
                <p>
                  {" "}
                  <img
                    alt=""
                    width={100}
                    height={100}
                    src="..\assests\thumb-interior-painting.jpg"
                  />
                  <span>Exterior Painting</span>
                </p>
              </Card.Body>{" "}
            </Card>
            <Card
              style={{ width: "18rem", height: "20vh" }}
              className=" m-1 m-auto"
            >
              <Card.Body>
                <p>
                  {" "}
                  <img
                    alt=""
                    width={100}
                    height={100}
                    src="..\assests\thumb-vacant-flat-painting.jpg"
                  />
                  <span>Vaccant Flat Painting</span>
                </p>
              </Card.Body>{" "}
            </Card>
          </Carousel>
        </div>
      </div>
      <Card className="mt-5 p-2">
        <div className="row ">
          <div className="col-md-6">
            <p className=" fnt28">About Vijay Home Services</p>
            <div className=" m-1 m-auto">
              <Card.Body>
                <Card.Text>
                  <p>
                    <span className="me-2">
                      <VerifiedUserIcon style={{ color: "#279EFF" }} />
                    </span>{" "}
                    <span>
                      Get top-quapty service at unbeatable prices from our ISO
                      certified company.
                    </span>
                  </p>
                  <p>
                    <span className="me-2">
                      <ThumbUpIcon style={{ color: "#279EFF" }} />
                    </span>
                    100% Satisfaction or FREE Rework*
                  </p>
                  <p>
                    <span className="me-2">
                      <GroupIcon style={{ color: "#279EFF" }} />
                    </span>
                    Trained Professionals | No Sub Contract
                  </p>
                  <p>
                    <span className="me-2">
                      <StarIcon style={{ color: "#279EFF" }} />
                    </span>
                    Trusted by 31+ Lakh customers | 15+ Years
                  </p>
                </Card.Text>
              </Card.Body>
            </div>
          </div>
          <div className="col-md-6 ">
            <p className="fnt28 text-center">Some of Our Awesome Works</p>
            <div className="slides text-center">
              <span onClick={onPrevClick} className="navButtosns">
                <ArrowBackIosIcon style={{ color: "grey", fontSize: "35px" }} />
              </span>
              <img
                width={300}
                height={300}
                src={slidesData[start].image}
                alt={`Slide ${slidesData[start].id}`}
                className="image visible m-auto"
              />
              <span onClick={onNextClick} className="navButtons">
                <ArrowForwardIosIcon
                  style={{ color: "grey", fontSize: "35px" }}
                />
              </span>
            </div>
            <div className="dotsControls text-center">
              <ul className="dotList">
                {slidesData.map((slide, index) => (
                  <li
                    key={index}
                    className={start === index ? "dot active" : "dot"}
                    onClick={() => onDotClick(index)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Card>
      <Card className="mt-5 ">
        {" "}
        <div className="row text-center">
          <div className="col-md-6 ">
            <p className="text-center fnt28">
              Watch the video to understand our process
            </p>
            <div className="text-center  m-auto">
              <iframe
                width="460"
                height="315"
                src="https://www.youtube.com/embed/hqrF3D2r_dk?si=iE-UpmhLdopBYd9y"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 m-auto">
            <p className="text-center fnt28">Awards and Recognition</p>
            <div className="slides  m-auto">
              <span onClick={onPrevClick1} className="navButtons">
                <ArrowBackIosIcon style={{ color: "grey", fontSize: "35px" }} />
              </span>
              <img
                width={300}
                height={300}
                src={slidesData1[start1].image}
                alt={`Slide ${slidesData1[start1].id}`}
                className="image visible"
              />
              <span onClick={onNextClick1} className="navButtons">
                <ArrowForwardIosIcon
                  style={{ color: "grey", fontSize: "35px" }}
                />
              </span>
            </div>
            <div className="dotsControls">
              <ul className="dotList">
                {slidesData1.map((slide, index) => (
                  <li
                    key={index}
                    className={start1 === index ? "dot active" : "dot"}
                    onClick={() => onDotClick1(index)}
                  />
                ))}
              </ul>
            </div>{" "}
          </div>
        </div>{" "}
      </Card>

      <div className="row mt-5 m-auto">
        <p className="text-center fnt28"> TESTIMONIES</p>
        <div style={{ width: "20%" }} className=" m-auto">
          <iframe
            width="260"
            height="215"
            src="https://www.youtube.com/embed/eP35Th4xzO4?si=wF0TAdpv1mVe3o_k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div style={{ width: "20%" }} className="  m-auto">
          <iframe
            width="260"
            height="215"
            src="https://www.youtube.com/embed/X56YP45fstQ?si=lO-cUj7R4SParJNG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div style={{ width: "20%" }} className="  m-auto">
          <iframe
            width="260"
            height="215"
            src="https://www.youtube.com/embed/6QIDGy_ysB0?si=WQIyMxi3XLqdZiVN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div style={{ width: "20%" }} className="  m-auto">
          <iframe
            width="260"
            height="215"
            src="https://www.youtube.com/embed/X56YP45fstQ?si=lO-cUj7R4SParJNG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="row mt-5 m-auto">
        <p className="text-center fnt28" style={{fontWeight:"bold"}}> Frequently Asked Questions</p>

        {faqs.map((faq, index) => (
          <div key={index} className="accordion__section m-1">
            <div
              className={`accordion ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <p className="accordion__title">
                {index + 1} . {faq.title}
              </p>
              <span style={{ marginLeft: "20px" }}>
                {activeIndex === index ? <CloseIcon /> : <AddIcon />}
              </span>
            </div>
            <div
              style={{
                maxHeight: `${activeIndex === index ? "1000px" : "0px"}`,
              }}
              className="accordion__content"
            >
              <div
                className="accordion__text"
                style={{ backgroundColor: "#F1EFEF" }}
              >
                {faq.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5 text-center  p-3 shadow-none p-5  bg-light rounded">
        <div className="row">
          <p className="col-md-7  m-auto fnt32 p-3">
            Some Facts about Vijay Home Service
          </p>
        </div>
        <div className="row m-3">
          <div className="col-md-2 m-auto">
            <div className="row">
              <p style={{ fontSize: "45px", fontWeight: "bolder" }}>
                {jobcompleted}M+
              </p>
              <p>COMPLETED JOBS</p>
            </div>{" "}
          </div>
          <div className="col-md-2 m-auto">
            <div className="row">
              <p style={{ fontSize: "45px", fontWeight: "bolder" }}>
                {statisfieldcustomer}M+
              </p>
              <p>SATISFIED CUSTOMERS </p>
            </div>{" "}
          </div>
          <div className="col-md-2 m-auto">
            <div className="row">
              <p style={{ fontSize: "45px", fontWeight: "bolder" }}>
                {Monthlyjob}k+
              </p>
              <p>MONTHLY JOB REQUEST </p>
            </div>{" "}
          </div>
          <div className="col-md-2 m-auto">
            <div className="row">
              <p style={{ fontSize: "45px", fontWeight: "bolder" }}>
                {repeatcustomer}%
              </p>
              <p>REPEAT CUSTOMERS </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5   p-3 " style={{ backgroundColor: "#ADC4CE" }}>
        <div className="row ">
          <li className="col-md-1" style={{ listStyle: "none" }}>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              Home
            </a>
          </li>{" "}
          |
          <li className="col-md-1" style={{ listStyle: "none" }}>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              Contact
            </a>{" "}
          </li>
          <li className="col-md-1" style={{ listStyle: "none" }}>
            {" "}
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              About Us
            </a>
          </li>{" "}
          |
          <li className="col-md-2" style={{ listStyle: "none" }}>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              Terms and Condition
            </a>{" "}
          </li>{" "}
          |
          <li className="col-md-2" style={{ listStyle: "none" }}>
            {" "}
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              Refund and Cancellation
            </a>{" "}
          </li>{" "}
          |
          <li className="col-md-4" style={{ listStyle: "none" }}>
            {" "}
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              Policy Privacy Policy VHS Logo Career Work with us
            </a>{" "}
          </li>
        </div>
        <p className="mt-2 m-auto" style={{ border: "1px solid #ECE8DD" }}></p>
        <div className="row ">
          <p> © Copyright 2023 Vijay Home Services. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
