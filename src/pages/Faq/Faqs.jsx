import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Image1 from "./image 1.png";
import Image2 from "./image 2.png";
import Footer from "../../Components/Footer";
function FAQPage() {
    useEffect(() => {
        const items = document.querySelectorAll(".accordion button");
        let i;
        function toggleAccordion() {
            const itemToggle = this.getAttribute('aria-expanded');

            for (i = 0; i < items.length; i++) {
                items[i].setAttribute('aria-expanded', 'false');
            }

            if (itemToggle === 'false') {
                this.setAttribute('aria-expanded', 'true');
            }
        }

        items.forEach(item => item.addEventListener('click', toggleAccordion));
    })
    return (
        <>
            <Helmet>
                <title>Interno FAQs</title>
            </Helmet>
            <section className="faq-hero">
                <div className="text">
                    <h1 data-aos="fade-up">FAQs</h1>
                    <p data-aos="fade-up" data-aos-delay="300">Home / FAQs</p>
                </div>
            </section>
            <section className="faqs">
                <div className="text-center">
                    <h1>Every Question Answered</h1>
                </div>
                <div className="container">
                    <div className="text">
                        <div className="accordion">
                            <div className="accordion-item">
                                <button id="accordion-button-1" aria-expanded="false"><span className="accordion-title">What is the Hipcouch Interior Design Service?</span>
                                    <span className="icon" aria-hidden="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                            <path d="M0.999526 15.1855L6.94238 8.49983L0.999525 1.81412" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                                <div className="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">So, how exactly does this work?</span><span className="icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.999526 15.1855L6.94238 8.49983L0.999525 1.81412" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span></button>
                                <div className="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button id="accordion-button-3" aria-expanded="false"><span className="accordion-title">What cities do you currently operate in?</span><span className="icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.999526 15.1855L6.94238 8.49983L0.999525 1.81412" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span></button>
                                <div className="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button id="accordion-button-4" aria-expanded="false"><span className="accordion-title">Hipcouch Interior Design Service?</span><span className="icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.999526 15.1855L6.94238 8.49983L0.999525 1.81412" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span></button>
                                <div className="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button id="accordion-button-5" aria-expanded="false"><span className="accordion-title">What kind of interior designers do you have?</span><span className="icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.999526 15.1855L6.94238 8.49983L0.999525 1.81412" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span></button>
                                <div className="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={Image1} alt="Living Room" data-aos="fade-up"/>
                </div>
            </section>
            <section className="faqs">
                <div className="container">
                    <img src={Image2} alt="Living Room" data-aos="fade-down"/>
                    <div className="text">
                        <div className="accordion">
                            <div className="accordion-item">
                                <button id="accordion-button-1" aria-expanded="false"><span className="accordion-title">How long does it take?</span>
                                    <span className="icon" aria-hidden="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                            <path d="M0.999526 15.1855L6.94238 8.49983L0.999525 1.81412" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                                <div className="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">Can I use my existing furnishings?</span><span className="icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.999526 15.1855L6.94238 8.49983L0.999525 1.81412" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span></button>
                                <div className="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button id="accordion-button-4" aria-expanded="false"><span className="accordion-title">I put into redesigning my interior?</span><span className="icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.999526 15.1855L6.94238 8.49983L0.999525 1.81412" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span></button>
                                <div className="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button id="accordion-button-5" aria-expanded="false"><span className="accordion-title">What do your services cost?</span><span className="icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.999526 15.1855L6.94238 8.49983L0.999525 1.81412" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span></button>
                                <div className="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button id="accordion-button-3" aria-expanded="false"><span className="accordion-title">Do you offer free consultations?</span><span className="icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.999526 15.1855L6.94238 8.49983L0.999525 1.81412" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span></button>
                                <div className="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default FAQPage;