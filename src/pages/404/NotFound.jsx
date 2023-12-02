import React from "react";
import Image from "./image.png";
import Footer from "../../Components/Footer";
const NotFound = () => {
    return (
        <>
            <div className="error">
                <div className="text">
                    <h1 data-aos="fade-up">404</h1>
                    <h3 data-aos="fade-up" data-aos-delay="300">We are sorry, but the page you requested was not found</h3>
                    <a href="/" data-aos="fade-up" data-aos-delay="400">
                        <div>
                            <span>Back To Home</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                    <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </a>
                </div>
                <img src={Image} alt="Rubbish"/>
            </div>
            <Footer/>
        </>
    )
}

export default NotFound;