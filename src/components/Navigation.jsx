import React, { useEffect, useState } from "react";
import "animate.css";
export const Navigation = () => {

    const [menuActive, setMenuActive] = useState(false);

    return (
        <>
            <div className={`menu__nav ${menuActive ? "open-menu " : "hide-menu"}`}>
                <nav>
                    <ul>
                        <li className="logo">Arnoldo</li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Services</li>
                        <li>Contact me</li>
                    </ul>
                </nav>
                <div className="hide-button" onClick={() => setMenuActive(!menuActive)} >
                    <i class="uil uil-arrow-circle-left"></i>
                </div>
            </div>
            <div
                className="menu-btn"
                onClick={() => setMenuActive(!menuActive)}
            >
                <i
                    className={`uil uil-bars ${menuActive && "animate__animated animate__pulse animate__fasteru"} `}
                ></i>
            </div>
            <div className={`${menuActive ? "show-bg" : "hide-bg"} back`}></div>
        </>
    );
};
