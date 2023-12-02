import React from "react"
import { Helmet } from "react-helmet";
import BlogPostImage from "./blog-post.png";
import Footer from "../../Components/Footer";
const BlogPage = () => {
    return (
        <>
            <Helmet>
                <meta property="og:site_name" content="Interno's blog"/>
                <meta property="og:title" content="Interno's Blog"/>
                <meta property="og:description" content="Low Cost Latest Invented Interior Designing Ideas"/>
                <title>Interno's Blog</title>
            </Helmet>
            <section className="blog-hero">
                <div className="text">
                    <h1 data-aos="fade-up">Articles & News</h1>
                    <p data-aos="fade-up" data-aos-delay="300">Home / Blog</p>
                </div>
            </section>
            <section className="blog-post">
                <div className="container">
                    <h1>Latest Post</h1>
                </div>
                <div className="container">
                    <img src={BlogPostImage} alt="Kitchen" data-aos="fade-down"/>
                    <div className="text">
                        <h3 data-aos="fade-up">Low Cost Latest Invented Interior Designing Ideas</h3>
                        <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.</p>
                        <p data-aos="fade-up" data-aos-delay="400">Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                        <a href="/blog/details/" className="text-footer">
                            <p>26 December,2022</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                                <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <section className="news">
                <div className="container">
                    <h1>Articles & News</h1>
                </div>
                <div className="container">
                    <div className="card" data-aos="fade-up">
                        <div className="card-bg">
                            <p>Kitchan Design</p>
                        </div>
                        <a href="/projects/project-details" className="card-body">
                            <h3>Let’s Get Solution For Building Construction Work</h3>
                            <div>
                                <p>26 December, 2022 </p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                    <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                                    <path d="M23.771 32.9529L29.7139 26.2672L23.771 19.5815" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-delay="300">
                        <div className="card-bg">
                            <p>Living Design</p>
                        </div>
                        <a href="/projects/project-details" className="card-body">
                            <h3>Low Cost Latest Invented Interior Designing<br /> Ideas.</h3>
                            <div>
                                <p>22 December, 2022</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                    <circle cx="26" cy="26.2671" r="26" fill="#fff" />
                                    <path d="M23.771 32.9529L29.7139 26.2672L23.771 19.5815" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-delay="300">
                        <div className="card-bg">
                            <p>Interior Design</p>
                        </div>
                        <a href="/projects/project-details" className="card-body">
                            <h3>Best For Any Office & Business Interior<br /> Solution</h3>
                            <div>
                                <p>26 December,2022 </p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                    <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                                    <path d="M23.771 32.9529L29.7139 26.2672L23.771 19.5815" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className="card" data-aos="fade-up">
                        <div className="card-bg">
                            <p>Kitchan Design</p>
                        </div>
                        <a href="/projects/project-details" className="card-body">
                            <h3>Let’s Get Solution For Building Construction Work</h3>
                            <div>
                                <p>26 December, 2022 </p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                    <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                                    <path d="M23.771 32.9529L29.7139 26.2672L23.771 19.5815" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-delay="300">
                        <div className="card-bg">
                            <p>Living Design</p>
                        </div>
                        <a href="/projects/project-details" className="card-body">
                            <h3>Low Cost Latest Invented Interior Designing<br /> Ideas.</h3>
                            <div>
                                <p>22 December, 2022</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                    <circle cx="26" cy="26.2671" r="26" fill="#fff" />
                                    <path d="M23.771 32.9529L29.7139 26.2672L23.771 19.5815" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-delay="300">
                        <div className="card-bg">
                            <p>Interior Design</p>
                        </div>
                        <a href="/projects/project-details" className="card-body">
                            <h3>Best For Any Office & Business Interior<br /> Solution</h3>
                            <div>
                                <p>26 December,2022 </p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                    <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                                    <path d="M23.771 32.9529L29.7139 26.2672L23.771 19.5815" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default BlogPage;