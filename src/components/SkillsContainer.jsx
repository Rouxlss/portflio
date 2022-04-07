import React from "react";

export const SkillsContainer = () => {
    return (
        <div className="skills-container">
            <p className="skills__text">My Skills</p>
            <div className="skills__cards">
                <div className="skill__card">
                    <img src="./img/nextjs.png" alt="" />
                </div>
                <div className="skill__card">
                    <img src="./img/react.png" alt="" />
                </div>
                <div className="skill__card">
                    <img src="./img/mongodb.png" alt="" />
                </div>
                <div className="skill__card">
                    <img src="./img/php.png" alt="" />
                </div>
                <div className="skill__card">
                    <img src="./img/git.png" alt="" />
                </div>
                <div className="skill__card">
                    <img src="./img/aws.png" alt="" />
                </div>
            </div>
        </div>
    );
};
