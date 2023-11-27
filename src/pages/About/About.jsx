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
          <meta property="og:site_name" content="About Interno"/>
          <meta property="og:title" content="About Us"/>
          <meta property="og:description" content="This is information about Interno."/>
          <meta property="og:image" content="https://interno-hotels.vercel.app/static/media/about-hero.10abbf3d34b9410f2f5a.png"/>
          <title>About Interno</title>
        </Helmet>
      </>
      <>
        <section className="about-hero">
          <div className="text">
            <h1 data-aos="fade-up">About Us</h1>
            <p data-aos="fade-up" data-aos-delay="300">Home / About Us</p>
          </div>
        </section>
        <section className="about-words">
          <div className="container">
            <h1 data-aos="fade-up">“</h1>
            <h2 data-aos="fade-up" data-aos-delay="300">I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it
            </h2>
            <p data-aos="fade-up" data-aos-delay="400">-BUNNY WILLIAMS</p>
          </div>
        </section>
        <section className="about-info">
          <div className="container">
            <div className="text">
              <h1 data-aos="fade-up">What We Do</h1>
              <p data-aos="fade-up" data-aos-delay="300">It is a long established fact that a reader will be distracted by the of readable content of a page
                when lookings at its layouts the points of using that it has a more-or-less normal.</p>
              <a href="/concept/" data-aos="fade-up" data-aos-delay="400">
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
            <img src={AboutImage1} alt="Working place" data-aos="fade-down"/>
          </div>
          <div className="container">
            <img src={AboutImage2} alt="Working Place" data-aos="fade-down"/>
            <div className="text">
              <h1 data-aos="fade-up">The End Result</h1>
              <p data-aos="fade-up" data-aos-delay="300">It is a long established fact that a reader will be distracted by the of readable content of a page
                when lookings at its layouts the points of using that it has a more-or-less normal.</p>
              <a href="/portfolio/" data-aos-delay="400" data-aos="fade-up">
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
              <h1 data-aos="fade-up">What the People Think About Us</h1>
            </div>
            <div className="cards">
              <div className="card" data-aos="fade-up">
                <img src={Client1} alt="Client" />
                <div className="card-body">
                  <h3>Charlotte Levi</h3>
                  <p>Design, Australia</p>
                  <div className="social-links">
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z" />
                      </svg>
                    </a>
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <path d="M2 9h4v12H2z" />
                        <path d="M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z" />
                      </svg>
                    </a>
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <path d="M17.5 6.5h.01" />
                      </svg>
                    </a>
                  </div>
                  <div className="links">
                    <a href="tel:+1 (378) 400-1234">+1 (378) 400-1234</a>
                    <a href="https://julie@gmail.com">julie@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="card" data-aos="fade-up" data-aos-delay="300">
                <img src={Client2} alt="Client" />
                <div className="card-body">
                  <h3>Natasha Julie</h3>
                  <p>Design, Australia</p>
                  <div className="social-links">
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z" />
                      </svg>
                    </a>
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <path d="M2 9h4v12H2z" />
                        <path d="M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z" />
                      </svg>
                    </a>
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <path d="M17.5 6.5h.01" />
                      </svg>
                    </a>
                  </div>
                  <div className="links">
                    <a href="tel:+1 (378) 400-1234">+1 (378) 400-1234</a>
                    <a href="https://julie@gmail.com">julie@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="card" data-aos="fade-up" data-aos-delay="400">
                <img src={Client3} alt="Client" />
                <div className="card-body">
                  <h3>John Smith</h3>
                  <p>Design, Australia</p>
                  <div className="social-links">
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z" />
                      </svg>
                    </a>
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <path d="M2 9h4v12H2z" />
                        <path d="M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z" />
                      </svg>
                    </a>
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <path d="M17.5 6.5h.01" />
                      </svg>
                    </a>
                  </div>
                  <div className="links">
                    <a href="tel:+1 (378) 400-1234">+1 (378) 400-1234</a>
                    <a href="https://julie@gmail.com">julie@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="card" data-aos="fade-up" data-aos-delay="500">
                <img src={Client4} alt="Client" />
                <div className="card-body">
                  <h3>Nora Owen</h3>
                  <p>Design, Australia</p>
                  <div className="social-links">
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z" />
                      </svg>
                    </a>
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <path d="M2 9h4v12H2z" />
                        <path d="M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z" />
                      </svg>
                    </a>
                    <a href="#!">
                      <svg width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <path d="M17.5 6.5h.01" />
                      </svg>
                    </a>
                  </div>
                  <div className="links">
                    <a href="tel:+1 (378) 400-1234">+1 (378) 400-1234</a>
                    <a href="https://julie@gmail.com">julie@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="login-form">
          <div className="text-center">
            <h1 data-aos="fade-up">Creative project? Let's have a productive talk.</h1>
          </div>
          <div className="container">
            <form action="">
              <div className="input-box">
              <label htmlFor="username">Name</label>
                <input type="name" id="username" />
              </div>
              <div className="input-box">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="textarea-box">
                <label htmlFor="text">Hello, I'm interested in ...</label>
                <textarea id="text"></textarea>
              </div>
              <button>
                <span>Send Now</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                    <path d="M1.92969 8.43536L15.6529 8.29851M10.5479 1.91132L17.0708 8.4343L10.4165 15.0887" stroke="#CDA274" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </>
    </>
  )
}

export default AboutPage;