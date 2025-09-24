import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
// import logo from "../../assets/logo.png";
import logo from "../../assets/Adetola_Logo.png";
import menu_icon from "../../assets/menu-icon.png";

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

  const handleClick = () => {
    const nav_link = document.querySelector(".nav-links");
    nav_link.classList.toggle("open");
  };
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Logo Image" className="logo-img" />
        <span>Adetola Private Schools</span>
      </div>
      <div className="nav-links bg-blue">
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
      <img src={menu_icon} alt="" className="hamburger" onClick={handleClick} />
    </nav>
  );
};

export default NavBar;
