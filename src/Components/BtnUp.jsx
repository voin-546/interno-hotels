import React, { useEffect } from "react";
import "../ComponentStyles/BtnUp.scss";
const BtnUp = () => {
    useEffect(() => {
        window.addEventListener("scroll", function () {
            let btnUp = document.querySelector(".BtnUp")
            if (window.pageYOffset > 375) {
                btnUp.classList.add("scrolled");
            } 
            else {
                btnUp.classList.remove("scrolled");
            }
        })
    })
    return (
        <button className="BtnUp" onClick={() => {window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });}}>
            <svg width={28} height={28} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3.952 11.648a1.2 1.2 0 0 1 0-1.696l7.2-7.2a1.2 1.2 0 0 1 1.696 0l7.2 7.2a1.2 1.2 0 0 1-1.696 1.696L13.2 6.497V20.4a1.2 1.2 0 1 1-2.4 0V6.497l-5.152 5.151a1.2 1.2 0 0 1-1.696 0Z" clipRule="evenodd" />
            </svg>
        </button>
    )
}

export default BtnUp;