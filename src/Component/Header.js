import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  const pathname = window.location.pathname;
  const fbq = window.fbq || function () {};

  useEffect(() => {
    (function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    fbq("init", "553434348152376");
    fbq("track", "PageView");
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-934679256";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-934679256");
    };
  }, []);
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/" className="col-md-6">
            <img src="..\images\vhs-lgo.png" width={40} height={40} />
            <span
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Vijay Home Services
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
              {pathname === "/" || pathname === "/painting/" ? (
                <Nav.Link
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  href={`/painting/?selectedCategory=${encodeURIComponent(
                    "Painting"
                  )}`}
                >
                  Painting Services
                </Nav.Link>
              ) : null}

              {pathname === "/" || pathname === "/Cleaning/" ? (
                <Nav.Link
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  href={`/Cleaning/?selectedCategory=${encodeURIComponent(
                    "Cleaning"
                  )}`}
                >
                  Cleaning Services
                </Nav.Link>
              ) : null}
              {pathname === "/" || pathname === "/MiniServices/" ? (
                <Nav.Link
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  href={`/MiniServices/?selectedCategory=${encodeURIComponent(
                    "MiniServices"
                  )}`}
                >
                  Mini Services
                </Nav.Link>
              ) : null}
              {pathname === "/" || pathname === "/CommercialServices/" ? (
                <Nav.Link
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  href={`/CommercialServices/?selectedCategory=${encodeURIComponent(
                    "CommercialServices"
                  )}`}
                >
                  Commercial Services
                </Nav.Link>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
