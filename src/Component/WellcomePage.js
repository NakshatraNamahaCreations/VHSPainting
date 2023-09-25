import React from "react";

export default function WellcomePage() {
  return (
    <div className="row " style={{ height: "100vh" }}>
      <div className="row m-auto">
        <div className="row m-auto text-center mb-3">
          <div className="col-md-3 m-auto">
            <img src="..\NImages\vhspng.jfif" width={110} height={110} alt="" />{" "}
          </div>
        </div>
        <div className="row  text-center">
          <div
            className="col-md-4 m-auto fntf  "
            style={{ fontSize: "55px", fontWeight: "bold" }}
          >
            𝓣𝓱𝓪𝓷𝓴 𝓨𝓸𝓾!
          </div>
        </div>
      </div>
    </div>
  );
}
