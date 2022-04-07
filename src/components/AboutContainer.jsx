import React from "react";
import "animate.css";

export const AboutContainer = () => {
    return (
        <div className="about-container">
            <div className="home__pattern">
                <img src="./img/pattern-26432_960_720.png" alt="" />
            </div>
            <div className="home__img">
                <img src="./img/undraw_version_control_re_mg66.png" alt="" />
            </div>
            <div className="home__info">
                <div className="info__text">
                    <div className="home__name">
                        Hi, i'm <span>Arnoldo</span>
                    </div>
                    <div className="home__description"></div>
                    I'm a Fullstack developer
                </div>
                <button className="btn btn__primary">
                    Know more about me
                </button>
            </div>
            <div className="home__icons ">
                <i class="uil uil-window-grid animate__animated animate__fadeIn"></i>
                <i class="uil uil-database animate__animated animate__fadeIn animate__slow"></i>
                <i class="uil uil-mobile-android animate__animated animate__fadeIn animate__slower"></i>
            </div>
            <div className="experience">

            </div>
        </div>
    );
};
