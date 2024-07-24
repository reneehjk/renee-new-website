import React from "react";
import { Link } from "react-router-dom";
import home from '../assets/home.png';
import about from '../assets/profile-user.png';
import project from '../assets/invention.png';


const Header = () => {
    return (
        <div className="grid lg:justify-end lg:px-20 justify-center pt-10">
            <div className="flex flex-row gap-10">
                <Link to="/" >
                    <img src={home} alt="home" className="w-8 h-8 hover:scale-110 hover:drop-shadow-md"/>
                </Link>
                <Link to="/about" >
                <img src={about} alt="about" className="w-8 h-8 hover:scale-110 hover:drop-shadow-md"/>
                </Link>
                <Link to="/project" >
                <img src={project} alt="project" className="w-8 h-8 hover:scale-110 hover:drop-shadow-md"/>
                </Link>
            </div>
        </div>
    );
};

export default Header;