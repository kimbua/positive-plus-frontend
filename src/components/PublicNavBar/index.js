import React, { useState } from "react";
import "./style.css";
import { Container, Navbar } from "react-bootstrap";
import "./script.js";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const PublicNavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavColor);
  return (
    <>
      <Navbar
        className={navbar ? "bg-light scrolled" : "bg-light"}
        id="nav"
        fixed="top"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/home"
            className={navbar ? "logo" : "navbarA"}
            id="logo"
          >
            <img alt="logo" src={logo} className="logoImg" /> Positive+
          </Navbar.Brand>
          <Navbar.Brand
            as={Link}
            to="/home"
            className={navbar ? "logo scrolled" : "logo"}
          >
            <img alt="logo" src={logo} className="logoImg" /> Positive+
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand className={"navbarB"} as={Link} to="/home">
              Quotes
            </Navbar.Brand>
            <Navbar.Brand className={"navbarB"} as={Link} to="/blog">
              Social Blog
            </Navbar.Brand>
            <Navbar.Brand className={"btn nav-button"} as={Link} to="/signin">
              Sign in
            </Navbar.Brand>
            {/* <Navbar.Text>
              <a href="#.">Menu</a>
            </Navbar.Text> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default PublicNavBar;
