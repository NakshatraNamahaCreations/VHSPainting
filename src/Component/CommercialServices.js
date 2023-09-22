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

export default function CommercialServices() {
  const location = useLocation();

  const selectedCategory = new URLSearchParams(location.search).get(
    "selectedCategory"
  );

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

  // const slidesData = [
  //   {
  //     id: 1,
  //     image: "/videos/production_id_4145662 (2160p).mp4",
  //   },
  //   {
  //     id: 2,
  //     image: "/videos/2500_03042_preview.mp4",
  //   },
  //   {
  //     id: 3,
  //     image: "/videos/2500_03042_preview.mp4",
  //   },
  //   {
  //     id: 4,
  //     image: "/videos/2500_03042_preview.mp4",
  //   },
  //   {
  //     id: 5,
  //     image: "/videos/2500_03042_preview.mp4",
  //   },
  // ];

  // const [start, setStart] = useState(0);

  // const onNextClick = () => {
  //   setStart((start + 1) % slidesData.length);
  // };

  // const onPrevClick = () => {
  //   setStart((start - 1 + slidesData.length) % slidesData.length);
  // };

  // const onDotClick = (index) => {
  //   setStart(index);
  // };

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
      title: "What is pest control?",
      content: "",
    },
    {
      title:
        "What are the different kind of pests that can affect my house/office?",
      content: "",
    },
    {
      title: "What is the difference between an ant and a termite?",
      content: "",
    },
    {
      title: " How can I identify a bed bug infestation and kill bed bugs?",
      content: "",
    },
    {
      title: " How effective are store bought traps for rat control?",
      content: "",
    },
    {
      title: "What are the signs that I need a pest control service?",
      content: "",
    },
    {
      title: "What are the types of pest control services offered?",
      content: "",
    },

    {
      title: "How much is it a hassle for me as a customer?",
      content: "",
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
      CommercialServices: [
        {
          id: 2,
          categoryName: "Office Cleaning",
          rate: "2025",
          price: "45",
          discription: [
            "Dusting of cushions, ceilings, telephones, desks, chairs and tables.",
            "The crew is not to be asked to displace furniture, fixtures or any kind of appliances .",
          ],

          img: "/NImages/ofccisful.jpg",
        },
        {
          id: 3,
          categoryName: "Office Carpet Cleaning",
          rate: "45",
          price: "45",
          discription: [
            "Carpet cleaning rejuvenates your floors, removing stains and allergens for a fresh and inviting space.",
            "Application of a foam based shampoo on the carpet using a sponge. ",
          ],

          img: "/NImages/ofcicarpet.jpg",
        },
        {
          id: 4,
          categoryName: "Office Chair Cleaning",
          rate: "345",
          price: "45",
          discription: [
            "Removal of dirt and dust.",
            "Office chair cleaning restores comfort and hygiene to your workspace seating.",
          ],

          img: "/NImages/ofchair.webp",
        },
      ],
      bgimg: "/NImages/cmrs.jpeg",
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
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          borderTopRightRadius: "100px",
          borderBottomLeftRadius: "320px",
        };

        return (
          <div
            key={index}
            className={`row psci mb-5 bg_img ${
              includesCategory ? "painting-bg " : "cleaning-bg"
            }`}
            style={bgStyle}
          >
            <div className="row  p-5 ">
              <div className="row text-center">
                <p
                  className="col-md-9  fntf fnt32 m-auto   pscic"
                  style={{
                    fontSize: "45px",
                    fontWeight: "bolder",
                  }}
                >
                  Elevate Your Business Environment with Us - Professional
                  Commercial Cleaning Solutions!.
                </p>
                <p
                  className=" fntf fnt32 m-auto"
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Pay After Service | 100% Satisfaction or FREE Rework*
                </p>
                <div className="row">
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
          Get your home festival-ready with our exclusive Commercial Cleaning
          service offers at affordable price.
        </p>
      </div>
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
              <div className="row m-5 " style={{ height: "70vh" }}>
                <div className="row  p-2  card-container ">
                  <div className="row text-center">
                    <img
                      className="m-auto"
                      style={{
                        width: "150px",
                        height: "100px",
                        borderRadius: "20px",
                      }}
                      alt=""
                      src={item.img}
                    />
                    <p className="fntf fnt24 text-center mt-2">
                      {item.categoryName}
                    </p>
                  </div>
                  <div className="row ">
                    {item.discription.map((ele) => (
                      <>
                        <span
                          style={{
                            fontWeight: "bolder",
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
                          {ele}
                        </span>
                      </>
                    ))}
                    {/* <div className="row text-center">
                      <p style={{ fontWeight: "bolder" }} className="m-2 fntf">
                        Starting @ Rs .{item.price}
                      </p>
                      <p
                        style={{ fontWeight: "bolder", marginLeft: "10px" }}
                        className="fntf "
                      >
                        [{item.Off}% Off]
                      </p>
                    </div> */}
                    {/* <p className="fntf">
                      <span
                        style={{ fontWeight: "bolder" }}
                        className={`me-2  ${starColor}`}
                      >
                        {" "}
                        {starIcon}
                      </span>
                      <span style={{ fontWeight: "bolder" }} className="me-2">
                        {Rate}
                      </span>
                      <span style={{ fontWeight: "bolder" }} className="me-2">
                        {item.rate}
                        {unitrs}(reviews)
                      </span>
                    </p> */}
                  </div>
                  <div className="row">
                    <Button
                      onClick={() => handleShow(item)}
                      style={{
                        backgroundColor: "#AE445A",
                        border: "none",
                      }}
                      className="col-md-5 p-1 mt-3 text-center m-auto fntf"
                    >
                      BOOK NOW
                    </Button>
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

      <div className="row m-auto mdQ">
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
          {/* <div className="col-md-2">
            <img src="" alt="" width={200} height={200} />
          </div> */}
        </div>
        {/* <div className="slides  m-auto">
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
            <ArrowForwardIosIcon style={{ color: "grey", fontSize: "35px" }} />
          </span>
        </div> */}
        {/* <div className="dotsControls">
          <ul className="dotList">
            {slidesData1.map((slide, index) => (
              <li
                key={index}
                className={start1 === index ? "dot active" : "dot"}
                onClick={() => onDotClick1(index)}
              />
            ))}
          </ul>
        </div>{" "} */}
      </div>

      <div
        className="row mt-5 text-center  p-3 cs mdQ"
        style={{ borderRadius: "55px" }}
      >
        <div className="row">
          <p
            className="text-center fnt32 fntf"
            style={{ fontWeight: "bolder" }}
          >
            Celebrate the Season of Success with a Fresh Workspace.
          </p>
          <p className="text-center fnt24 fntf">
            {" "}
            Unwrap our exclusive festival offers to ensure your workplace shines
            just as bright as your achievements.
          </p>
          <p className="text-center fnt24 fntf">
            {" "}
            Elevate Your Festive Decor with Our Painting Magic.
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

      <div
        className="row mt-5 bgclr mdQ"
        style={{
          // height: "60vh",
          borderTopLeftRadius: "80px",
          borderBottomRightRadius: "80px",
        }}
      >
        <div className="row p-2 ">
          <div className="row">
            <div className="col-md-5  m-auto">
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
            <div className="col-md-5  m-auto">
              <div className="row ">
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
                  Good work, last long standing stains on our sofa set is
                  totally cleared. Can be trusted. Good service, thanks.
                  <p className="fntf text-end" style={{ fontWeight: "bold" }}>
                    Vasu Javaraiah
                  </p>
                </p>
                <p className="col-md-5 bclr card-container m-2 fnt14 p-2 fntf">
                  Excellent!! We requested Office Cleaning Services and the
                  service provided was top quality. Would like to appreciate
                  Mr.Rahul and his team for their high quality cleaning service.
                  Truly commendable. Thanks a lot.
                  <p className="fntf text-end" style={{ fontWeight: "bold" }}>
                    Anup Morap
                  </p>
                </p>
                <p className="col-md-5 bclr card-container m-2 fnt14 p-2 fntf">
                  One of the best service I ever received, look at the below
                  pics it will tell about their service. Thank you so much for
                  the service!
                  <p className="fntf text-end" style={{ fontWeight: "bold" }}>
                    Satish Loganathan
                  </p>
                </p>
                <p className="col-md-5 bclr card-container m-2 fnt14 p-2 fntf">
                  Very supportive team and professional at work...James team has
                  done excellent Deep clean in my flat..Habron Avenue.
                  <p className="fntf text-end" style={{ fontWeight: "bold" }}>
                    Rohan
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
          <div className="   col-md-3 m-auto">
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
          <div className="row m-auto">
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
        <p className="row ">
          <span className="col-md-2 "></span>
          <span
            className="col-md-9 fntf text-center"
            style={{ fontWeight: "bolder", fontSize: "35px" }}
          >
            Few More Happy Customers!
          </span>
        </p>
        <div className="row">
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
