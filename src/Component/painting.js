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

export default function Painting() {
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
      title: "1. What is the Re-painting procedure for interiors?",
      content:
        "The re-painting procedure for Interiors includes the following steps: 1) Check surface for dampness or water seepage. 2) Rectify the water seepage problem at the source. This could mean repairing leaking plumbing or cracks in the exterior walls. 3) Any loose plaster should be removed from the wall. Check for loose plaster by tapping on the walls. Any hollow sound means the plaster is loose. 4) Masonry work to be undertaken to fill up all cracks and repair broken plaster.",
    },
    {
      title: "2. What should be taken care of while painting?",
      content:
        "While Painting you need to keep in mind some Tips: 1) To save on costs, buy paint in the largest pack possible. 2) Stir and strain the paint thoroughly before application. 3) Rectify existing surface problems like cracks/seepage, etc before the actual painting process. 4) Ensure that the paint is bought from an authorized dealer. 5) Ensure that the shop has an additional quantity of paint in case you need it later (of course, at our dealers especially Colour World, you will not find this problem.) 6) If you are using thinners, primers and undercoats, ensure that they are of good quality. 7) Always clean spilt/splashed paint with a recommended thinner while it is still wet.",
    },
    {
      title: "3.  What precautions should be taken while painting?",
      content:
        "While painting, one must take a few precautions, such as: 1) Do not use cotton rags for cleaning, use soft synthetic or muslin cloth. Otherwise, threads will stick to the surface leading to a patchy, uneven finish. 2) Do not apply the next coat without the first one drying, otherwise you will have a wrinkly, patchy finish as well as loss of gloss. 3) Do not sandpaper very hard, otherwise there will be scratches, roughness and poor gloss. 4) Do not apply very thick coats, otherwise there will be a thick rough finish, resulting in slow drying. 5) Avoid mixing paints yourself. Buy readymade paints as far as possible, otherwise there will be patchy and inconsistent columns in the finish.",
    },
    {
      title: " 4. Should primer always be used before applying paint?",
      content:
        "Priming can be skipped while repainting using a flat paint (matte finish), though it is always advisable to apply paint on well prepped and primed surface. But never give it a miss when 1. Fresh painting a surface/drywall 2. Using gloss/high sheen paints 3. Painting a drastic colour change - lighter shade over a darker one and vice-versa. 4. Painting on repaired walls(patched areas) or walls in bad condition – paint flaking/peel off 5. Painting wood surfaces.",
    },
  ];

  const faqs1 = [
    {
      title: " 5. What are paint finishes available?",
      content:
        "Paints are available in following dead flat to high gloss finishes: · Matte · Semi Gloss or Satin or Soft Sheen · High Gloss or Super Sheen or Silky.",
    },
    {
      title: " 6. What is a matte finish?",
      content:
        "Matte finish is opaque and does not reflect light at all and thus can cover up minor imperfections. It is not washable or stain resistant, so only way to get rid of scribbles or stains, is to paint over them. Matte paint is least expensive of all emulsions and is the most economical solution for houses on rent.",
    },
    {
      title: " 7. How do I choose paint finishes for my house? ",
      content:
        "Rule of thumb says higher the sheen, higher the shine, more durable and easy to maintain it is and higher the cost. But, high sheen also reflects more light and hence imperfections like patches or reworked areas are easily noticeable. Gloss paints can be used in areas that demand attention and easy maintenance, like high traffic living room, kids room, kitchen and bath. If you have to impress your tenants with your freshly painted apartment and also save good cash, go for matte paints. They are easy to be painted over and do not show up minor imperfections as well. A smart tip is to use combination of paints: Matte finish on ceiling and products of desired sheen on walls.",
    },
    {
      title: " 8. What paint should I use for kitchen? ",
      content:
        "High gloss paints are well suited for kitchens because of their high washability and stain resistance.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex1, setActiveIndex1] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleAccordion1 = (index) => {
    setActiveIndex1((prevIndex) => (prevIndex === index ? null : index));
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
          categoryName: "Interior Painting",
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
          height: "70vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          borderTopRightRadius: "100px",
          borderBottomLeftRadius: "320px",
        };

        return (
          <div
            key={index}
            className={`row mb-5 bg_img ${
              includesCategory ? "painting-bg" : "cleaning-bg"
            }`}
            style={bgStyle}
          >
            <div className="col-md-7  p-5 ">
              <div className="row text-center">
                <p
                  className=" fntf fnt32 m-auto"
                  style={{
                    fontSize: "45px",
                    fontWeight: "bolder",
                  }}
                >
                  Revitalize Your Home with Our Expert Painting Services!
                </p>
                <p
                  className=" fntf fnt32 m-auto colr"
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Pay After Service | 100% Satisfaction or FREE Rework*
                </p>
                <Button
                  className="col-md-3 mt-5   m-auto fntf"
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
        );
      })}

      <div className="row text-center">
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
          Get your home festival-ready with our exclusive painting service
          offers at affordable price.
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
              <div className="row m-5 ">
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
      {/* <div className="mt-5 row">
        <p
          className="text-center fnt28 fntf"
          style={{ fontSize: "28px", fontWeight: "bolder" }}
        >
          Some of Our Awesome Works
        </p>
        <div className="slides row">
          <video autoPlay muted loop width={2000} height={400}>
            <source
              className="image visible"
              src={slidesData1[start1]?.image}
              type="video/mp4"
              alt={`Slide ${slidesData1[start1]?.id}`}
            />
          </video>
          <div className="row text-center">
            <span
              onClick={onPrevClick1}
              className="col-md-1 m-auto navButtosns "
            >
              <ArrowBackIcon
                style={{ color: "grey", fontSize: "35px", cursor: "pointer" }}
              />
            </span>
            <span
              onClick={onNextClick1}
              className="col-md-1 m-auto  navButtons "
            >
              <ArrowForwardIcon
                style={{ color: "grey", fontSize: "35px", cursor: "pointer" }}
              />
            </span>
          </div>
        </div>
        <div className="dotsControls text-center">
          <ul className="dotList">
            {slidesData1.map((slide, index) => (
              <li
                key={index}
                className={start1 === index ? "dot active" : "dot"}
                onClick={() => onDotClick1(index)}
              />
            ))}
          </ul>
        </div>
      </div> */}

      <div className="row m-auto">
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
        className="row mt-5 text-center  p-3 cs"
        style={{ borderRadius: "55px" }}
      >
        <div className="row">
          <p
            className="text-center fnt32 fntf"
            style={{ fontWeight: "bolder" }}
          >
            Elevate Your Festive Decor with Our Painting Magic.
          </p>
          <p className="text-center fnt24 fntf">
            {" "}
            Transform your home into a festive wonderland with our expert
            painting services.
          </p>
          <p className="text-center fnt24 fntf">
            {" "}
            Painting service Starting At Rs 7/-SQFT*
          </p>
        </div>
        <div className="row m-3">
          <Button
            className="col-md-3 m-auto"
            style={{
              backgroundColor: "#AE445A",
              border: "none",
            }}
          >
            BOOK NOW
          </Button>{" "}
        </div>
      </div>
      {/* <div className="mt-3">
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
      </div> */}

      <div
        className="row mt-5 bgclr"
        style={{
          height: "60vh",
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
                  Quality of the work done is very good and their suggestions
                  and advice as painting progressed, was valuable. Couple of
                  times we requested to change the colour after one or two
                  coats.
                  <p className="fntf text-end" style={{ fontWeight: "bold" }}>
                    Srihari
                  </p>
                </p>
                <p className="col-md-5 bclr card-container m-2 fnt14 p-2 fntf">
                  Great work by vijay home services on painting. Painters were
                  professionally and finished on time.
                  <p className="fntf text-end" style={{ fontWeight: "bold" }}>
                    Mounika Lingam
                  </p>
                </p>
                <p className="col-md-5 bclr card-container m-2 fnt14 p-2 fntf">
                  Excellent customer service. Trained and experienced
                  technicians. Good understanding of the customer requirement.
                  Timely execution and handing over. 
                  <p className="fntf text-end" style={{ fontWeight: "bold" }}>
                    Boby Thamoas
                  </p>
                </p>
                <p className="col-md-5 bclr card-container m-2 fnt14 p-2 fntf">
                  We got our flat painted and deep cleaned by Vijay Home
                  Services. Tenant vacated and it was poorly maintained. Badly
                  needed painting and cleaning before renting out again. 
                  <p className="fntf text-end" style={{ fontWeight: "bold" }}>
                    Rohan
                  </p>
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Card className="mt-5 ">
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
              <Button
                className="m-auto"
                style={{
                  backgroundColor: "#AE445A",
                  border: "none",
                }}
              >
                BOOK NOW
              </Button>
            </div>
          </div>
          <div className="col-md-6 m-auto">
            <p className="text-center fntf fnt28">Some of Our Awesome Works</p>
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
      </Card> */}

      <div className="row mt-5 m-auto">
        <p className="row text-center">
          <span className="fntf fnt28" style={{ fontWeight: "bold" }}>
            <img width={50} height={50} src="..\NImages\statrs.jpeg" alt="" />{" "}
            Real Stories, Real Satisfaction: Hear What Our Valued Customers Have
            to Say!
          </span>
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

      {/* <div className="row mt-5 m-auto">
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
      </div> */}
      <div className="row mt-5 ">
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

      <div className="row mt-5 m-auto">
        <p className="row ">
          <span className="col-md-2 "></span>
          <span
            className="col-md-9 fntf text-center"
            style={{ fontWeight: "bolder", fontSize: "35px" }}
          >
            Few More Happy Customers!
          </span>
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

      <div className="row container  mt-5 m-auto">
        <p className="text-center fnt32 fntf" style={{ fontWeight: "bolder" }}>
          {" "}
          Frequently Asked Questions
        </p>
        <div className="col-md-6  ">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion__section m-2 ">
              <div
                className={`m-auto accordion ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <p
                  className="accordion__title  clrpr"
                  style={{ fontWeight: "bold", padding: "16px 0px 0px 6px" }}
                >
                  {faq.title}
                </p>
                <span
                  style={{ marginRight: "25px", padding: "10px 0px 0px 6px" }}
                >
                  {activeIndex === index ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </span>
              </div>
              <div
                style={{
                  maxHeight: `${activeIndex === index ? "1000px" : "0px"}`,
                }}
                className="accordion__content"
              >
                <div className="accordion__text clrpr">{faq.content}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6  ">
          {faqs1.map((faq, index) => (
            <div key={index} className="accordion__section m-2 ">
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
      </div>

      {/* <div className="row mt-5">
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
      </div> */}

      <div className="row mt-5    " style={{ backgroundColor: "#ADC4CE" }}>
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
            Road Electronic City HSR Layout Jayanagar JP Nagar Hosur Road Indira
            Nagar
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              Sarjapur
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            ></li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              Road
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              Whitefield
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              Bannerghatta
            </li>{" "}
          </div>
        </div>
        <div className="row ">
          <p> © Copyright 2023 Vijay Home Services. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}