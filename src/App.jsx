import { Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "./pages/About/About";
import HomePage from "./pages/Home/Home";
import "./css/Header.scss";
function showMenu() {
    let header = document.querySelector("header");
    let burgerMenu = document.querySelector(".burger");
    burgerMenu.classList.toggle("open");
    header.classList.toggle("show");
}
function Router() {
    return (
        <>
            <header>
                <div className="container">
                    <NavLink to="/">
                        <a href="#!" className="logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274" />
                            </svg>
                            <span>Interno</span>
                        </a>
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
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="about" element={<AboutPage/>}>About</NavLink></li>
                            <li><NavLink to="services">Services</NavLink></li>
                            <li><NavLink to="project">Project</NavLink></li>
                            <li><NavLink to="blog">Blog</NavLink></li>
                            <li><NavLink to="contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="about" element={<AboutPage/>}></Route>
                </Routes>
            </>
        </>
    )
}
export default Router;