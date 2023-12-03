import { Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "./pages/About/About";
import HomePage from "./pages/Home/Home";
import "./ComponentStyles/Header.scss";
import "./ComponentStyles/Dark-Theme.scss"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import NotFound from "./pages/404/NotFound";
import Services from "./pages/Services/Services";
import ProjectsPage from "./pages/Projects/Projects";
import BlogPage from "./pages/Blog/Blog";
import ContactPage from "./pages/Contact/Contact";
import FAQPage from "./pages/Faq/Faqs";
import BtnUp from "./Components/BtnUp";
import Team from "./pages/Team/Team";
import ProjectDetails from "./pages/Projects/ProjectDetails/ProjectDetails";
import Pricing from "./pages/Pricing/Pricing";
import ThemeSwitch from "./Components/ThemeSwitch";
function showMenu() {
    let header = document.querySelector("header");
    let burgerMenu = document.querySelector(".burger");
    burgerMenu.classList.toggle("open");
    header.classList.toggle("show");
}
function Router() {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        })
    })
    return (
        <>
        <BtnUp></BtnUp>
            <header id="top">
                <div className="container">
                    <NavLink to="/" className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274" />
                        </svg>
                        <span>Interno</span>
                    </NavLink>
                    <div className="burger-menu">
                        <div className="burger" onClick={showMenu}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/about" element={<AboutPage />}>About</NavLink></li>
                            <li><NavLink to="/services">Services</NavLink></li>
                            <li><NavLink to="/projects">Projects</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/faqs">FAQs</NavLink></li>
                        </ul>
                        <ThemeSwitch/>
                    </nav>
                </div>
            </header>
            <>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="about" element={<AboutPage />} />
                    <Route path="services" element={<Services />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="blog" element={<BlogPage/>}/>
                    <Route path="contact" element={<ContactPage/>}/>
                    <Route path="faqs" element={<FAQPage/>}/>
                    <Route path="team" element={<Team/>}/>
                    <Route path="projects/details" element={<ProjectDetails/>}/>
                    <Route path="pricing" element={<Pricing/>}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </>
        </>
    )
}
export default Router;