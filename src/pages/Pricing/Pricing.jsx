import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
export default function Pricing() {
    return (
        <>
            <Helmet>
                <title>Pricing</title>
            </Helmet>
            <section className="pricing-hero">
                <div className="text">
                    <h1>Pricing & Plan</h1>
                    <p>Home / Pricing</p>
                </div>
            </section>
            <section className="pricing">
                <div className="container">
                    <div className="card">
                        <h3>Design advices</h3>
                        <span>$ <span>29</span></span>
                        <p>/month</p>
                        <div>
                            <ul>
                                <li>
                                    <p>General living space advices</p>
                                </li>
                                <li>
                                    <p>Rennovation advices</p>
                                </li>
                                <li>
                                    <p>Interior design advices</p>
                                </li>
                                <li>
                                    <p>Furniture reorganization</p>
                                </li>
                                <li>
                                    <p>Up to 5 hours meetings</p>
                                </li>
                            </ul>
                            <Link href="/contact">
                                <span>Get Started</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                        <path d="M1.4292 8.43542L15.1524 8.29857M10.0474 1.91138L16.5704 8.43436L9.91597 15.0887" stroke="#292F36" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="card active">
                        <h3>Complete Interior</h3>
                        <span>$<span>39</span></span>
                        <p>/month</p>
                        <div>
                            <p className="active">Most Popular Plans</p>
                            <ul>
                                <li>
                                    <p>Complete home redesign</p>
                                </li>
                                <li>
                                    <p>Interior and exterior works</p>
                                </li>
                                <li>
                                    <p>Modular interior planning</p>
                                </li>
                                <li>
                                    <p>Kitchen Design</p>
                                </li>
                                <li>
                                    <p>Garages organisation</p>
                                </li>
                            </ul>
                            <Link href="/contact">
                                <span>Get Started</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                        <path d="M1.4292 8.43542L15.1524 8.29857M10.0474 1.91138L16.5704 8.43436L9.91597 15.0887" stroke="#CDA274" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="card">
                        <h3>Furniture Redesign</h3>
                        <span>$ <span>59</span></span>
                        <p>/month</p>
                        <div>
                            <ul>
                                <li>
                                    <p>Furniture for living room</p>
                                </li>
                                <li>
                                    <p>Furniture refurbishment</p>
                                </li>
                                <li>
                                    <p>Sofas and armchairs</p>
                                </li>
                                <li>
                                    <p>Tables and chairs</p>
                                </li>
                                <li>
                                    <p>Kitchens</p>
                                </li>
                            </ul>
                            <Link href="/contact">
                                <span>Get Started</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                        <path d="M1.4292 8.43542L15.1524 8.29857M10.0474 1.91138L16.5704 8.43436L9.91597 15.0887" stroke="#292F36" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}