import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScrolled = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    handleScrolled();
    window.addEventListener("scroll", handleScrolled);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Logo Image" />
      </div>
      <div className="nav-links">
        <Link to="hero-section" smooth={true} duration={500} className="link">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="link">
          About Us
        </Link>
        <Link to="program" smooth={true} duration={500} className="link">
          Program
        </Link>
        <Link to="gallery" smooth={true} duration={500} className="link">
          Gallery
        </Link>
        <Link to="testimonials" smooth={true} duration={500} className="link">
          Testimonials
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="contact-btn link"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
