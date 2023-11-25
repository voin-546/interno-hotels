import React from "react";
import { Helmet } from "react-helmet";
import "../../ComponentStyles/Header.scss";
import "../../ComponentStyles/Footer.scss";
import AboutImage1 from "./img/about-info 1.png";
import AboutImage2 from "./img/about-info 2.png";
import Client1 from "./img/clients/client 1.png";
import Client2 from "./img/clients/client 2.png";
import Client3 from "./img/clients/client 3.png";
import Client4 from "./img/clients/client 4.png";
import Footer from "../../Components/Footer";
const AboutPage = () => {
  return (
    <>
      <>
        <Helmet>
          <title>About Interno</title>
        </Helmet>
      </>
      <>
        <section className="about-hero">
          <div className="text">
            <h1>About Us</h1>
            <p>Home / About Us</p>
          </div>
        </section>
        <section className="about-words">
          <div className="container">
            <h1>“</h1>
            <h2>I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it
            </h2>
            <p>-BUNNY WILLIAMS</p>
          </div>
        </section>
        <section className="about-info">
          <div className="container">
            <div className="text">
              <h1>What We Do</h1>
              <p>It is a long established fact that a reader will be distracted by the of readable content of a page
                when lookings at its layouts the points of using that it has a more-or-less normal.</p>
              <a href="/concept/">
                <div>
                  <span>Our Concept</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                      <path d="M1 7.93542L14.7232 7.79857M9.61818 1.41138L16.1412 7.93436L9.48677 14.5887" stroke="#CDA274" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <img src={AboutImage1} alt="Working place" />
          </div>
          <div className="container">
            <img src={AboutImage2} alt="Working Place" />
            <div className="text">
              <h1>The End Result</h1>
              <p>It is a long established fact that a reader will be distracted by the of readable content of a page
                when lookings at its layouts the points of using that it has a more-or-less normal.</p>
              <a href="/portfolio/">
                <span>Our Portfolio</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path d="M1 7.93542L14.7232 7.79857M9.61818 1.41138L16.1412 7.93436L9.48677 14.5887" stroke="#CDA274" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="about-clients">
          <div className="container">
            <div className="text-center">
              <h1>What the People Think About Us</h1>
            </div>
            <div className="card">
              <img src={Client1} alt="Client" />
              <div className="card-body">
                <h3>Charlotte Levi</h3>
                <p>Design, Australia</p>
                <div className="links">
                  <a href="tel:+1 (378) 400-1234">+1 (378) 400-1234</a>
                  <a href="https://julie@gmail.com">julie@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </>
  )
}

export default AboutPage;