import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
export default function Home1() {
  const [filteredData, setFilteredData] = useState(null);
  const [selecteCategory, setSelecteCategory] = useState(null);
  const handleShow = (partialCategory, selectedCategory) => {
    const filteredData = data2.filter((item) => {
      const categoryNames = Object.keys(item);
      return categoryNames.some((category) =>
        category.toLowerCase().includes(partialCategory.toLowerCase())
      );
    });
    setSelecteCategory(partialCategory);
    setFilteredData(filteredData);
    setShow(true);
  };

  const data2 = [
    {
      "Deep Cleaning": [
        {
          id: 1,
          img: "/images/thumb-deep-cleaning.jpg",
          rate: "23004.2",
          price: "45",

          discription: [
            "final painting cost to be paid,only after you are satisfied",
            "Consult, quote and team of experts trained for high quality work",
          ],
          categoryName: "Super saver deals",
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
          categoryName: "Bathroom Cleaning",
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
          categoryName: "Kitchen Cleaning",
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
          categoryName: "Sofa Cleaning",
        },
        {
          id: 5,
          img: "/images/thumb-deep-cleaning.jpg",
          rate: "704.2",
          price: "45",
          discription: [
            "final painting cost to be paid,only after you are satisfied",
            "Consult, quote and team of experts trained for high quality work",
          ],
          categoryName: "Kitchen Cleaning",
        },
      ],
      demovideo: "/videos/production_id_4145662 (2160p).mp4",
      img1: "/images/thumb-deep-cleaning.jpg",
    },

    {
      "Vacant flat Cleaning": [
        {
          id: 6,
          rate: "204.2",
          price: "45",
          discription: [
            "final painting cost to be paid,only after you are satisfied",
            "Consult, quote and team of experts trained for high quality work",
          ],
          categoryName: "Super saver deals",
          img: "/images/thumb-vacant-flat-cleaning.jpg",
        },
        {
          id: 7,
          rate: "5000.2",
          price: "55",
          discription: [
            "final painting cost to be paid,only after you are satisfied",
            "Consult, quote and team of experts trained for high quality work",
          ],
          categoryName: "Super saver deals",
          img: "/images/thumb-vacant-flat-cleaning.jpg",
        },
      ],
      demovideo: "/videos/production_id_4145662 (2160p).mp4",
      img1: "/images/thumb-vacant-flat-cleaning.jpg",
    },

    {
      "Kitchen Cleaning": [
        {
          id: 23445745,
          rate: "404.2",
          price: "45",
          discription: [
            "final painting cost to be paid,only after you are satisfied",
            "Consult, quote and team of experts trained for high quality work",
          ],
          categoryName: "Super saver deals",
          img: "/images/thumb-Kitchen-Cleaning.jpg",
        },
        {
          id: 23445745,
          rate: "404.2",
          price: "45",
          discription: [
            "final painting cost to be paid,only after you are satisfied",
            "Consult, quote and team of experts trained for high quality work",
          ],
          categoryName: "Super saver deals",
          img: "/images/thumb-Kitchen-Cleaning.jpg",
        },
        {
          id: 23445745,
          rate: "404.2",
          price: "45",
          discription: [
            "final painting cost to be paid,only after you are satisfied",
            "Consult, quote and team of experts trained for high quality work",
          ],
          categoryName: "Super saver deals",
          img: "/images/thumb-Kitchen-Cleaning.jpg",
        },
      ],

      demovideo: "/videos/production_id_4238551 (1080p).mp4",
      img1: "/images/thumb-Kitchen-Cleaning.jpg",
    },

    {
      "Painting and waterproofing": [
        {
          id: 8,
          categoryName: "Exterior Painting",
          rate: "5045",
          price: "45",
          discription: [
            "final painting cost to be paid,only after you are satisfied",
            "Consult, quote and team of experts trained for high quality work",
          ],

          img: "/images/thumb-exterior-painting.jpg",
        },
        {
          id: 8,
          categoryName: "Office Painting",
          rate: "5045",
          price: "45",
          discription: [
            "final painting cost to be paid,only after you are satisfied",
            "Consult, quote and team of experts trained for high quality work",
          ],

          img: "/images/thumb-exterior-painting.jpg",
        },
        {
          id: 8,
          categoryName: "interior Painting",
          rate: "5045",
          price: "45",
          discription: [
            "final painting cost to be paid,only after you are satisfied",
            "Consult, quote and team of experts trained for high quality work",
          ],

          img: "/images/thumb-exterior-painting.jpg",
        },
        {
          id: 8,
          categoryName: "Factory Painting",
          rate: "5045",
          price: "45",
          discription: [
            "final painting cost to be paid,only after you are satisfied",
            "Consult, quote and team of experts trained for high quality work",
          ],

          img: "/images/thumb-interior-painting.jpg",
        },
      ],

      demovideo: "/videos/2500_03042_preview.mp4",
      img1: "/videos/1646230044496-56d688.webp",
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <>
      <Header />
      <div className="row m-auto">
        <div className="col-md-12">
          <div className="row  bg_img"></div>

          <div className="col-md-6 mt-3 m-auto text-center shadow-lg p-3 mb-5 bg-white rounded">
            <div className="row m-auto">
              <div className="col-md-4 me-2">
                <div
                  className="cat_Active"
                  onClick={() => handleShow("Cleaning")}
                >
                  <img
                    alt=""
                    className="me-2"
                    width={30}
                    height={30}
                    src="../images/House-Cleaning.jpg"
                  />
                  <p>Cleaning Services</p>
                </div>
              </div>
              <div className="col-md-4 me-2">
                <div
                  className="cat_Active"
                  onClick={() => handleShow("Painting")}
                >
                  <img
                    alt=""
                    className="me-2"
                    width={30}
                    height={30}
                    src="../images/homepainting.jpg"
                  />
                  <p> Painting Services</p>
                </div>
              </div>
            </div>
          </div>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                {" "}
                {selecteCategory && (
                  <p>Professional {selecteCategory} Services</p>
                )}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div>
                {filteredData && filteredData.length > 0 ? (
                  filteredData.map((categoryData, index) => {
                    const categoryName = Object.keys(categoryData)[0];
                    const categoryImage = categoryData.img1;

                    const detailsPageUrl = `/DetailsPage?category=${encodeURIComponent(
                      JSON.stringify(categoryData)
                    )}&selectedCategory=${encodeURIComponent(selecteCategory)}`;

                    return (
                      <div key={index}>
                        <ul>
                          <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to={detailsPageUrl} // Set the URL to link to the DetailsPage with query parameters
                          >
                            <img
                              width={50}
                              className="me-3"
                              height={50}
                              src={categoryImage}
                              alt=""
                            />
                            <span>{categoryName}</span>
                          </Link>
                        </ul>
                      </div>
                    );
                  })
                ) : (
                  <p>No data available</p>
                )}
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>{" "}
    </>
  );
}
