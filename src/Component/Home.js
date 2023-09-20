// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";

// export default function HomePage() {
// const [isVideoPlaying, setVideoPlaying] = useState(false);

// const handleVideoClick = () => {
//   setVideoPlaying(true);
// };

//   return (
//     <>
//       <div className="row">
//         <Navbar className=" bg-red">
//           <Container>
//             <Navbar.Brand href="#home">
//               <img src="../assests/vhs-lgo.png" alt="" />
//             </Navbar.Brand>
//           </Container>
//         </Navbar>{" "}
//       </div>{" "}
//       <div
//         className="row bg_img"
//         style={{ backgroundColor: "#070606", height: "75vh" }}
//       >
//         {isVideoPlaying ? (
//           <>
//             <div
//               style={{
//                 position: "absolute",
//                 cursor: "pointer",
//                 zIndex: "150",
//                 top: "100",
//                 textAlign: "end",
//               }}
//             >
//               <p
//                 onClick={() => setVideoPlaying(false)}
//                 style={{
//                   fontSize: "40px",
//                   cursor: "pointer",
//                   color: "white",
//                 }}
//               >
//                 X
//               </p>
//             </div>
//             <div
//               style={{
//                 backgroundColor: "#070606)",
//                 backdropFilter: "blur(10px)",
//                 zIndex: "100",
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <iframe
//                 width="1200"
//                 height="500"
//                 src="https://www.youtube.com/embed/hqrF3D2r_dk?si=TMUWpyA67nmLJUtm"
//                 title="YouTube video player"
//                 frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowfullscreen
//               ></iframe>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="col-md-6">
//               <img
//                 onClick={handleVideoClick}
//                 style={{ height: "100px", width: "100px", margin: "150px" }}
//                 alt=""
//                 src="..\assests\input-onlinegiftools (1).png"
//               />{" "}
//             </div>
//             <div className="col-md-6 m-auto">
//               <Form className="col-md-6 mt-3 shadow-sm p-3  bg-body rounded">
//                 <Form.Group
//                   className="mb-3"
//                   controlId="exampleForm.ControlInput1"
//                 >
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control type="" placeholder="" />
//                 </Form.Group>
//                 <Form.Group
//                   className="mb-3"
//                   controlId="exampleForm.ControlInput1"
//                 >
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control type="" placeholder="" />
//                 </Form.Group>
//                 <Form.Group
//                   className="mb-3"
//                   controlId="exampleForm.ControlInput1"
//                 >
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control type="" placeholder="" />
//                 </Form.Group>
//               </Form>{" "}
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// import Card from "react-bootstrap/Card";
// import React, { useState, useRef, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import GroupIcon from "@mui/icons-material/Group";
// import SchoolIcon from "@mui/icons-material/School";
// import StarIcon from "@mui/icons-material/Star";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// import Form from "react-bootstrap/Form";

// <ThumbUpIcon />;

// export default function Home() {
//   const [isVideoPlaying, setVideoPlaying] = useState(false);

//   const handleVideoClick = () => {
//     setVideoPlaying(true);
//   };
//   const slidesData = [
//     {
//       id: 1,
//       image:
//         "https://www.vijayhomeservices.com/appliance_files/assets/img/Ac/Ac-installation.jpg",
//     },
//     {
//       id: 2,
//       image:
//         "https://www.vijayhomeservices.com/appliance_files/assets/img/Ac/Ac-gas-charge.jpg",
//     },
//     {
//       id: 3,
//       image: "/assests/whatsapp-image-2021-09-11-at-10-13-44-pm.jpeg", // Adjusted path
//     },
//     {
//       id: 4,
//       image: "/assests/whatsapp-image-2021-09-11-at-10-13-45-pm--1-.jpeg", // Adjusted path
//     },
//     {
//       id: 5,
//       image: "/assests/whatsapp-image-2021-09-11-at-10-13-45-pm--2-.jpeg", // Adjusted path
//     },
//   ];

//   const [start, setStart] = useState(0);

//   const onNextClick = () => {
//     setStart((start + 1) % slidesData.length);
//   };

//   const onPrevClick = () => {
//     setStart((start - 1 + slidesData.length) % slidesData.length);
//   };

//   const onDotClick = (index) => {
//     setStart(index);
//   };

//   const slidesData1 = [
//     {
//       id: 1,
//       image: "../assests/frame-vhspng-750.png",
//     },
//     {
//       id: 2,
//       image: "../assests/9001-005-750 (1).jpg",
//     },
//     {
//       id: 3,
//       image: "../assests/01-thumb.jpg",
//     },
//     {
//       id: 4,
//       image: "../assests/05-thumb (1).jpg",
//     },
//   ];

//   const [start1, setStart1] = useState(0);

//   const onNextClick1 = () => {
//     setStart1((start1 + 1) % slidesData1.length);
//   };

//   const onPrevClick1 = () => {
//     setStart1((start1 - 1 + slidesData1.length) % slidesData1.length);
//   };

//   const onDotClick1 = (index) => {
//     setStart1(index);
//   };

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   const faqs = [
//     {
//       title: "What cleaning solutions do you use?",
//       content:
//         "Local Steam Cleaning makes sure that we do not do any impact to nature, environment and those dwelling in their homes and commercial spaces. Our team only uses eco-friendly. We only use cleaning agents and solutions that are environment-friendly to protect mother nature, ensure our client’s safety and protect our cleaners. ",
//     },
//     {
//       title: "What is your 100% satisfaction guarantee policy?",
//       content:
//         "We will not stop unless you are satisfied. Your satisfaction seals the deal and we always strive to keep you smiling in every cleaning appointment we do for you.",
//     },
//     {
//       title: "What is your Pet Policy?",
//       content:
//         "For the safety and security of your pets please have dogs and cats crated or gated prior to our arrival.",
//     },
//     {
//       title: "What work can I expect to be done ?",
//       content:
//         "Vijay Home Services Cleaners offer a systemised approach to our services. We would love the opportunity to show you through the types of services on offer during one of our friendly face-to-face consultations/quotations. Simply complete a booking form and we will be more than happy to show you how we can assist with your house cleaning needs.",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//   };
//   return (
//     <>
//       <div className="row mb-5 bg_img">
//         <div className="row text-center p-5">
//           <p className="colr fnt28">
//             India's top-rated cleaning service for trustworthiness.
//           </p>
//           <p className="colr">
//             Pay After Service | 100% Satisfaction or FREE Rework*
//           </p>
//           <Button variant="outline-info m-auto" className="col-md-2">
//             CALL US{" "}
//           </Button>{" "}
//         </div>
//         <div className="row  float-center m-auto">
//           <Card
//             style={{ width: "18rem", height: "40vh" }}
//             className="m-1 m-auto c_active"
//           >
//             <Card.Body>
//               <p>
//                 {" "}
//                 <span>
//                   <img
//                     width={30}
//                     height={30}
//                     src="..\assests\homepainting.jpg"
//                   />
//                 </span>
//                 <span> Painting Service</span>
//               </p>
//               <Card.Text style={{ height: "19vh" }}>
//                 Upto 10% Cashback on all Painting Booking above Rs 20,000/-
//                 Cashback points to be used book any other services in next 6
//                 months
//               </Card.Text>
//             </Card.Body>{" "}
//             <footer className="mb-2">
//               <Button variant="primary" className="m-auto">
//                 BOOK ON WHATSAPP
//               </Button>
//             </footer>
//           </Card>
//           <Card
//             style={{ width: "18rem", height: "40vh" }}
//             className=" m-1 m-auto c_active"
//           >
//             <Card.Body style={{ height: "19vh" }}>
//               <p>
//                 <span>
//                   <img
//                     width={30}
//                     height={30}
//                     src="..\assests\House-Cleaning.jpg"
//                   />
//                 </span>
//                 <span> Cleaning</span>
//               </p>

//               <Card.Text>
//                 Buy Deep cleaning services and choose any of the small services
//               </Card.Text>
//             </Card.Body>{" "}
//             <footer className="mb-2">
//               <Button variant="primary">BOOK ON WHATSAPP</Button>
//             </footer>
//           </Card>{" "}
//           <Card
//             style={{ width: "18rem", height: "40vh" }}
//             className=" m-1 m-auto c_active"
//           >
//             <Card.Body style={{ height: "19vh" }}>
//               <p>
//                 {" "}
//                 <span>
//                   <img
//                     width={30}
//                     height={30}
//                     src="..\assests\corporate-office.jpg"
//                   />
//                 </span>
//                 <span> Small Service</span>
//               </p>

//               <Card.Text>
//                 These Cleaning services we are giving as free for Deep cleaning
//                 services
//               </Card.Text>
//             </Card.Body>{" "}
//             <footer className="mb-2">
//               <Button variant="primary">BOOK ON WHATSAPP</Button>
//             </footer>
//           </Card>
//           <Card
//             style={{ width: "18rem", height: "40vh" }}
//             className=" m-1 m-auto c_active"
//           >
//             <Card.Body style={{ height: "19vh" }}>
//               <p>
//                 {" "}
//                 <span>
//                   <img
//                     width={30}
//                     height={30}
//                     src="..\assests\corporate-office.jpg"
//                   />
//                 </span>
//                 <span>Commercial Service</span>
//               </p>

//               <Card.Text>
//                 Our aim is to clear the infestation quickly, effectively and at
//                 an affordable price.
//               </Card.Text>
//             </Card.Body>{" "}
//             <footer className="mb-2">
//               <Button variant="primary">BOOK ON WHATSAPP</Button>
//             </footer>
//           </Card>
//         </div>
//       </div>
//       <div className="mt-5 text-center">
//         <p className="text-center fnt28">Some of Our Awesome Works</p>
//         <div className="slides">
//           <span onClick={onPrevClick} className="navButtosns">
//             <ArrowBackIosIcon style={{ color: "grey", fontSize: "35px" }} />
//           </span>
//           <img
//             width={800}
//             height={400}
//             src={slidesData[start].image}
//             alt={`Slide ${slidesData[start].id}`}
//             className="image visible"
//           />
//           <span onClick={onNextClick} className="navButtons">
//             <ArrowForwardIosIcon style={{ color: "grey", fontSize: "35px" }} />
//           </span>
//         </div>
//         <div className="dotsControls">
//           <ul className="dotList">
//             {slidesData.map((slide, index) => (
//               <li
//                 key={index}
//                 className={start === index ? "dot active" : "dot"}
//                 onClick={() => onDotClick(index)}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="mt-5">
//         <div className="text-center">
//           <Button variant="outline-primary">BOOK ON WHATSAPP</Button>
//         </div>
//       </div>

//       <div className="mt-5">
//         <p className="text-center fnt28">About Vijay Home Services</p>
//         <div>
//           <Card className=" m-1 m-auto">
//             <Card.Body className="row">
//               <Card.Text className="col-md-6">
//                 <p>
//                   <span className="me-2">
//                     <VerifiedUserIcon style={{ color: "#279EFF" }} />
//                   </span>{" "}
//                   <span>
//                     Get top-quapty service at unbeatable prices from our ISO
//                     certified company.
//                   </span>
//                 </p>
//                 <p>
//                   <span className="me-2">
//                     <ThumbUpIcon style={{ color: "#279EFF" }} />
//                   </span>
//                   100% Satisfaction or FREE Rework*
//                 </p>
//                 <p>
//                   <span className="me-2">
//                     <GroupIcon style={{ color: "#279EFF" }} />
//                   </span>
//                   Trained Professionals | No Sub Contract
//                 </p>
//                 <p>
//                   <span className="me-2">
//                     <StarIcon style={{ color: "#279EFF" }} />
//                   </span>
//                   Trusted by 31+ Lakh customers | 15+ Years
//                 </p>
//               </Card.Text>
//               <Card.Text className="col-md-6 m-auto">
//                 {" "}
//                 <Button className="col-md-6 " variant="outline-primary">
//                   BOOK ON WHATSAPP
//                 </Button>{" "}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>

//       <Card className="mt-5 ">
//         {" "}
//         <div className="row text-center">
//           <div className="col-md-6 ">
//             <p className="text-center fnt28">
//               Watch the video to understand our process
//             </p>
//             <div className="text-center  m-auto">
//               <iframe
//                 width="460"
//                 height="315"
//                 src="https://www.youtube.com/embed/hqrF3D2r_dk?si=iE-UpmhLdopBYd9y"
//                 title="YouTube video player"
//                 frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowfullscreen
//               ></iframe>
//             </div>
//             <div className="text-center mt-5">
//               <Button className="m-auto" variant="outline-primary">
//                 BOOK ON WHATSAPP
//               </Button>
//             </div>
//           </div>
//           <div className="col-md-6 m-auto">
//             <p className="text-center fnt28">Some of Our Awesome Works</p>
//             <div className="slides  m-auto">
//               <span onClick={onPrevClick1} className="navButtons">
//                 <ArrowBackIosIcon style={{ color: "grey", fontSize: "35px" }} />
//               </span>
//               <img
//                 width={400}
//                 height={400}
//                 src={slidesData1[start1].image}
//                 alt={`Slide ${slidesData1[start1].id}`}
//                 className="image visible"
//               />
//               <span onClick={onNextClick1} className="navButtons">
//                 <ArrowForwardIosIcon
//                   style={{ color: "grey", fontSize: "35px" }}
//                 />
//               </span>
//             </div>
//             <div className="dotsControls">
//               <ul className="dotList">
//                 {slidesData1.map((slide, index) => (
//                   <li
//                     key={index}
//                     className={start1 === index ? "dot active" : "dot"}
//                     onClick={() => onDotClick1(index)}
//                   />
//                 ))}
//               </ul>
//             </div>{" "}
//           </div>
//         </div>{" "}
//       </Card>

//       <div className="row mt-5 m-auto">
//         <p className="text-center fnt28">Testimonials of Our Happy Customers</p>
//         <div style={{ width: "20%" }} className=" m-auto">
//           <iframe
//             width="260"
//             height="215"
//             src="https://www.youtube.com/embed/eP35Th4xzO4?si=wF0TAdpv1mVe3o_k"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </div>
//         <div style={{ width: "20%" }} className="  m-auto">
//           <iframe
//             width="260"
//             height="215"
//             className="m-2"
//             src="https://www.youtube.com/embed/hqrF3D2r_dk?si=iE-UpmhLdopBYd9y"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </div>
//         <div style={{ width: "20%" }} className="  m-auto">
//           <iframe
//             width="260"
//             className="m-2"
//             height="215"
//             src="https://www.youtube.com/embed/hqrF3D2r_dk?si=iE-UpmhLdopBYd9y"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </div>
//         <div style={{ width: "20%" }} className="  m-auto">
//           <iframe
//             width="260"
//             height="215"
//             src="https://www.youtube.com/embed/eP35Th4xzO4?si=wF0TAdpv1mVe3o_k"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </div>
//       </div>

//       <div className="row mt-5 m-auto">
//         <p className="text-center fnt28">
//           Our cleaning service follows a streamlined process for top-notch
//           results.
//         </p>
//         {isVideoPlaying ? (
//           <>
//             <div></div>
//             <div
//               style={{
//                 backgroundColor: "rgba(19, 19, 19, 0.479)",
//                 backdropFilter: "blur(10px)",
//                 zIndex: "100",
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <div className="col-md-8 shadow-sm p-3  bg-white rounded">
//                 <div style={{ textAlign: "end" }}>
//                   <p
//                     style={{
//                       position: "absolute",
//                       cursor: "pointer",
//                       zIndex: "150",
//                       fontSize: "30px",
//                       margin: "auto",
//                     }}
//                     onClick={() => setVideoPlaying(false)}
//                   >
//                     X
//                   </p>
//                 </div>
//                 <div className="row mt-5">
//                   <div className="col-md-6">
//                     <img
//                       alt=""
//                       width={300}
//                       height={300}
//                       src="..\assests\homepainting.jpg"
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <div className="m-2">
//                       <img
//                         alt=""
//                         width={100}
//                         height={100}
//                         src="..\assests\thumb-interior-project-completion.jpg"
//                       />
//                       <span>Interior Painting</span>
//                     </div>
//                     <div className="m-2">
//                       <img
//                         alt=""
//                         width={100}
//                         height={100}
//                         src="..\assests\thumb-exterior-cleaning.jpg"
//                       />
//                       <span>Exterior Painting</span>
//                     </div>
//                     <div className="m-2">
//                       <img
//                         alt=""
//                         width={100}
//                         height={100}
//                         src="..\assests\homepainting.jpg"
//                       />
//                       <span>Office Painting</span>
//                     </div>
//                     <div className="m-2">
//                       <img
//                         alt=""
//                         width={100}
//                         height={100}
//                         src="..\assests\homepainting.jpg"
//                       />
//                       <span>Factory painting</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <div style={{ position: "relative" }}>
//               <Carousel responsive={responsive}>
//                 <Card
//                   onClick={handleVideoClick}
//                   style={{ width: "18rem", height: "20vh" }}
//                   className=" m-1 m-auto"
//                 >
//                   <Card.Body>
//                     <p>
//                       {" "}
//                       <span className="me-2">
//                         <img
//                           alt=""
//                           width={100}
//                           height={100}
//                           src="..\assests\homepainting.jpg"
//                         />
//                       </span>
//                       <spn>Painting Service</spn>
//                     </p>
//                   </Card.Body>{" "}
//                 </Card>
//                 <Card
//                   onClick={handleVideoClick}
//                   style={{ width: "18rem", height: "20vh" }}
//                   className=" m-1 m-auto"
//                 >
//                   <Card.Body style={{ height: "19vh" }}>
//                     <p>
//                       <span className="me-2">
//                         <img
//                           alt=""
//                           width={100}
//                           height={100}
//                           src="..\assests\House-Cleaning.jpg"
//                         />
//                       </span>
//                       <spn>Cleaning</spn>
//                     </p>
//                   </Card.Body>{" "}
//                 </Card>
//                 <Card
//                   onClick={handleVideoClick}
//                   style={{ width: "18rem", height: "20vh" }}
//                   className=" m-1 m-auto"
//                 >
//                   <Card.Body style={{ height: "19vh" }}>
//                     <p>
//                       {" "}
//                       <span className="me-2">
//                         <img
//                           alt=""
//                           width={100}
//                           height={100}
//                           src="..\assests\corporate-office.jpg"
//                         />
//                       </span>
//                       <spn>Small Service</spn>
//                     </p>
//                   </Card.Body>{" "}
//                 </Card>
//                 <Card
//                   onClick={handleVideoClick}
//                   style={{ width: "18rem", height: "20vh" }}
//                   className=" m-1 m-auto"
//                 >
//                   <Card.Body style={{ height: "19vh" }}>
//                     <p>
//                       {" "}
//                       <span className="me-2">
//                         <img
//                           alt=""
//                           width={100}
//                           height={100}
//                           src="..\assests\corporate-office.jpg"
//                         />
//                       </span>
//                       <spn>Commercial Service</spn>
//                     </p>
//                   </Card.Body>{" "}
//                 </Card>
//               </Carousel>
//             </div>
//           </>
//         )}
//       </div>

//       <div className="row mt-5 m-auto">
//         <p className="text-center fnt28">
//           {" "}
//           Our satisfied customers are a testament to our exceptional service and
//           qualit
//         </p>
//         <div style={{ width: "20%" }} className=" m-auto">
//           <iframe
//             width="260"
//             height="215"
//             src="https://www.youtube.com/embed/eP35Th4xzO4?si=wF0TAdpv1mVe3o_k"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </div>
//         <div style={{ width: "20%" }} className="  m-auto">
//           <iframe
//             width="260"
//             height="215"
//             src="https://www.youtube.com/embed/X56YP45fstQ?si=lO-cUj7R4SParJNG"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </div>
//         <div style={{ width: "20%" }} className="  m-auto">
//           <iframe
//             width="260"
//             height="215"
//             src="https://www.youtube.com/embed/6QIDGy_ysB0?si=WQIyMxi3XLqdZiVN"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </div>
//         <div style={{ width: "20%" }} className="  m-auto">
//           <iframe
//             width="260"
//             height="215"
//             src="https://www.youtube.com/embed/X56YP45fstQ?si=lO-cUj7R4SParJNG"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </div>
//       </div>

//       <div className="row mt-5 m-auto">
//         <p className="text-center fnt28"> FAQ's</p>

//         {faqs.map((faq, index) => (
//           <div key={index} className="accordion__section m-1">
//             <div
//               className={`accordion ${activeIndex === index ? "active" : ""}`}
//               onClick={() => toggleAccordion(index)}
//             >
//               <p className="accordion__title">{faq.title}</p>
//               <span style={{ marginLeft: "20px" }}>
//                 {activeIndex === index ? "-" : "+"}
//               </span>
//             </div>
//             <div
//               style={{
//                 maxHeight: `${activeIndex === index ? "1000px" : "0px"}`,
//               }}
//               className="accordion__content"
//             >
//               <div className="accordion__text">{faq.content}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div
//         className="row mt-5 text-center  p-3"
//         style={{ backgroundColor: "#ADC4CE" }}
//       >
//         <div className="row">
//           <p className="col-md-7  m-auto fnt32 p-3">
//             Let professionals who truly care for your home handle your cleaning
//             needs.
//           </p>
//         </div>
//         <div className="row m-3">
//           <Button className="col-md-3 m-auto" variant="outline-primary">
//             BOOK ON WHATSAPP
//           </Button>{" "}
//         </div>
//       </div>

//       <div className="row mt-5">
//         <div className="col-md-6">
//           <img
//             width={500}
//             height={400}
//             alt=""
//             src="..\assests\whatsapp-image-2021-09-11-at-10-13-46-pm-750.webp"
//           />
//         </div>
//         <div className="col-md-6 ">
//           <h3>About Vijay Home Cleaning Services</h3>
//           <p className="m-3">
//             We are one of the oldest Cleaning service provider in India with 15+
//             years of experience. All inhouse cleaner's and our company is ISO
//             certified.
//           </p>
//           <p className="m-3">
//             We care for our customers and customer satisfaction is our ultimate
//             motto.
//           </p>
//           <p className="m-3">Our Journey So Far in Numbers</p>
//           <li style={{ listStyle: "none" }}>
//             {" "}
//             <span className="me-2" style={{ color: "blue" }}>
//               {" "}
//               <ArrowCircleRightIcon />
//             </span>
//             4000000+ COMPLETED JOBS
//           </li>
//           <li style={{ listStyle: "none" }}>
//             {" "}
//             <span className="me-2" style={{ color: "blue" }}>
//               {" "}
//               <ArrowCircleRightIcon />{" "}
//             </span>
//             3100000+ SATISFIED CUSTOMERS
//           </li>

//           <li style={{ listStyle: "none" }}>
//             {" "}
//             <span className="me-2" style={{ color: "blue" }}>
//               {" "}
//               <ArrowCircleRightIcon />{" "}
//             </span>{" "}
//             4000+ MONTHLY JOB REQUES
//           </li>
//           <li style={{ listStyle: "none" }}>
//             {" "}
//             <span className="me-2" style={{ color: "blue" }}>
//               {" "}
//               <ArrowCircleRightIcon />{" "}
//             </span>{" "}
//             95% REPEAT CUSTOMERS
//           </li>
//         </div>
//       </div>

//       <div className="row mt-5   p-3 " style={{ backgroundColor: "#ADC4CE" }}>
//         <div className="row ">
//           <li className="col-md-1" style={{ listStyle: "none" }}>
//             <a href="#" style={{ textDecoration: "none", color: "black" }}>
//               {" "}
//               Home
//             </a>
//           </li>{" "}
//           |
//           <li className="col-md-1" style={{ listStyle: "none" }}>
//             <a href="#" style={{ textDecoration: "none", color: "black" }}>
//               {" "}
//               Contact
//             </a>{" "}
//           </li>
//           <li className="col-md-1" style={{ listStyle: "none" }}>
//             {" "}
//             <a href="#" style={{ textDecoration: "none", color: "black" }}>
//               {" "}
//               About Us
//             </a>
//           </li>{" "}
//           |
//           <li className="col-md-2" style={{ listStyle: "none" }}>
//             <a href="#" style={{ textDecoration: "none", color: "black" }}>
//               {" "}
//               Terms and Condition
//             </a>{" "}
//           </li>{" "}
//           |
//           <li className="col-md-2" style={{ listStyle: "none" }}>
//             {" "}
//             <a href="#" style={{ textDecoration: "none", color: "black" }}>
//               {" "}
//               Refund and Cancellation
//             </a>{" "}
//           </li>{" "}
//           |
//           <li className="col-md-4" style={{ listStyle: "none" }}>
//             {" "}
//             <a href="#" style={{ textDecoration: "none", color: "black" }}>
//               {" "}
//               Policy Privacy Policy VHS Logo Career Work with us
//             </a>{" "}
//           </li>
//         </div>
//         <p className="mt-2 m-auto" style={{ border: "1px solid #ECE8DD" }}></p>
//         <div className="row ">
//           <p> © Copyright 2023 Vijay Home Services. All rights reserved.</p>
//         </div>
//       </div>
//     </>
//   );
// }


