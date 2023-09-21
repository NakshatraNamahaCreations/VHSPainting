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

import Form from "react-bootstrap/Form";

import Header from "./Header";

import { useLocation } from "react-router-dom";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarsIcon from "@mui/icons-material/Stars";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import Modal from "react-bootstrap/Modal";

import Col from "react-bootstrap/Col";
import axios from "axios";
import moment from "moment";
import Row from "react-bootstrap/Row";

export default function Home() {
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const [show, setShow] = useState(false);
  const [serviceBookData, setServiceBookData] = useState(null);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [contact1, setcontact1] = useState("");
  const [City, setCity] = useState("");
  const [Citydata, setCityData] = useState(null);

  const handleVideoClick = () => {
    setVideoPlaying(true);
  };
  const slidesData = [
    {
      id: 1,
      image:
        "https://www.vijayhomeservices.com/appliance_files/assets/img/Ac/Ac-installation.jpg",
    },
    {
      id: 2,
      image:
        "https://www.vijayhomeservices.com/appliance_files/assets/img/Ac/Ac-gas-charge.jpg",
    },
    {
      id: 3,
      image: "/assests/whatsapp-image-2021-09-11-at-10-13-44-pm.jpeg", // Adjusted path
    },
    {
      id: 4,
      image: "/assests/whatsapp-image-2021-09-11-at-10-13-45-pm--1-.jpeg", // Adjusted path
    },
    {
      id: 5,
      image: "/assests/whatsapp-image-2021-09-11-at-10-13-45-pm--2-.jpeg", // Adjusted path
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
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const faqs = [
    {
      title: "What cleaning solutions do you use?",
      content:
        "Local Steam Cleaning makes sure that we do not do any impact to nature, environment and those dwelling in their homes and commercial spaces. Our team only uses eco-friendly. We only use cleaning agents and solutions that are environment-friendly to protect mother nature, ensure our client’s safety and protect our cleaners. ",
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
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    getCity();
    getenquiry();
  }, []);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (item) => {
    setServiceBookData(item);
    setShow(true);
  };
  const location = useLocation();

  const selectedCategory = new URLSearchParams(location.search).get(
    "selectedCategory"
  );

  const data2 = [
    {
      Cleaning: [
        {
          id: 1,
          img: "/images/thumb-deep-cleaning.jpg",
          rate: "13004.2",
          price: "45",

          discription: [
            "final painting cost to be paid,only after you are satisfied",
            "Consult, quote and team of experts trained for high quality work",
          ],
          categoryName: "Home Deep Cleaning",
        },
        {
          id: 2,
          img: "/videos/Bathroom CleaningS.jpeg",
          rate: "5000.2",
          price: "45",
          discription: [
            "final painting cost to be paid,only after you are satisfied",
            "Consult, quote and team of experts trained for high quality work",
          ],
          categoryName: "Sofa Cleaning",
        },
        {
          id: 3,
          img: "/videos/thumb-Kitchen-Cleaning.jpg",
          rate: "404.2",
          price: "45",
          discription: [
            "final painting cost to be paid,only after you are satisfied",
            "Consult, quote and team of experts trained for high quality work",
          ],
          categoryName: "Mattress Cleaning",
        },
        {
          id: 4,
          img: "/videos/thumb-sofa-cleaning.jpg",
          rate: "404.2",
          price: "45",
          discription: [
            "final painting cost to be paid,only after you are satisfied",
            "Consult, quote and team of experts trained for high quality work",
          ],
          categoryName: "Carpet Cleaning",
        },
      ],
      bgimg: "/NImages/clen.jpg",
      demovideo: "/videos/production_id_4145662 (2160p).mp4",
      img1: "/images/thumb-deep-cleaning.jpg",
    },

    {
      Painting: [
        {
          id: 8,
          categoryName: "Exterior Painting",
          rate: "2025",
          price: "45",
          discription: [
            "Upto 100% Cashback on all painting booking above Rs 20,000/-",
            "Cashback points to be used book any other services in next 6 months ",
          ],

          img: "/NImages/exterios.jpg",
        },
        {
          id: 8,
          categoryName: "Office Painting",
          rate: "45",
          price: "45",
          discription: [
            "Upto 100% Cashback on all painting booking above Rs 20,000/-",
            "Cashback points to be used book any other services in next 6 months ",
          ],

          img: "/NImages/officepainit.jpg",
        },
        {
          id: 8,
          categoryName: "interior Painting",
          rate: "345",
          price: "45",
          discription: [
            "Upto 100% Cashback on all painting booking above Rs 20,000/-",
            "Cashback points to be used book any other services in next 6 months ",
          ],

          img: "/NImages/interior.jpg",
        },
        {
          id: 8,
          categoryName: "Factory Painting",
          rate: "5045",
          price: "45",
          discription: [
            "Upto 100% Cashback on all painting booking above Rs 20,000/-",
            "Cashback points to be used book any other services in next 6 months ",
          ],

          img: "/NImages/factory.jpg",
        },
      ],
      bgimg: "/NImages/pnt.avif",
      demovideo: "/videos/2500_03042_preview.mp4",
      img1: "/videos/1646230044496-56d688.webp",
    },
  ];

  const addenquiry = async (e) => {
    e.preventDefault();

    // if (!Name || !Email || !contact1 || !City) {
    //   alert("Please enter all fields");
    // } else {

    try {
      const formattedDate = moment().format("MM-DD-YYYY");

      const config = {
        url: "/addenquiry",
        method: "post",
        baseURL: "http://api.vijayhomeservicebengaluru.in/api",

        headers: { "content-type": "application/json" },
        data: {
          enquirydate: formattedDate,
          name: Name,
          contact1: contact1,
          email: Email,
          address: Address,
          category: selectedCategory,
          city: City,
          intrestedfor: serviceBookData?.categoryName,
        },
      };
      await axios(config).then(function (response) {
        if (response.status === 200) {
          console.log(response.data.data, "response.data.data");
          AddEnquiryfollowup(response.data.data);
        }
      });
    } catch (error) {
      console.error(error);
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
  };

  const AddEnquiryfollowup = async (data) => {
    try {
      const config = {
        url: "/addenquiryfollowup",
        method: "post",
        baseURL: "http://api.vijayhomeservicebengaluru.in/api",

        headers: { "content-type": "application/json" },
        data: {
          EnquiryId: data?.EnquiryId,
          category: data?.category,
          response: "New",
          desc: data?.intrestedfor,
          // folldate:
        },
      };
      await axios(config).then(function (response) {
        if (response.status === 200) {
          setShow(false);
          alert("Thank you for booking our sevice. We will contact you soon.");
        }
      });
    } catch (error) {
      console.error(error);
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
    // }
  };

  const getCity = async () => {
    try {
      let res = await axios.get(
        "http://api.vijayhomeservicebengaluru.in/api/master/getcity"
      );
      if (res.status === 200) {
        setCityData(res.data?.mastercity);
      }
    } catch (err) {
      alert("can't able to get");
    }
  };

  const getenquiry = async () => {
    try {
      let res = await axios.get(
        "http://api.vijayhomeservicebengaluru.in/api/getenquiry"
      );
      if (res.status === 200) {
        console.log("City", res.data);
      }
    } catch (err) {
      alert("can't able to get");
      console.log(err, "errcity");
    }
  };

  const filteredData = data2?.filter((ele) => {
    const category = Object?.keys(ele)[0];
    return selectedCategory?.includes(category);
  });

  const categoryData = filteredData[0][selectedCategory];

  return (
    <>
      <Header />

      {filteredData?.map((ele, index) => {
        const bgImg = ele.bgimg;
        const includesCategory = bgImg.includes(selectedCategory);

        const bgStyle = {
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          height: "70vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundColor: "#b4b4b3",
        };

        return (
          <div
            key={index}
            className={`row mb-5 bg_img ${
              includesCategory ? "painting-bg" : "cleaning-bg"
            }`}
            style={bgStyle}
          >
            {" "}
            <div className="row text-center p-5">
              <p className=" fnt28">
                India's top-rated cleaning service for trustworthiness.
              </p>
              <p className="">
                Pay After Service | 100% Satisfaction or FREE Rework*
              </p>
              <Button variant="outline-info m-auto" className="col-md-2">
                CALL US{" "}
              </Button>{" "}
            </div>
          </div>
        );
      })}

      <Carousel responsive={responsive}>
        {categoryData &&
          categoryData.map((item, index) => {
            let starIcon;
            let starColor = "";
            let Rate = 0;
            let unitrs = "";
            const starColorClass = {
              red: "red-star",
              yellow: "yellow-star",
              green: "green-star",
            };
            if (item.rate >= 1000) {
              unitrs = "k";
            } else if (item.rate >= 100000) {
              unitrs = "lakh";
            } else if (item.rate >= 1000000) {
              unitrs = "M";
            }

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
              <div className="row m-5 ">
                <div className="row  p-2  card-container ">
                  <div className="col-md-6">
                    <img
                      style={{ width: "220px", height: "300px" }}
                      alt=""
                      src={item.img}
                    />
                  </div>
                  <div className="col-md-6">
                    <p className="fntf fnt24">{item.categoryName}</p>
                    {item.discription.map((ele) => (
                      <li className="fntf listy">{ele}</li>
                    ))}
                    <p className="fntf">₹{item.price}</p>
                    <p className="fntf">
                      <span className={`me-2 ${starColor}`}> {starIcon}</span>
                      <span className="me-2">{Rate}</span>
                      <span className="me-2">
                        {item.rate}
                        {unitrs}(reviews)
                      </span>
                    </p>
                    <div className="row">
                      <Button
                        style={{
                          backgroundColor: "#AE445A",
                          border: "none",
                        }}
                        onClick={() => handleShow(item)}
                        className="col-md-5 p-1 mt-3 text-center m-auto fntf"
                      >
                        BOOK NOW
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </Carousel>

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
      <div className="mt-5 text-center">
        <p className="text-center fnt28">Some of Our Awesome Works</p>
        <div className="slides">
          <span onClick={onPrevClick} className="navButtosns">
            <ArrowBackIosIcon style={{ color: "grey", fontSize: "35px" }} />
          </span>
          <img
            width={800}
            height={400}
            src={slidesData[start].image}
            alt={`Slide ${slidesData[start].id}`}
            className="image visible"
          />

          <span onClick={onNextClick} className="navButtons">
            <ArrowForwardIosIcon style={{ color: "grey", fontSize: "35px" }} />
          </span>
        </div>
        <div className="dotsControls">
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
      <div className="mt-5">
        <div className="text-center">
          <Button variant="outline-primary">BOOK ON WHATSAPP</Button>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-center fnt28">About Vijay Home Services</p>
        <div>
          <Card className=" m-1 m-auto">
            <Card.Body className="row">
              <Card.Text className="col-md-6">
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
              <Card.Text className="col-md-6 m-auto">
                {" "}
                <Button className="col-md-6 " variant="outline-primary">
                  BOOK ON WHATSAPP
                </Button>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

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
            <div className="text-center mt-5">
              <Button className="m-auto" variant="outline-primary">
                BOOK ON WHATSAPP
              </Button>
            </div>
          </div>
          <div className="col-md-6 m-auto">
            <p className="text-center fnt28">Some of Our Awesome Works</p>
            <div className="slides  m-auto">
              <span onClick={onPrevClick1} className="navButtons">
                <ArrowBackIosIcon style={{ color: "grey", fontSize: "35px" }} />
              </span>
              <img
                width={400}
                height={400}
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
        <p className="text-center fnt28">Testimonials of Our Happy Customers</p>
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
            className="m-2"
            src="https://www.youtube.com/embed/hqrF3D2r_dk?si=iE-UpmhLdopBYd9y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div style={{ width: "20%" }} className="  m-auto">
          <iframe
            width="260"
            className="m-2"
            height="215"
            src="https://www.youtube.com/embed/hqrF3D2r_dk?si=iE-UpmhLdopBYd9y"
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
            src="https://www.youtube.com/embed/eP35Th4xzO4?si=wF0TAdpv1mVe3o_k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="row mt-5 m-auto">
        <p className="text-center fnt28">
          Our cleaning service follows a streamlined process for top-notch
          results.
        </p>
        {isVideoPlaying ? (
          <>
            <div></div>
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
            <div style={{ position: "relative" }}>
              <Carousel responsive={responsive}>
                <Card
                  onClick={handleVideoClick}
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
                          src="..\assests\homepainting.jpg"
                        />
                      </span>
                      <spn>Painting Service</spn>
                    </p>
                  </Card.Body>{" "}
                </Card>
                <Card
                  onClick={handleVideoClick}
                  style={{ width: "18rem", height: "20vh" }}
                  className=" m-1 m-auto"
                >
                  <Card.Body style={{ height: "19vh" }}>
                    <p>
                      <span className="me-2">
                        <img
                          alt=""
                          width={100}
                          height={100}
                          src="..\assests\House-Cleaning.jpg"
                        />
                      </span>
                      <spn>Cleaning</spn>
                    </p>
                  </Card.Body>{" "}
                </Card>
                <Card
                  onClick={handleVideoClick}
                  style={{ width: "18rem", height: "20vh" }}
                  className=" m-1 m-auto"
                >
                  <Card.Body style={{ height: "19vh" }}>
                    <p>
                      {" "}
                      <span className="me-2">
                        <img
                          alt=""
                          width={100}
                          height={100}
                          src="..\assests\corporate-office.jpg"
                        />
                      </span>
                      <spn>Small Service</spn>
                    </p>
                  </Card.Body>{" "}
                </Card>
                <Card
                  onClick={handleVideoClick}
                  style={{ width: "18rem", height: "20vh" }}
                  className=" m-1 m-auto"
                >
                  <Card.Body style={{ height: "19vh" }}>
                    <p>
                      {" "}
                      <span className="me-2">
                        <img
                          alt=""
                          width={100}
                          height={100}
                          src="..\assests\corporate-office.jpg"
                        />
                      </span>
                      <spn>Commercial Service</spn>
                    </p>
                  </Card.Body>{" "}
                </Card>
              </Carousel>
            </div>
          </>
        )}
      </div>

      <div className="row mt-5 m-auto">
        <p className="text-center fnt28">
          {" "}
          Our satisfied customers are a testament to our exceptional service and
          qualit
        </p>
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
        <p className="text-center fnt28"> FAQ's</p>

        {faqs.map((faq, index) => (
          <div key={index} className="accordion__section m-1">
            <div
              className={`accordion ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <p className="accordion__title">{faq.title}</p>
              <span style={{ marginLeft: "20px" }}>
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              style={{
                maxHeight: `${activeIndex === index ? "1000px" : "0px"}`,
              }}
              className="accordion__content"
            >
              <div className="accordion__text">{faq.content}</div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="row mt-5 text-center  p-3"
        style={{ backgroundColor: "#ADC4CE" }}
      >
        <div className="row">
          <p className="col-md-7  m-auto fnt32 p-3">
            Let professionals who truly care for your home handle your cleaning
            needs.
          </p>
        </div>
        <div className="row m-3">
          <Button className="col-md-3 m-auto" variant="outline-primary">
            BOOK NOW
          </Button>{" "}
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <img
            width={500}
            height={400}
            alt=""
            src="..\assests\whatsapp-image-2021-09-11-at-10-13-46-pm-750.webp"
          />
        </div>
        <div className="col-md-6 ">
          <h3>About Vijay Home Cleaning Services</h3>
          <p className="m-3">
            We are one of the oldest Cleaning service provider in India with 15+
            years of experience. All inhouse cleaner's and our company is ISO
            certified.
          </p>
          <p className="m-3">
            We care for our customers and customer satisfaction is our ultimate
            motto.
          </p>
          <p className="m-3">Our Journey So Far in Numbers</p>
          <li style={{ listStyle: "none" }}>
            {" "}
            <span className="me-2" style={{ color: "blue" }}>
              {" "}
              <ArrowCircleRightIcon />
            </span>
            4000000+ COMPLETED JOBS
          </li>
          <li style={{ listStyle: "none" }}>
            {" "}
            <span className="me-2" style={{ color: "blue" }}>
              {" "}
              <ArrowCircleRightIcon />{" "}
            </span>
            3100000+ SATISFIED CUSTOMERS
          </li>

          <li style={{ listStyle: "none" }}>
            {" "}
            <span className="me-2" style={{ color: "blue" }}>
              {" "}
              <ArrowCircleRightIcon />{" "}
            </span>{" "}
            4000+ MONTHLY JOB REQUES
          </li>
          <li style={{ listStyle: "none" }}>
            {" "}
            <span className="me-2" style={{ color: "blue" }}>
              {" "}
              <ArrowCircleRightIcon />{" "}
            </span>{" "}
            95% REPEAT CUSTOMERS
          </li>
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
