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
      title: "What is the Re-painting procedure for interiors?",
      content:
        "The re-painting procedure for Interiors includes the following steps: 1) Check surface for dampness or water seepage. 2) Rectify the water seepage problem at the source. This could mean repairing leaking plumbing or cracks in the exterior walls. 3) Any loose plaster should be removed from the wall. Check for loose plaster by tapping on the walls. Any hollow sound means the plaster is loose. 4) Masonry work to be undertaken to fill up all cracks and repair broken plaster.",
    },
    {
      title: "What should be taken care of while painting?",
      content:
        "While Painting you need to keep in mind some Tips: 1) To save on costs, buy paint in the largest pack possible. 2) Stir and strain the paint thoroughly before application. 3) Rectify existing surface problems like cracks/seepage, etc before the actual painting process. 4) Ensure that the paint is bought from an authorized dealer. 5) Ensure that the shop has an additional quantity of paint in case you need it later (of course, at our dealers especially Colour World, you will not find this problem.) 6) If you are using thinners, primers and undercoats, ensure that they are of good quality. 7) Always clean spilt/splashed paint with a recommended thinner while it is still wet.",
    },
    {
      title: " What precautions should be taken while painting?",
      content:
        "While painting, one must take a few precautions, such as: 1) Do not use cotton rags for cleaning, use soft synthetic or muslin cloth. Otherwise, threads will stick to the surface leading to a patchy, uneven finish. 2) Do not apply the next coat without the first one drying, otherwise you will have a wrinkly, patchy finish as well as loss of gloss. 3) Do not sandpaper very hard, otherwise there will be scratches, roughness and poor gloss. 4) Do not apply very thick coats, otherwise there will be a thick rough finish, resulting in slow drying. 5) Avoid mixing paints yourself. Buy readymade paints as far as possible, otherwise there will be patchy and inconsistent columns in the finish.",
    },
    {
      title: "Should primer always be used before applying paint?",
      content:
        "Priming can be skipped while repainting using a flat paint (matte finish), though it is always advisable to apply paint on well prepped and primed surface. But never give it a miss when 1. Fresh painting a surface/drywall 2. Using gloss/high sheen paints 3. Painting a drastic colour change - lighter shade over a darker one and vice-versa. 4. Painting on repaired walls(patched areas) or walls in bad condition – paint flaking/peel off 5. Painting wood surfaces.",
    },
    {
      title: "  What are paint finishes available?",
      content:
        "Paints are available in following dead flat to high gloss finishes: · Matte · Semi Gloss or Satin or Soft Sheen · High Gloss or Super Sheen or Silky.",
    },
    {
      title: "  What is a matte finish?",
      content:
        "Matte finish is opaque and does not reflect light at all and thus can cover up minor imperfections. It is not washable or stain resistant, so only way to get rid of scribbles or stains, is to paint over them. Matte paint is least expensive of all emulsions and is the most economical solution for houses on rent.",
    },
    {
      title: "  How do I choose paint finishes for my house? ",
      content:
        "Rule of thumb says higher the sheen, higher the shine, more durable and easy to maintain it is and higher the cost. But, high sheen also reflects more light and hence imperfections like patches or reworked areas are easily noticeable. Gloss paints can be used in areas that demand attention and easy maintenance, like high traffic living room, kids room, kitchen and bath. If you have to impress your tenants with your freshly painted apartment and also save good cash, go for matte paints. They are easy to be painted over and do not show up minor imperfections as well. A smart tip is to use combination of paints: Matte finish on ceiling and products of desired sheen on walls.",
    },
    {
      title: "  What paint should I use for kitchen? ",
      content:
        "High gloss paints are well suited for kitchens because of their high washability and stain resistance.",
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
      Painting: [
        {
          id: 8,
          categoryName: "Exterior Painting",
          rate: "2025",
          price: "45",

          img: "/NImages/extriorpng.jfif",
        },
        {
          id: 8,
          categoryName: "Office Painting",
          rate: "45",
          price: "45",

          img: "/NImages/factorpng.jfif",
        },
        {
          id: 8,
          categoryName: "Interior Painting",
          rate: "345",
          price: "45",

          img: "/NImages/intrirorpng.jfif",
        },
        {
          id: 8,
          categoryName: "Factory Painting",
          rate: "5045",
          price: "45",

          img: "/NImages/windowupd.jfif",
        },
      ],
      bgimg: "/NImages/pnt.avif",
      demovideo: "/videos/2500_03042_preview.mp4",
      img1: "/videos/1646230044496-56d688.webp",
    },
  ];

  const addenquiry = async (e) => {
    e.preventDefault();

    if (!Name || !Email || !contact1 || !City) {
      alert("Please enter all fields");
    } else {
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
            reference1: "Landingpage",
            intrestedfor: serviceBookData?.categoryName || selectedcategory,
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
          window.location.href = "/WellcomePage";
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
  const [selectedcategory, setSelectedCategory] = useState("");

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
  const cities = [
    "Ahmedabad",
    "Bangalore",
    "Lucknow",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Mumbai",
    "Surat",
    "Vadodara",
    "Gurugram",
    "NCR",
    "Noida",
    "Sarjapur Road",
    "Whitefield",
    "Bannerghatta Road",
    "Electronic City",
    "HSR Layout",
    "Jayanagar",
    "JP Nagar",
    "Hosur Road",
    "Indira Nagar",
    "Koramangala",
    "Hesaraghatta Main Road",
    "Devanahalli",
    "Marathahalli",
    "Hebbal",
    "Kanakapura Road",
    "Anekal",
    "Hennur Road",
    "CV Raman Nagar",
    "Kalyan Nagar",
    "RT Nagar",
    "Jalahalli",
    "HRBR Layout",
    "BTM Layout",
    "Ramamurthy Nagar",
    "Brooke Field",
    "Jakkur",
    "Dollars Colony",
    "Abbigere",
    "Rajanukunte",
    "GM Palya",
    "Kundalahalli",
    "Madiwala",
    "Fraser Town",
    "Chandapur",
    "Gottigere",
    "BasavaNagar",
    "Nagarbhavi",
    "Belandur",
    "Hoskote",
    "Chamarajpet",
    "Richards Town",
    "Lavelle Road",
    "Kodigehalli",
    "Chikkajala",
    "Hanumanth Nagar",
    "Akshaya Nagar",
    "Thanisandra",
    "Sarjapur",
    "Hegde Nagar",
    "Jigani",
    "Industrial Area",
    "House Road",
    "Mathikere Rest",
    "Begur Road",
    "Rajajinagar",
    "MG Road",
    "HBR Layout",
    "Banaswadi",
    "Uttarahalli",
    "Airport Road",
    "Thippasandra",
    "Banashankari",
    "Bagalur",
    "KR Puram",
    "Bommanahalli",
    "OMBR Layout",
    "Mysore Road",
    "Silkboard",
    "RMV Extension Stage",
    "Old Madras Road",
    "Kasturi Nagar",
    "Tumkur Road",
    "Richmond Road",
    "Vidyaranyapura",
    "Mahadevapura",
    "Rajarajeshwari Nagar",
    "Malleshwaram",
    "AECS Layout",
    "Chikkaballapur",
    "Defence Colony",
    "Kanaka Nagar",
    "Hulimavu",
    "Thyagaraj Nagar",
    "Basaveshwaranagar",
    "Airport Area",
    "Kumaraswamy Layout",
    "Sanjay Nagar",
    "Hoskote",
    "Kudlu Gate",
    "RBI Layout",
    "Palace Road",
    "Hoodi Village",
    "Millers Road",
    "Huskur",
    "Vijaya Bank Layout",
    "Shanti Nagar",
    "Hebbal Kempapura",
    "Tippasandra",
    "Naganathapura",
    "Yeshwantpur",
    "Jeevan Bima Nagar",
    "Cox Town",
    "Ulsoor",
    "Benson Town",
    "ITPL",
    "Doddaballapur",
    "Kaggadaspura Nagwar",
    "Attibele",
    "Padmanabhanagar",
    "Vijayanagar",
    "Kengeri",
    "Peenya",
    "Magadi Road",
    "Nelamangala",
    "Sahakar Nagar",
    "Dodballapur Road",
    "Outer Ring Road",
    "Vigyan Nagar",
    "Basavanagudi",
    "Mallesh Palaya",
    "Peenya",
    "Cookes Town",
    "Old Airport Road",
    "Bellary Road",
    "Sadaramangala",
    "Anjanapura",
    "Majestic",
    "Vasanth Nagar",
    "Wilson Garden",
    "ISRO Layout",
    "HMT Layout",
    "Nagawara",
    "Doddaballapur Road",
    "Central Silk Board",
    "Nandi Hills",
    "GangaNagar",
    "Bommasandra",
    "Pai Layout",
    "Sadaramangala",
    "Prashanth Nagar",
    "Hennur",
    "Raj Bhavan",
    "VidyaNagar",
    "Bilekahalli",
    "Manek Chowk",
    "Chambal River",
    "Indraprastha",
  ];

  // const chunkArray = (arr, chunkSize) => {
  //   const chunkedArray = [];
  //   for (let i = 0; i < arr.length; i += chunkSize) {
  //     chunkedArray.push(arr.slice(i, i + chunkSize));
  //   }
  //   return chunkedArray;
  // };

  // const chunkedCities = chunkArray(cities, 9);

  return (
    <>
      <div className="col-md-12">
        <Header />
      </div>

      <div className="col-md-12 body1">
        <div className="row m-0">
          {" "}
          <Form className="shadow m-3 p-5 mb-5 bg-white rounded m-auto ">
            <div className="row m-auto p-5 ">
              <div className="row text-center">
                <h1 className=" fntf  " style={{ fontWeight: "bold" }}>
                  Festival Painting Offer
                </h1>
              </div>
              <p
                className="col-md-8 text-center fntf fnt16 m-auto"
                style={{ fontWeight: "bold", color: "#AE445A" }}
              >
                Painting service Starting At Rs 7/-SQFT*
              </p>

              <div className="row">
                <Button
                  onClick={handleShow}
                  className="col-md-3 mt-5 btnhr1 btn_mdQ1 m-auto fntf btnhr"
                >
                  GET FREE ESTIMATE
                </Button>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-5 p-2 text-center  mdQ  m-auto btnhr"
                style={{ border: "1px solid #AE445A" }}
              >
                <p
                  className="row fntf m-auto"
                  style={{ fontSize: "15px", fontWeight: "bolder" }}
                >
                  Upto 10% Cashback on all Painting Booking above Rs 20,000/-
                </p>
                <p
                  className="row fntf m-auto "
                  style={{ fontSize: "15px", fontWeight: "bolder" }}
                >
                  Use cashback points for booking services within 6 months.
                </p>
              </div>
            </div>
          </Form>
        </div>
      </div>

      <div className="Container  m-auto ">
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
                  {/* <div className="row " style={{ height: "120px" }}>
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
                        className="fntf row "
                      >
                        {item.Off}% Off
                      </Button>
                    </div>
                  </div> */}

                  <div className="row mt-2 mb-2">
                    <Button
                      onClick={() => handleShow(item)}
                      style={{
                        backgroundColor: "#AE445A",
                        border: "none",
                      }}
                      className="col-md-5 p-1 mt-1 text-center m-auto fntf btn_mdQ"
                    >
                      GET FREE QUOTE
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            className="row text-center fntf m-auto"
            style={{ fontWeight: "bolder" }}
          >
            GET FREE QUOTE{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label> Name</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label> Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                required
                type="text"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label> Phone No.</Form.Label>
              <Form.Control
                onChange={(e) => setcontact1(e.target.value)}
                required
                type="text"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label> Category</Form.Label>
              {serviceBookData?.categoryName === null ||
              serviceBookData?.categoryName === undefined ? (
                <Form.Select
                  value={selectedcategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categoryData &&
                    categoryData.map((ele) => (
                      <option>{ele.categoryName}</option>
                    ))}
                </Form.Select>
              ) : (
                <Form.Control
                  value={serviceBookData?.categoryName}
                  required
                  type="text"
                  placeholder="Category"
                />
              )}
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

          <Button
            onClick={addenquiry}
            style={{
              backgroundColor: "#AE445A",
              border: "none",
            }}
            className="col-md-5 p-2  text-center  fntf"
          >
            GET QUOTE
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container  mt-5 mdQ2">
        <div className="row m-auto  ">
          <p className="row text-center">
            <span className="fntf fnt28" style={{ fontWeight: "bold" }}>
              <img width={30} height={30} src="..\NImages\awards.jpeg" alt="" />{" "}
              Our Accolades Illuminate Our Commitment to Excellence
            </span>
          </p>

          <img
            className="col-md-3  "
            src="..\NImages\225eb768-eff3-4ddf-b190-2d869819011b.jfif"
            alt=""
            width={300}
            height={300}
          />

          <img
            className="col-md-3  "
            src="..\NImages\4d31001c-206d-403e-bdfa-b46868381a46.jfif"
            alt=""
            width={300}
            height={300}
          />

          <img
            className="col-md-3  "
            src="..\NImages\49fd3755-f3eb-4fc1-bc68-45bc1ddb7a05.jfif"
            alt=""
            width={300}
            height={300}
          />

          <img
            className="col-md-3  "
            src="..\NImages\c39780d3-5fdc-44ed-9bc8-c4c8455d14af.jfif"
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>

      <div
        className="container mt-5 bgclr   "
        style={{
          borderTopLeftRadius: "80px",
          borderBottomRightRadius: "80px",
        }}
      >
        <div className="row btn_g  mdQ2">
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
            <div className="row mdQ2">
              <p className="row ">
                <span className="col-md-2 ">
                  <img
                    width={30}
                    height={30}
                    src="..\NImages\f350ae1f-1bb7-4cb0-9ffc-5591756e38f9.jfif"
                    alt=""
                  />
                </span>
                <span className="col-md-9 fntf" style={{ fontWeight: "bold" }}>
                  Voices of Satisfaction: Our Happy Clients Speak
                </span>
              </p>
              <p className="col-md-5 bclr card-container m-2 fnt14 p-2 fntf">
                Quality of the work done is very good and their suggestions and
                advice as painting progressed, was valuable. Couple of times we
                requested to change the colour after one or two coats.
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
                Excellent customer service. Trained and experienced technicians.
                Good understanding of the customer requirement. Timely execution
                and handing over.
                <p className="fntf text-end" style={{ fontWeight: "bold" }}>
                  Boby Thamoas
                </p>
              </p>
              <p className="col-md-5 bclr card-container m-2 fnt14 p-2 fntf">
                We got our flat painted and deep cleaned by Vijay Home Services.
                Tenant vacated and it was poorly maintained. Badly needed
                painting and cleaning before renting out again.
                <p className="fntf text-end" style={{ fontWeight: "bold" }}>
                  Rohan
                </p>
              </p>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 ">
        <div className="row  ">
          <p className="row text-center">
            <span className="fntf fnt28" style={{ fontWeight: "bold" }}>
              <img width={50} height={50} src="..\NImages\statrs.jpeg" alt="" />{" "}
              Real Stories, Real Satisfaction: Hear What Our Valued Customers
              Have to Say!
            </span>
          </p>
          <div className="row  m-auto">
            <iframe
              className="col-md-3 mdc"
              height="215"
              src="https://www.youtube.com/embed/eP35Th4xzO4?si=wF0TAdpv1mVe3o_k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <iframe
              className="col-md-3 mdc"
              height="215"
              src="https://www.youtube.com/embed/hqrF3D2r_dk?si=iE-UpmhLdopBYd9y"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <iframe
              width="260"
              className="col-md-3 mdc"
              height="215"
              src="https://www.youtube.com/embed/hqrF3D2r_dk?si=iE-UpmhLdopBYd9y"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <iframe
              className="col-md-3 mdc"
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

      <div className="row mt-5 mdQ   m-auto">
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

      <div className="container mt-5 ">
        <div className="row mt-5 m-auto ">
          <p className="row m-auto">
            <span className="col-md-2 "></span>
            <span
              className="col-md-9 fntf text-center"
              style={{ fontWeight: "bolder", fontSize: "35px" }}
            >
              Few More Happy Customers!
            </span>
          </p>

          <iframe
            className="col-md-3 mdc"
            height="215"
            src="https://www.youtube.com/embed/eP35Th4xzO4?si=wF0TAdpv1mVe3o_k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            className="col-md-3 mdc"
            height="215"
            src="https://www.youtube.com/embed/X56YP45fstQ?si=lO-cUj7R4SParJNG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            className="col-md-3 mdc"
            height="215"
            src="https://www.youtube.com/embed/6QIDGy_ysB0?si=WQIyMxi3XLqdZiVN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            className="col-md-3 mdc"
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

      {/* <div className="row mt-5 m-auto " style={{ backgroundColor: "#ADC4CE" }}>
        <div className=" container">
          <div className="row grid-container3   p-2">
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Home
              </a>
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Contact
              </a>
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                About Us
              </a>
            </li>
            <li
              className="col-md-2"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Terms and Condition
              </a>
            </li>
            <li
              className="col-md-2"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Refund and Cancellation
              </a>
            </li>
            <li
              className="col-md-2"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Policy Privacy Policy
              </a>
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                VHS Logo
              </a>
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Career
              </a>
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Work with us
              </a>
            </li>
          </div>
          <p
            className="mt-2 m-auto"
            style={{ border: "1px solid #ECE8DD" }}
          ></p>

          <div className="container p-2">
            <div className="row ">
              <h3 className="fntf" style={{ fontWeight: "bolder" }}>
                INDIA
              </h3>
              <div class="grid-container  ">
                <>
                  {cities.map((city, cityIndex) => (
                    <>
                      <div class="grid-item p-1 mt-3">
                        {" "}
                        <span
                          className="fnt12 amazon_fnt li_f pdnl "
                          key={cityIndex}
                        >
                          {city}
                        </span>{" "}
                        <span className="homdat"></span>
                      </div>
                    </>
                  ))}
                </>
              </div>
            </div>
          </div>
          <p
            className="mt-2 m-auto"
            style={{ border: "1px solid #ECE8DD" }}
          ></p>

          <div className="row p-2">
            <p className="col-md-8  m-auto" style={{ fontSize: "13px" }}>
              <span className="fntf me-2">
                {" "}
                © Copyright 2023 Vijay Home Services. All rights reserved.
                Designed and Developed By
              </span>
              <a
                style={{ textDecoration: "none" }}
                className="fntf"
                href="https://nakshatranamahacreations.com/"
              >
                Nakshatra Namaha Creations
              </a>
            </p>
            <div className="col-md-4 ">
              <div className=" row grid-footer">
                <div className="col-md-2 m-auto ">
                  <img
                    width={100}
                    height={50}
                    src="..\NImages\Screenshot (19).png"
                    alt=""
                  />
                </div>
                <div className="col-md-2 m-auto ">
                  <img
                    style={{ borderRadius: "5px" }}
                    width={100}
                    height={50}
                    src="..\NImages\Screenshot (20).png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
       <div className="row mt-5 m-auto " style={{ backgroundColor: "#ADC4CE" }}>
        <div className=" container">
          <div className="row grid-container3   p-2">
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Home
              </a>
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Contact
              </a>
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                About Us
              </a>
            </li>
            <li
              className="col-md-2"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Terms and Condition
              </a>
            </li>
            <li
              className="col-md-2"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Refund and Cancellation
              </a>
            </li>
            <li
              className="col-md-2"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Policy Privacy Policy
              </a>
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                VHS Logo
              </a>
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Career
              </a>
            </li>
            <li
              className="col-md-1"
              style={{ fontSize: "12px", listStyleType: "none" }}
            >
              {" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Work with us
              </a>
            </li>
          </div>
          <p
            className="mt-2 m-auto"
            style={{ border: "1px solid #ECE8DD" }}
          ></p>

          <div className="container p-2">
            <div className="row ">
              <h3 className="fntf" style={{ fontWeight: "bolder" }}>
                INDIA
              </h3>
              <div class=" grid-container p-2 mt-3 ">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Ahmedabad
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Bangalore
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Lucknow
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Chennai
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Hyderabad
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Pune
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Mumbai
                  </a>

                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Surat
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Vadodara
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Gurugram
                  </a>

                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    NCR
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Noida
                  </a>

                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1 p-1  mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Sarjapur Road
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Whitefield
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Bannerghatta Road
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Electronic City
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    HSR Layout
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Jayanagar
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    JP Nagar
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Hosur Road
                  </a>

                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Indira Nagar
                  </a>

                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1 p-1 mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Koramangala
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Hesaraghatta Main Road
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Devanahalli
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Marathahalli
                  </a>

                  <span className="homdat"></span>
                </div>

                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Hebbal
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Kanakapura Road
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Anekal
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Hennur Road
                  </a>

                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1 p-1 mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    CV Raman Nagar
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Kalyan Nagar
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    RT Nagar
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Jalahalli
                  </a>

                  <span className="homdat"></span>
                </div>

                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    HRBR Layout
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    BTM Layout
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Ramamurthy Nagar
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Brooke Field
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Jakkur
                  </a>

                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1 p-1  mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Dollars Colony
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Abbigere
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Rajanukunte
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    GM Palya
                  </a>

                  <span className="homdat"></span>
                </div>

                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Kundalahalli
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Madiwala
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Fraser Town
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Chandapur
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Gottigere
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    BasavaNagar
                  </a>

                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1 p-1  mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Nagarbhavi
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Belandur
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Hoskote
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Chamarajpet
                  </a>

                  <span className="homdat"></span>
                </div>

                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Richards Town
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Lavelle Road
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Kodigehalli
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Chikkajala
                  </a>

                  <span className="homdat"></span>
                </div>

                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Hanumanth Nagar
                  </a>

                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1 p-1  mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Akshaya Nagar
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Thanisandra
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Sarjapur
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Hegde Nagar
                  </a>

                  <span className="homdat"></span>
                </div>

                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Jigani
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Industrial Area
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    House Road
                  </a>
                  <span className="homdat"></span>
                </div>

                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Mathikere Rest
                  </a>
                  <span className="homdat"></span>
                </div>

                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Begur Road
                  </a>

                  <span className="homdat"></span>
                </div>

                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Rajajinagar
                  </a>

                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1 p-1  mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    MG Road
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    HBR Layout
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Banaswadi
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Uttarahalli
                  </a>

                  <span className="homdat"></span>
                </div>

                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Airport Road
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Thippasandra
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Banashankari
                  </a>
                  <span className="homdat"></span>
                </div>

                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Bagalur
                  </a>
                  <span className="homdat"></span>
                </div>

                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    KR Puram
                  </a>

                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1 p-1  mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Bommanahalli
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    OMBR Layout
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Mysore Road
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Silkboard
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    RMV Extension Stage
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Old Madras Road
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Kasturi Nagar
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Tumkur Road
                  </a>
                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1 p-1  mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Richmond Road
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Vidyaranyapura
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Mahadevapura
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Rajarajeshwari Nagar
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Malleshwaram
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    AECS Layout
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Chikkaballapur
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Defence Colony
                  </a>
                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1 p-1  mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Kanaka Nagar
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Hulimavu
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Thyagaraj Nagar
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Basaveshwaranagar
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Airport Area
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Kumaraswamy Layout
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Sanjay Nagar
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Hoskote
                  </a>
                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1 p-1  mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Kudlu Gate
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    RBI Layout
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Palace Road
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Hoodi Village
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Millers Road
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Huskur
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Vijaya Bank Layout
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Shanti Nagar
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Hebbal Kempapura
                  </a>
                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1 p-1  mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Tippasandra
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Naganathapura
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Yeshwantpur
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Jeevan Bima Nagar
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Cox Town
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Ulsoor
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Benson Town
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    ITPL
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Doddaballapur
                  </a>
                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1 p-1  mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Kaggadaspura Nagwar
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Attibele
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Padmanabhanagar
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Vijayanagar
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Kengeri
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Peenya
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Magadi Road
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Nelamangala
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Sahakar Nagar
                  </a>
                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1 p-1  mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Dodballapur Road
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Outer Ring Road
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Vigyan Nagar
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Basavanagudi
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Mallesh Palaya
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Peenya
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Cookes Town
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Old Airport Road
                  </a>
                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1  mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Bellary Road
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Sadaramangala
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Anjanapura
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Majestic
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Vasanth Nagar
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Wilson Garden
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    ISRO Layout
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    HMT Layout
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Nagawara
                  </a>
                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1  mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Doddaballapur Road
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Central Silk Board
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Nandi Hills
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    GangaNagar
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Bommasandra
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Pai Layout
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Sadaramangala
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Prashanth Nagar
                  </a>
                  <span className="homdat"></span>
                </div>
              </div>
              <div class="grid-container1  mt-3">
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Hennur
                  </a>

                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Raj Bhavan
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    VidyaNagar
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Bilekahalli
                  </a>
                  <span className="homdat"></span>
                </div>
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Manek Chowk
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Chambal River
                  </a>
                  <span className="homdat"></span>
                </div>{" "}
                <div class="grid-item">
                  <a className="fnt12 amazon_fnt li_f pdnl " href="#">
                    Indraprastha
                  </a>
                  <span className="homdat"></span>
                </div>
              </div>{" "}
            </div>
          </div>
          <p
            className="mt-2 m-auto"
            style={{ border: "1px solid #ECE8DD" }}
          ></p>

          <div className="row p-2">
            <p className="col-md-8  m-auto" style={{ fontSize: "13px" }}>
              <span className="fntf me-2">
                {" "}
                © Copyright 2023 Vijay Home Services. All rights reserved.
                Designed and Developed By
              </span>
              <a
                style={{ textDecoration: "none" }}
                className="fntf"
                href="https://nakshatranamahacreations.com/"
              >
                Nakshatra Namaha Creations
              </a>
            </p>
            <div className="col-md-4 ">
              <div className=" row grid-footer">
                <div className="col-md-2 m-auto ">
                  <img
                    width={100}
                    height={50}
                    src="..\NImages\Screenshot (19).png"
                    alt=""
                  />
                </div>
                <div className="col-md-2 m-auto ">
                  <img
                    style={{ borderRadius: "5px" }}
                    width={100}
                    height={50}
                    src="..\NImages\Screenshot (20).png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
