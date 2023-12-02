import { Helmet } from "react-helmet";
import CardImage1 from "../About/img/clients/client 1.png";
import CardImage2 from "../About/img/clients/client 2.png";
import CardImage3 from "../About/img/clients/client 3.png";
import CardImage4 from "../About/img/clients/client 4.png";
import CardImage5 from "./team-cards/member 1.png";
import CardImage6 from "./team-cards/member 2.png";
import CardImage7 from "./team-cards/member 3.png";
import CardImage8 from "./team-cards/member 4.png";
import Footer from "../../Components/Footer";
export default function Team() {
    const text = "Design, Australia";
    const SocialLinks = () => {
        return (
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
            </div>
        )
    }
    return (
        <>
            <Helmet>
                <title>Our Team</title>
            </Helmet>
            <section className="team-hero">
                <div className="text">
                    <h1 data-aos="fade-up">Our Team</h1>
                    <p data-aos="fade-up" data-aos-delay="300">Home / Team</p>
                </div>
            </section>
            <section className="team">
                <div className="container">
                    <div className="card" data-aos="fade-up">
                        <img src={CardImage1} alt="Team Member" />
                        <div className="card-body">
                            <h3>Charlotte Levi</h3>
                            <p>{text}</p>
                            <SocialLinks />
                        </div>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-delay="300">
                        <img src={CardImage2} alt="Team Member" />
                        <div className="card-body">
                            <h3>Natasha Julie</h3>
                            <p>{text}</p>
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
                            </div>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-delay="400">
                        <img src={CardImage3} alt="Team Member" />
                        <div className="card-body">
                            <h3>John Smith</h3>
                            <p>Design Australia</p>
                            <SocialLinks />
                        </div>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-delay="500">
                        <img src={CardImage4} alt="Team Member" />
                        <div className="card-body">
                            <h3>Nora Owen</h3>
                            <p>{text}</p>
                            <SocialLinks />
                        </div>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-delay="600">
                        <img src={CardImage5} alt="Team Member" />
                        <div className="card-body">
                            <h3>Avery Jackson</h3>
                            <p>{text}</p>
                            <SocialLinks />
                        </div>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-delay="700">
                        <img src={CardImage6} alt="Team Member" />
                        <div className="card-body">
                            <h3>Sofia Carter</h3>
                            <p>{text}</p>
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
                            </div>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-delay="800">
                        <img src={CardImage7} alt="Team Member" />
                        <div className="card-body">
                            <h3>Luna James</h3>
                            <p>{text}</p>
                            <SocialLinks />
                        </div>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-delay="900">
                        <img src={CardImage8} alt="Team Member" />
                        <div className="card-body">
                            <h3>Gianna Mateo</h3>
                            <p>{text}</p>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}