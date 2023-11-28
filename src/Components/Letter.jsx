import React from "react";
import "../ComponentStyles/Letter.scss";

class Letter extends React.Component {
    handleClick() {
        document.querySelector(".letter").classList.add("hidden");
    }
    render() {
        return (
            <div className="letter" id="letter">
                <div className="container">
                    <h3>In this project may be bugs. Project is in work.</h3>
                    <svg width={28} height={28} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={this.handleClick}>
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </div>
            </div>
        )
    }
}

export default Letter;