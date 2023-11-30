import React from "react";
import Helmet from "react-helmet";
import Footer from "../../Components/Footer";
import ProjectImage1 from "./projects/project 1.png";
import ProjectImage2 from "./projects/project 2.png";
import ProjectImage3 from "./projects/project 3.png";
import ProjectImage4 from "./projects/project 4.png";
import ProjectImage5 from "./projects/project 5.png";
import ProjectImage6 from "./projects/project 6.png";

const ProjectsPage = () => {
  return (
    <>
    <Helmet>
      <meta property="og:site_name" content="Interno's Projects"/>
      <meta property="og:title" content="Our Projects"/>
      <meta property="og:description" content="Here are our projects, which we have ended."/>
      <title>Interno's Projects</title>
    </Helmet>
      <section className="projects-hero">
        <div className="text">
          <h1 data-aos="fade-up">Our Projects</h1>
          <p data-aos="fade-up" data-aos-delay="300">Home / Project</p>
        </div>
      </section>
      <section className="projects-cards">
        <div className="container">
          <ul>
            <li>
              <div className="card" data-aos="fade-up">
                <img src={ProjectImage1} alt="Bedroom" />
                <a href="/projects/details/" className="card-body">
                  <div className="text">
                    <h3>Minimal Bedroom</h3>
                    <p>Decor / Architecture</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                    <path d="M32 44L40 35L32 26" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </li>
            <li>
              <div className="card" data-aos="fade-up" data-aos-delay="300">
                <img src={ProjectImage2} alt="Bedroom" />
                <a href="/projects/details/" className="card-body">
                  <div className="text">
                    <h3>Minimal Bedroom</h3>
                    <p>Decor / Architecture</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                    <path d="M32 44L40 35L32 26" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </li>
            <li>
              <div className="card" data-aos="fade-up" data-aos-delay="300">
                <img src={ProjectImage3} alt="Bedroom" />
                <a href="/projects/details/" className="card-body">
                  <div className="text">
                    <h3>Classic Minimal Bedroom</h3>
                    <p>Design / Architecture</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                    <path d="M32 44L40 35L32 26" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </li>
            <li>
              <div className="card" data-aos="fade-up">
                <img src={ProjectImage4} alt="Bedroom" />
                <a href="/projects/details/" className="card-body">
                  <div className="text">
                    <h3>Modern Bedroom</h3>
                    <p>Decor / Artchitecture</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                    <path d="M32 44L40 35L32 26" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </li>
            <li>
              <div className="card" data-aos="fade-up" data-aos-delay="300">
                <img src={ProjectImage5} alt="Bedroom" />
                <a href="/projects/details/" className="card-body">
                  <div className="text">
                    <h3>Minimal Bedroom table</h3>
                    <p>Decor / Artchitecture</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                    <path d="M32 44L40 35L32 26" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </li>
            <li>
              <div className="card" data-aos="fade-up">
                <img src={ProjectImage6} alt="Bedroom" />
                <a href="/projects/details/" className="card-body">
                  <div className="text">
                    <h3>Minimal Bedroom table</h3>
                    <p>Decor / Artchitecture</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                    <path d="M32 44L40 35L32 26" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProjectsPage;