import React, { useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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

  useEffect(() => {
    const previousUrl = localStorage.getItem("previousUrl");

    if (previousUrl) {
      setTimeout(() => {
        window.location.href = previousUrl;
      }, 2000);
    } else {
      console.error("No previous URL found.");
    }
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
            <div className="row">
              <div
                className="col-md-5 m-auto fntf"
                style={{ fontSize: "55px", fontWeight: "bold" }}
              >
                𝗧𝗵𝗮𝗻𝗸 𝗬𝗼𝘂 𝗙𝗼𝗿 𝗕𝗼𝗼𝗸𝗶𝗻𝗴 𝗢𝘂𝗿 𝗦𝗲𝗿𝘃𝗶𝗰𝗲.
              </div>
            </div>
            <div className="row">
              <p
                className="col-md-7 m-auto fntf"
                style={{ fontSize: "25px", fontWeight: "normal" }}
              >
                {" "}
                <CheckCircleIcon
                  style={{ color: "#96C291", fontSize: "30px" }}
                />{" "}
                𝗢𝘂𝗿 𝗘𝘅𝗽𝗲𝗿𝘁𝘀 𝗪𝗶𝗹𝗹 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗬𝗼𝘂 𝗦𝗵𝗼𝗿𝘁𝗹𝘆!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WellcomePage;
