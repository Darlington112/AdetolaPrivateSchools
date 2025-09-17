import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReCAPTCHA from "react-google-recaptcha";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import pointer from "../../assets/dark-arrow.png";
import overlay1 from "../../assets/program-icon-1.png";
import overlay2 from "../../assets/program-icon-2.png";
import overlay3 from "../../assets/program-icon-3.png";
import program1 from "../../assets/program-1.png";
import program2 from "../../assets/program-2.png";
import program3 from "../../assets/program-3.png";
import aboutImg from "../../assets/about.png";
import gallery1 from "../../assets/gallery-1.png";
import gallery2 from "../../assets/gallery-2.png";
import gallery3 from "../../assets/gallery-3.png";
import gallery4 from "../../assets/gallery-4.png";
import user1 from "../../assets/user-1.png";
import msgIcon from "../../assets/msg-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";

const Home = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6d19de16-4b90-40af-aa11-b9bf357e1f6a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const onChange = (value) => {
    console.log("Captcha Value:", value);
  };
  useEffect(() => {
    onChange();
  }, []);
  return (
    <>
      <section className="hero-section">
        <NavBar />
        <div className="hero-text">
          <h1>We Ensure better education for a better world</h1>
          <p>
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education
          </p>
          <button className="hero-btn">
            Explore <img src={pointer} alt="pointer" />
          </button>
        </div>
      </section>
      <section className="program">
        <h2>Our Program</h2>
        <h1>What we offer</h1>
        <div className="offers">
          <div className="offer">
            <img src={program1} alt="program-image" className="offer-img" />
            <div className="program-overlay">
              <img src={overlay1} alt="" />
              <h4>Nursery Program</h4>
            </div>
          </div>
          <div className="offer">
            <img src={program2} alt="program-image" className="offer-img" />
            <div className="program-overlay">
              <img src={overlay2} alt="" />
              <h4>Primary Program</h4>
            </div>
          </div>
          <div className="offer">
            <img src={program3} alt="program-image" className="offer-img" />
            <div className="program-overlay">
              <img src={overlay3} alt="" />
              <h4>Secondary Program</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-video">
          <img src={aboutImg} alt="" className="about-img" />
        </div>
        <div className="about-text">
          <h5>About Adetola Private Schools</h5>
          <span> Nurturing Tomorrow's Leaders Today </span>
          <p>
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education. With
            a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities. Whether
            you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>
      </section>
      <section className="gallery">
        <h5>Gallery</h5>
        <h3>School pictures</h3>
        <div className="pictures">
          <img src={gallery1} alt="" />
          <img src={gallery2} alt="" />
          <img src={gallery3} alt="" />
          <img src={gallery4} alt="" />
        </div>
        <a href="#">
          See More Here <img src={pointer} alt="" className="pointer" />
        </a>
      </section>
      <section className="testimonials">
        <h5>Testimonials</h5>
        <h3>What Students Says</h3>
        <Swiper
          className="swiper"
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
        >
          <SwiperSlide className="slide">
            <div className="slide-profile">
              <img src={user1} alt="" />
              <div className="data">
                <span>Eze Adetola</span>
                <address>Ikorodu, Lagos State</address>
              </div>
            </div>
            <span>
              Choosing to pursue education at Adetola College was one of the
              best decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </span>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="slide-profile">
              <img src={user1} alt="" />
              <div className="data">
                <span>Eze Adetola</span>
                <address>Ikorodu, Lagos State</address>
              </div>
            </div>
            <span>
              Choosing to pursue education at Adetola College was one of the
              best decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </span>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="slide-profile">
              <img src={user1} alt="" />
              <div className="data">
                <span>Eze Adetola</span>
                <address>Ikorodu, Lagos State</address>
              </div>
            </div>
            <span>
              Choosing to pursue education at Adetola College was one of the
              best decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </span>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="slide-profile">
              <img src={user1} alt="" />
              <div className="data">
                <span>Eze Adetola</span>
                <address>Ikorodu, Lagos State</address>
              </div>
            </div>
            <span>
              Choosing to pursue education at Adetola College was one of the
              best decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </span>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="contact">
        <h3>Contact Us</h3>
        <h5>Get In Touch</h5>
        <div className="contact-container">
          <div className="locate-us">
            <h2>
              Send us a Message <img src={msgIcon} alt="" />
            </h2>
            <p>
              Feel free to reach out through contact form or find our contact
              information below. Your feedback, questions, and suggestions are
              important to us as we strive to provide exceptional service to our
              school community.
            </p>
            <span>
              <img src={mailIcon} alt="" /> AdetolaPrivateSchools@gmail.com
            </span>
            <span>
              <img src={phoneIcon} alt="" /> +2347030013710
            </span>
            <span>
              <img src={locationIcon} alt="" /> 5 Olatutu street, Thomas Estate,
              Ajegunle, off ikorodu road, Lagos.
            </span>
          </div>
          <div className="contact-form">
            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="number">Your Number</label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Enter Your Number"
                />
              </div>
              <div>
                <label htmlFor="message">Write your message here</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <ReCAPTCHA
                sitekey="6Lf2ZcwrAAAAAKFeL4t3KhsBoUh9CTRAf413lMku"
                onChange={onChange}
              />
              ,
              <button type="submit" className="submit-btn">
                Submit Now <img src={pointer} alt="" />
              </button>
            </form>
            <span className="submission-msg">{result}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
