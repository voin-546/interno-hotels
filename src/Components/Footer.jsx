import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-col">
                    <a href="/" className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                            <path d="M0.5 34.0003H13.9588V24.499C13.9588 22.4853 15.5898 20.8543 17.6035 20.8543C19.6172 20.8543 21.2482 22.4853 21.2482 24.499V34.0003H34.4975V0C15.7211 0 0.5 15.2211 0.5 34.0003Z" fill="#CDA274" />
                        </svg>
                        <span>Interno</span>
                    </a>
                    <p>It is a long established fact that a reader will be distracted lookings.</p>
                    <div className="social-links">
                        <a href="/">
                            <svg width="26" height="26" fill="none" stroke="#292f36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="/">
                            <svg width="26" height="26" fill="none" stroke="#292f36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z"></path>
                            </svg>
                        </a>
                        <a href="/">
                            <svg width="26" height="46" fill="none" stroke="#292f36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <path d="M17.5 6.5h.01"></path>
                            </svg>
                        </a>
                        <a href="/">
                            <svg width="26" height="26" fill="none" stroke="#292f36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <path d="M2 9h4v12H2z"></path>
                                <path d="M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Pages</h4>
                    <ul>
                        <li><a href="/team">Team</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/services">Services</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="/">Kitchen</a></li>
                        <li><a href="/">Living Room</a></li>
                        <li><a href="/">Bathroom</a></li>
                        <li><a href="/">Dinning Hall</a></li>
                        <li><a href="/">Bedroom</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="/">55 East Birchwood Ave. Brooklyn, New York 11201</a></li>
                        <li><a href="https://contact@interno.com">contact@interno.com</a></li>
                        <li><a href="tel:(123) 456 - 7890">(123)456 - 7890</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</p>
            </div>
        </footer>
    )
}

export default Footer