import React from "react";
import ReactDOMClient from "react-dom/client";
import "./css/globals.scss";
import AboutImage from "../src/img/about.jpg"
const Container = (props) => {
  return (<div className="container">{props.children}</div>)
}
class HomePage extends React.Component {
  class
  render() {
    return (
      <>
        <header>
          <Container>
            <a href="/" className="logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274" />
              </svg>
              <span>Interno</span>
            </a>
            <nav>
              <ul>
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/pages">Pages</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/projects">Project</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
            <div className="burger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </Container>
        </header>
        <section className="hero">
          <Container>
            <div className="text">
              <h1>Let Your Home <br />Be Unique</h1>
              <p>There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.</p>
              <a href="/">
                <div>Get Started
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                      <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </Container>
        </section>
        <section className="info-cards">
          <Container>
            <div className="card">
              <h3>Project Plan</h3>
              <p>There are many variations of the passages of lorem Ipsum from
                available, majority.</p>
              <a href="/">
                <div>
                  <span>Read More</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                      <path d="M1.92969 8.43542L15.6529 8.29857M10.5479 1.91138L17.0708 8.43436L10.4165 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <div className="card">
              <h3>Interior Work</h3>
              <p>There are many variations of the passages of lorem Ipsum from
                available, majority.</p>
              <a href="/">
                <div>
                  <span>Read More</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                      <path d="M1.92969 8.43542L15.6529 8.29857M10.5479 1.91138L17.0708 8.43436L10.4165 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <div className="card">
              <h3>Realization</h3>
              <p>There are many variations of the passages of lorem Ipsum from
                available, majority.</p>
              <a href="/">
                <div>
                  <span>Read More</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                      <path d="M1.92969 8.43542L15.6529 8.29857M10.5479 1.91138L17.0708 8.43436L10.4165 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </Container>
        </section>
        <section className="about">
          <Container>
            <div className="text">
              <h1>We Create The Art Of Stylish Living Stylishly</h1>
              <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>
              <div className="call">
                <svg xmlns="http://www.w3.org/2000/svg" width="93" height="93" viewBox="0 0 93 93" fill="none">
                  <circle cx="46.5" cy="46.5" r="46.5" fill="#F4F0EC" />
                  <path d="M61.0012 55.0749C59.7796 53.8442 56.8211 52.0482 55.3857 51.3243C53.5164 50.3828 53.3625 50.3059 51.8933 51.3974C50.9133 52.1258 50.2617 52.7766 49.1148 52.532C47.9678 52.2874 45.4754 50.9082 43.2931 48.7329C41.1107 46.5576 39.6514 43.9931 39.4061 42.8501C39.1607 41.7071 39.8222 41.0632 40.5438 40.081C41.5607 38.6964 41.4838 38.4657 40.6145 36.5965C39.9368 35.1427 38.0883 32.2121 36.8529 30.9967C35.5313 29.6914 35.5313 29.9222 34.6798 30.276C33.9865 30.5677 33.3214 30.9222 32.6928 31.3352C31.462 32.1529 30.7789 32.8321 30.3012 33.8528C29.8235 34.8735 29.6089 37.2665 32.0759 41.7478C34.5429 46.2292 36.2737 48.5206 39.8561 52.0928C43.4385 55.6649 46.1931 57.5856 50.2202 59.844C55.2018 62.6339 57.1126 62.09 58.1365 61.6131C59.1604 61.1362 59.8427 60.4593 60.662 59.2286C61.076 58.6011 61.4314 57.9368 61.7235 57.2441C62.0781 56.3957 62.3089 56.3957 61.0012 55.0749Z" stroke="#CDA274" stroke-width="2" stroke-miterlimit="10" />
                </svg>
                <div>
                  <h4>012345678</h4>
                  <p>Call Us Anytime</p>
                </div>
              </div>
              <a href="/">
                <div>
                  <span>Get Free Estimate</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                      <path d="M1 8.4353L14.7232 8.29845M9.61818 1.91125L16.1412 8.43424L9.48677 15.0886" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <img src={AboutImage} alt="Kitchen"/>
          </Container>
        </section>
      </>
    )
  }
};
const app = ReactDOMClient.createRoot(document.querySelector("#root"));
app.render(<HomePage />);
