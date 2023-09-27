import React, { useEffect } from "react";

const WellcomePage = () => {
  const handleEvent = () => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-934679256/XXl5CMPnko0CENil2L0D",
      });
    } else {
      console.error("gtag is not available. Event not tracked.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-934679256";
    script.async = true;
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-934679256");
      
      handleEvent();
    };
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <div className="row" style={{ height: "100vh" }}>
        <div className="row m-auto">
          <div className="row m-auto text-center mb-3">
            <div className="col-md-3 m-auto">
              <img
                src="..\NImages\vhspng.jfif"
                width={110}
                height={110}
                alt=""
              />
            </div>
          </div>
          <div className="row text-center">
            <div
              className="col-md-4 m-auto fntf"
              style={{ fontSize: "55px", fontWeight: "bold" }}
            >
              𝓣𝓱𝓪𝓷𝓴 𝓨𝓸𝓾!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WellcomePage;
