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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Form from "react-bootstrap/Form";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Header from "./Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarsIcon from "@mui/icons-material/Stars";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Modal from "react-bootstrap/Modal";

import Col from "react-bootstrap/Col";
import axios from "axios";
import moment from "moment";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";

export default function MiniServices() {
  const location = useLocation();

  const selectedCategory = new URLSearchParams(location.search).get(
    "selectedCategory"
  );

  const [show, setShow] = useState(false);
  const [serviceBookData, setServiceBookData] = useState(null);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [contact1, setcontact1] = useState("");
  const [City, setCity] = useState("");
  const [Citydata, setCityData] = useState(null);

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

  const slidesData1 = [
    {
      id: 1,
      image: "../videos/production_id_4145662 (2160p).mp4",
    },
    {
      id: 2,
      image: "../videos/production_id_4238551 (1080p).mp4",
    },
    {
      id: 3,
      image: "../videos/production_id_4145662 (2160p).mp4",
    },
    {
      id: 4,
      image: "../videos/production_id_4145662 (2160p).mp4",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
        "Local Steam Cleaning makes sure that we do not do any impact to nature, environment and those dwelling in their homes and commercial spaces. Our team only uses eco-friendly. We only use cleaning agents and solutions that are environment-friendly to protect mother nature, ensure our client’s safety and protect our cleaners.",
    },
    {
      title: "What is your Pet Policy?",
      content:
        "For the safety and security of your pets please have dogs and cats crated or gated prior to our arrival.",
    },
    {
      title: "Do you perform outside cleaning ?",
      content:
        "Yes. We provide sweeping and cobwebs removal only on balconies, garages, decks. If further cleaning is required, please discuss it during your booking.",
    },
    {
      title: "How long can you Finish the cleaning works? ",
      content:
        "The duration of cleaning will depend on the items that you require to be cleaned. Our team will give you the estimated time frame once we visit your place for live assessment.",
    },
    {
      title: " Can I trust my cleaning professional? ",
      content:
        "Yes. All our in-house cleaners are trustworthy and background checked. We make sure that you get the best, friendly and professional cleaners at all times.",
    },
    {
      title: "Do you clean carpets or rugs that are heavily stained? ",
      content:
        "Yes, it is one of our specialized service and we can efficiently remove them.",
    },

    {
      title:
        " Do you bring your own cleaning supplies, products and equipment? ",
      content:
        "Yes, we will bring our own cleaning supplies and materials to help you get rid of the hassle with the cleaning preparations. Our cleaner will arrive with all the equipment we need to perform and complete our cleaning operations. Should you require specific products to be used, you can let our team know and our cleaner will discuss our cleaning solutions and what you need as long as it works best, safe for your health and the environment.",
    },

    {
      title: "What work can I expect to be done ?",
      content:
        "Vijay Home Services Cleaners offer a systemised approach to our services. We would love the opportunity to show you through the types of services on offer during one of our friendly face-to-face consultations/quotations. Simply complete a booking form and we will be more than happy to show you how we can assist with your house cleaning needs.",
    },
  ];

  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);

  const toggleAccordion1 = (index) => {
    setActiveIndex1((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleAccordion2 = (index) => {
    setActiveIndex2((prevIndex) => (prevIndex === index ? null : index));
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

  const data2 = [
    {
      MiniServices: [
        {
          id: 1,
          img: "../NImages/nfridge.jfif",
          rate: "13004.2",
          price: "499",
          Off: "15",
          discription: [
            "Deep cleaning of one fridge's interiors and exteriors.",
            "Dry cleaning of the back side.",
          ],
          categoryName: "Fridge Cleaning",
        },
        {
          id: 4,
          img: "../NImages/ncarpet.jfif",
          rate: "404.2",
          price: "354",
          Off: "21",
          discription: [
            "Our high power suction equipment will suck and remove all the dust ",
            "We shampoo your carpet with chemical foam to remove and dislodge the finest particles of grime.",
          ],
          categoryName: "Carpet Cleaning",
        },
        {
          id: 3,
          img: "../NImages/Nwindow.jfif",
          rate: "404.2",
          price: "177",
          Off: "12",
          discription: [
            "Vacuuming of window tracks to extract dust.",
            "Wiping and cleaning of glass.",
          ],
          categoryName: "Window Cleaning",
        },
        {
          id: 2,
          img: "../NImages/Nsofa.jfif",
          rate: "5000.2",
          price: "1003",
          Off: "15",
          discription: [
            "Mechanized cleaning and extraction process for upholstered sofa.",
            "Dry Vacuum to extract loose dust and Applications of Chemical Foam & Scrubbing.",
          ],
          categoryName: "Sofa Cleaning",
        },
        {
          id: 3,
          img: "../NImages/nmatress.jfif",
          rate: "404.2",
          price: "589",
          Off: "26",
          discription: [
            "Dust extraction, Sanitization by steam, Extraction of Residual Moisture.",
            "Vacuuming of dust with vacuum cleaners with HEPA filters for maximum impact.",
          ],
          categoryName: "Mattress Cleaning",
        },
      ],
      bgimg: "/NImages/carpetdd.jpeg",
      demovideo: "/videos/production_id_4145662 (2160p).mp4",
      img1: "/images/thumb-deep-cleaning.jpg",
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

  let category = selectedCategory?.toLocaleLowerCase();
  //   let bgdta = filteredData.map((ele) =>
  //     ele.bgimg.includes(category) ? category : ""
  //   );
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
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          borderTopRightRadius: "100px",
          borderBottomLeftRadius: "320px",
        };

        return (
          <div
            key={index}
            // className={`row mdQ mb-5 bg_img ${
            //   includesCategory ? "painting-bg" : "cleaning-bg"
            // }`}
            // style={bgStyle}
          >
            <div className="col-md-12  p-5 ">
              <div className="row text-center">
                <p
                  className=" fntf fnt32 m-auto"
                  style={{
                    fontSize: "35px",
                    fontWeight: "bolder",
                  }}
                >
                  Small Space, Big Clean! Discover the Magic of Mini Cleaning
                  Services with Vijay Home Services Today!.
                </p>
                <p
                  className=" fntf fnt32 m-auto"
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Pay After Service | 100% Satisfaction or FREE Rework*
                </p>
                <div className="row  ">
                  <Button
                    className="col-md-2 mt-5   m-auto fntf"
                    style={{
                      backgroundColor: "#AE445A",
                      border: "none",
                      color: "colr",
                    }}
                  >
                    BOOK OUR SERVICE{" "}
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="row text-center mdQ">
        <p className="col-md-6 m-auto">
          <span className="m-auto">
            <img width={50} height={50} alt="" src="..\NImages\party-hat.png" />{" "}
          </span>
          <span
            style={{ fontSize: "35px", fontWeight: "bolder" }}
            className=" fntf m-auto"
          >
            Exclusive Festival Offers
          </span>
        </p>
        <p
          className=" fntf m-auto col-md-8"
          style={{ fontSize: "15px", fontWeight: "bolder" }}
        >
          Get your home festival-ready with our exclusive Mini Cleaning service
          offers at affordable price.
        </p>
      </div>
      <div className="row  m-auto ">
        <div className="col-md-12 m-auto">
          <div
            className="row m-auto mt-5"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
            {categoryData &&
              categoryData.map((item, index) => {
                const isEven = index % 2 === 0;
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
                  <div className="col-md-3 m-2  card-container">
                    <div className="row ">
                      <img
                        className="col-md-12 m-0 p-0 "
                        style={{
                          width: "440px",
                          height: "200px",
                          // borderRadius: "20px",
                        }}
                        alt=""
                        src={item.img}
                      />
                      <p className="fntf fnt24 text-center mt-2">
                        {item.categoryName}
                      </p>
                    </div>
                    <div className="row " style={{ height: "120px" }}>
                      {item.discription.map((ele) => (
                        <>
                          <span
                            style={{
                              // fontWeight: "bolder",
                              listStyleType: "disc",
                            }}
                          >
                            <span>
                              <img
                                style={{ width: "15px", height: "15px" }}
                                src="..\NImages\r.jfif"
                                alt=""
                              />
                            </span>{" "}
                            <span style={{ fontSize: "13px" }}>{ele}</span>
                          </span>
                        </>
                      ))}
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-8">
                        <p
                          style={{ fontWeight: "bolder", fontSize: "16px" }}
                          className=" m-2 fntf"
                        >
                          Starting @
                          <span
                            style={{
                              fontWeight: "bolder",
                              fontSize: "16px",
                              color: "#AE445A",
                            }}
                          >
                            Rs .{item.price}
                          </span>
                        </p>{" "}
                      </div>
                      <div className="col-md-4">
                        <Button
                          style={{
                            fontWeight: "bolder",
                            backgroundColor: "green",
                            border: "none",
                            borderRadius: "30px",
                          }}
                          className="fntf row"
                        >
                          {item.Off}% Off
                        </Button>
                      </div>
                    </div>

                    <div className="row mt-2 mb-2">
                      <Button
                        onClick={() => handleShow(item)}
                        style={{
                          backgroundColor: "#AE445A",
                          border: "none",
                        }}
                        className="col-md-5 p-1 mt-1 text-center m-auto fntf"
                      >
                        BOOK NOW
                      </Button>
                    </div>
                  </div>
                );
              })}
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

      <div className="row m-auto mt-5 mdQ">
        <p className="row text-center">
          <span className="fntf fnt28" style={{ fontWeight: "bold" }}>
            <img width={30} height={30} src="..\NImages\awards.jpeg" alt="" />{" "}
            Our Accolades Illuminate Our Commitment to Excellence
          </span>
        </p>

        <div className="row">
          <div className="col-md-3 p-1">
            <img
              src="..\NImages\4d31001c-206d-403e-bdfa-b46868381a46.jfif"
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="col-md-3 p-1">
            <img
              src="..\NImages\49fd3755-f3eb-4fc1-bc68-45bc1ddb7a05.jfif"
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="col-md-3 p-1">
            <img
              src="..\NImages\225eb768-eff3-4ddf-b190-2d869819011b.jfif"
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="col-md-3 p-1">
            <img
              src="..\NImages\c39780d3-5fdc-44ed-9bc8-c4c8455d14af.jfif"
              alt=""
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="mt-3 ">
        <div className="text-center">
          <Button
            style={{
              backgroundColor: "#AE445A",
              border: "none",
            }}
          >
            BOOK NOW
          </Button>
        </div>
      </div>

      <div
        className="row mt-5 bgclr "
        style={{
          borderTopLeftRadius: "80px",
          borderBottomRightRadius: "80px",
        }}
      >
        <div className="row p-2 mdQ">
          <div className="row">
            <div className="col-md-5 m-auto">
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bolder",
                  color: "black",
                }}
                className="text-center fnt28"
              >
                About Vijay Home Services
              </p>
              <p className="bclr p-1 ">
                <span className="me-2 ">
                  <VerifiedUserIcon
                    style={{ color: "#279EFF", fontSize: "15px" }}
                  />
                </span>{" "}
                <span className="m-auto fntf" style={{ fontSize: "14px" }}>
                  Get top-quapty service at unbeatable prices from our ISO
                  certified company.
                </span>
              </p>
              <p className="bclr p-2">
                <span className="me-2">
                  <ThumbUpIcon style={{ color: "#279EFF", fontSize: "15px" }} />
                </span>
                <span className="m-auto fntf" style={{ fontSize: "14px" }}>
                  100% Satisfaction or FREE Rework*
                </span>
              </p>
              <p className="bclr p-2">
                <span className="me-2">
                  <GroupIcon style={{ color: "#279EFF", fontSize: "15px" }} />
                </span>
                <span className="m-auto fntf" style={{ fontSize: "14px" }}>
                  Trained Professionals | No Sub Contract
                </span>
              </p>
              <p className="bclr p-2">
                <span className="me-2">
                  <StarIcon style={{ color: "#279EFF", fontSize: "15px" }} />
                </span>
                <span className="m-auto fntf" style={{ fontSize: "14px" }}>
                  Trusted by 31+ Lakh customers | 15+ Years
                </span>
              </p>
            </div>
            <div className="col-md-5 m-auto">
              <div className="row">
                <p className="row ">
                  <span className="col-md-2 ">
                    <img
                      width={30}
                      height={30}
                      src="..\NImages\f350ae1f-1bb7-4cb0-9ffc-5591756e38f9.jfif"
                      alt=""
                    />
                  </span>
                  <span
                    className="col-md-9 fntf"
                    style={{ fontWeight: "bold" }}
                  >
                    Voices of Satisfaction: Our Happy Clients Speak
                  </span>
                </p>
                <p className="col-md-5 bclr card-container m-2 fnt14 p-2 fntf">
                  Staff was very good at checking the cleaning area & put all
                  efforts in cleaning the house. Although the house was cleaned
                  before their service, it looked much much kind of new after
                  their service. Nice work by the team & I recommend their
                  services.
                  <p className="fntf text-end" style={{ fontWeight: "bold" }}>
                    Akhilesh bc
                  </p>
                </p>
                <p className="col-md-5 bclr card-container m-2 fnt14 p-2 fntf">
                  Vijay Home Services have done a good job of deep cleaning for
                  my Villa and kudos to KB team. Highly recommended, if you're
                  looking for a deep cleaning Services.
                  <p className="fntf text-end" style={{ fontWeight: "bold" }}>
                    Janardhan Chagaleti
                  </p>
                </p>
                <p className="col-md-5 bclr card-container m-2 fnt14 p-2 fntf">
                  The work was done neat and clean, customer service Aruna was
                  supportive and helped to get the service done. 5 people
                  arrived and all did a great job 👍. I really loved the
                  service. I would strongly recommend vijay home service to all
                  <p className="fntf text-end" style={{ fontWeight: "bold" }}>
                    Anil NS
                  </p>
                </p>
                <p className="col-md-5 bclr card-container m-2 fnt14 p-2 fntf">
                  Vijay home service, for KB and team: it’s wonderful job by KB
                  and Team. It’s a villa hose for me it’s a tremendous efforts
                  from morning 9 am to 8 pm.
                  <p className="fntf text-end" style={{ fontWeight: "bold" }}>
                    Bridgid Vithya
                  </p>
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 m-auto mdQ">
        <p className="row text-center">
          <span className="fntf fnt28" style={{ fontWeight: "bold" }}>
            <img width={50} height={50} src="..\NImages\statrs.jpeg" alt="" />{" "}
            Real Stories, Real Satisfaction: Hear What Our Valued Customers Have
            to Say!
          </span>
        </p>
        <div className="row m-auto">
          <div className="col-md-3 m-auto">
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
          <div className="col-md-3  m-auto">
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
          <div className="col-md-3  m-auto">
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
          <div className="col-md-3  m-auto">
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
      </div>

      <div className="row mt-5 mdQ">
        <div
          style={{ borderRadius: "40px" }}
          className="col-md-6 shadow-sm p-3 mb-5 bg-white "
        >
          <div className="row  m-auto">
            <p className="text-center">
              <span className="col-md-9 fntf">
                <img
                  className="me-2"
                  width={30}
                  height={30}
                  src="..\NImages\trustedimg.jfif"
                  alt=""
                />
                <span
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                  className="m-auto fntf"
                >
                  Our Proud Partners
                </span>
              </span>
            </p>
          </div>
          <div className="row m-auto ">
            <div className="col-md-2">
              <img
                src="..\NImages\df (1).jpeg"
                alt=""
                width={50}
                height={50}
                className="hvrc"
              />
            </div>
            <div className="col-md-2">
              <img
                src="..\NImages\df (3).jpeg"
                alt=""
                width={50}
                height={50}
                className="hvrc"
              />
            </div>
            <div className="col-md-2">
              <img
                src="..\NImages\df (4).jpeg"
                alt=""
                width={50}
                height={50}
                className="hvrc"
              />
            </div>{" "}
            <div className="col-md-2">
              <img
                src="..\NImages\df (5).jpeg"
                alt=""
                width={50}
                height={50}
                className="hvrc"
              />
            </div>
            <div className="col-md-2">
              <img
                src="..\NImages\df (6).jpeg"
                alt=""
                width={50}
                height={50}
                className="hvrc"
              />
            </div>
            <div className="col-md-2">
              <img
                src="..\NImages\df (7).jpeg"
                alt=""
                width={50}
                height={50}
                className="hvrc"
              />
            </div>
          </div>
        </div>
        <div
          style={{ borderRadius: "40px" }}
          className="col-md-6 shadow-sm p-3 mb-5 bg-white  "
        >
          <div className="row  m-auto">
            <p className="text-center">
              <span className="col-md-9 fntf">
                <img
                  className="me-2"
                  width={30}
                  height={30}
                  src="..\NImages\id.jpeg"
                  alt=""
                />
                <span
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                  className="m-auto fntf"
                >
                  Milestones
                </span>
              </span>
            </p>
          </div>

          <div className="row  ">
            <div className="col-md-2 m-auto">
              <div className="row">
                <p style={{ fontSize: "25px", fontWeight: "bolder" }}>
                  {jobcompleted}M+
                </p>
                <p
                  className="fntf"
                  style={{ fontSize: "10px", fontWeight: "bold" }}
                >
                  COMPLETED JOBS
                </p>
              </div>{" "}
            </div>
            <div className="col-md-2 m-auto">
              <div className="row">
                <p style={{ fontSize: "25px", fontWeight: "bolder" }}>
                  {statisfieldcustomer}M+
                </p>
                <p
                  className="fntf"
                  style={{ fontSize: "10px", fontWeight: "bold" }}
                >
                  SATISFIED CUSTOMERS{" "}
                </p>
              </div>{" "}
            </div>
            <div className="col-md-2 m-auto">
              <div className="row">
                <p style={{ fontSize: "25px", fontWeight: "bolder" }}>
                  {Monthlyjob}k+
                </p>
                <p
                  className="fntf"
                  style={{ fontSize: "10px", fontWeight: "bold" }}
                >
                  MONTHLY JOB REQUEST{" "}
                </p>
              </div>{" "}
            </div>
            <div className="col-md-2 m-auto">
              <div className="row">
                <p style={{ fontSize: "25px", fontWeight: "bolder" }}>
                  {repeatcustomer}%
                </p>
                <p
                  className="fntf"
                  style={{ fontSize: "10px", fontWeight: "bold" }}
                >
                  REPEAT CUSTOMERS{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 m-auto mdQ">
        <p className="row m-auto">
          <span className="col-md-2 "></span>
          <span
            className="col-md-9 fntf text-center"
            style={{ fontWeight: "bolder", fontSize: "35px" }}
          >
            Few More Happy Customers!
          </span>
        </p>
        <div className="row m-auto">
          <div className="col-md-3 m-auto">
            <iframe
              width="260"
              height="215"
              src="https://www.youtube.com/embed/qR1-_0JcXjw?si=UKA-vJ_e1dpXy8Wn"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-md-3  m-auto">
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
          <div className="col-md-3  m-auto">
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
          <div className="col-md-3  m-auto">
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
      </div>

      <div className="row container  mt-5 m-auto">
        <p className="text-center fnt32 fntf" style={{ fontWeight: "bolder" }}>
          {" "}
          Frequently Asked Questions
        </p>

        <div className="col-md-6  ">
          {faqs.slice(0, 4).map((faq, index) => (
            <div key={index} className="accordion__section m-2">
              <div
                className={`m-auto accordion ${
                  activeIndex1 === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion1(index)}
              >
                <p
                  className="accordion__title  clrpr"
                  style={{ fontWeight: "bold", padding: "16px 0px 0px 6px" }}
                >
                  <span className="me-2"> {index + 1} .</span>
                  {faq.title}
                </p>
                <span
                  style={{ marginRight: "25px", padding: "10px 0px 0px 6px" }}
                >
                  {activeIndex1 === index ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </span>
              </div>
              <div
                style={{
                  maxHeight: `${activeIndex1 === index ? "1000px" : "0px"}`,
                }}
                className="accordion__content"
              >
                <div className="accordion__text clrpr">{faq.content}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6  ">
          {faqs.slice(4).map((faq, index) => (
            <div key={index} className="accordion__section m-2">
              <div
                className={`m-auto accordion ${
                  activeIndex2 === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion2(index)}
              >
                <p
                  className="accordion__title  clrpr"
                  style={{ fontWeight: "bold", padding: "16px 0px 0px 6px" }}
                >
                  <span className="me-2"> {index + 5} .</span>
                  {faq.title}
                </p>
                <span
                  style={{ marginRight: "25px", padding: "10px 0px 0px 6px" }}
                >
                  {activeIndex2 === index ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </span>
              </div>
              <div
                style={{
                  maxHeight: `${activeIndex2 === index ? "1000px" : "0px"}`,
                }}
                className="accordion__content"
              >
                <div className="accordion__text clrpr">{faq.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="row mt-5 text-center  p-3 cs"
        style={{ borderRadius: "55px" }}
      >
        <div className="row">
          <p
            className="text-center fnt32 fntf"
            style={{ fontWeight: "bolder" }}
          >
            Cleanliness, the Ultimate Festive Tradition.
          </p>
          <p className="text-center fnt24 fntf">
            {" "}
            Celebrate the season with a clean and clutter-free home courtesy of
            Vijay Home Services.
          </p>
        </div>
        <div className="row m-3">
          <Button
            className="col-md-2 m-auto"
            style={{
              backgroundColor: "#AE445A",
              border: "none",
            }}
          >
            BOOK NOW
          </Button>{" "}
        </div>
      </div>

      <div className="row mt-5" style={{ backgroundColor: "#ADC4CE" }}>
        <div className="row " style={{ display: "flex" }}>
          <li
            className="col-md-1"
            style={{ fontSize: "12px", listStyleType: "none" }}
          >
            Home
          </li>
          <li
            className="col-md-1"
            style={{ fontSize: "12px", listStyleType: "none" }}
          >
            Contact
          </li>
          <li
            className="col-md-1"
            style={{ fontSize: "12px", listStyleType: "none" }}
          >
            About Us
          </li>
          <li
            className="col-md-2"
            style={{ fontSize: "12px", listStyleType: "none" }}
          >
            Terms and Condition
          </li>
          <li
            className="col-md-2"
            style={{ fontSize: "12px", listStyleType: "none" }}
          >
            Refund and Cancellation
          </li>
          <li
            className="col-md-2"
            style={{ fontSize: "12px", listStyleType: "none" }}
          >
            {" "}
            Policy Privacy Policy
          </li>
          <li
            className="col-md-1"
            style={{ fontSize: "12px", listStyleType: "none" }}
          >
            {" "}
            VHS Logo
          </li>
          <li
            className="col-md-1"
            style={{ fontSize: "12px", listStyleType: "none" }}
          >
            {" "}
            Career
          </li>
          <li
            className="col-md-1"
            style={{ fontSize: "12px", listStyleType: "none" }}
          >
            {" "}
            Work with us
          </li>
        </div>
        <p className="mt-2 m-auto" style={{ border: "1px solid #ECE8DD" }}></p>

        <div className="row">
          <h3>INDIA</h3>
          <div className="row " style={{ display: "flex" }}>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              Ahmedabad
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              Bangalore
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              Lucknow{" "}
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              Chennai
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              Hyderabad
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              Pune
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              Mumbai
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              Surat
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              Vadodara
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              Gurugram
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              NCR
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              Noida
            </li>
          </div>
        </div>
        <p className="mt-2 m-auto" style={{ border: "1px solid #ECE8DD" }}></p>
        <div className="row p-3">
          <p className="col-md-6 fntf" style={{ fontSize: "14px" }}>
            {" "}
            © Copyright 2023 Vijay Home Services. All rights reserved.
          </p>
          <div className="col-md-6 ">
            <div className="row m-auto  ">
              <div className="col-md-2 m-2 text-end">
                <img width={100} height={50} src="..\NImages\aps.jfif" alt="" />
              </div>
              <div className="col-md-2 m-2 text-end">
                <img width={100} height={50} src="..\NImages\pl.jfif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
