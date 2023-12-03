import { useEffect } from "react";

export default function ThemeSwitch() {

    useEffect(() => {
        var icon = document.querySelector(".slider");
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme === "dark") {
            document.body.classList.add("dark");
            icon.classList.toggle("active");
        }
        icon.addEventListener("click", function () {
            document.body.classList.toggle("dark");
            icon.classList.toggle("active")
            let theme = "light";
            if (document.body.classList.contains("dark")) {
                theme = "dark";
            }
            localStorage.setItem("theme", theme);
        });

    })
    return (
        <label className="ui-switch">
            <input type="checkbox" id="theme-switch" />
            <div className="slider">
                <div className="circle"></div>
            </div>
        </label>
    )
}