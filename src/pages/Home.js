import React from "react";
import me from '../assets/me.jpg';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="h-screen bg-background">
            <div className="flex flex-col p-10 items-center justify-center">
             <div className="absolute w-4/5 h-3/5 bg-lightGrey rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 drop-shadow-xl" style={{ borderRadius: '50%' }}>
                <div className="flex flex-row justify-center items-center z-10 p-10">
                    <img src={me} alt="me" className="w-80 rounded-lg mx-10 drop-shadow-xl"/>
                    <div className="flex flex-col space-y-5 ml-15">
                        <div className="font-title text-8xl text-navy drop-shadow-xl">Hello, I'm Renee!</div>
                        <div className="font-body text-3xl text-blue drop-shadow-lg">A third year computer science/AI student at Queen’s University with a passion for digital marketing!</div>
                        <div className="flex flex-row gap-20 font-body ml-10 mr-20 text-blue text-xl">
                            <Link to='/about' className='bg-background px-5 py-2 rounded-lg hover:scale-105 shadow-inner hover:text-navy hover:drop-shadow-md'>
                                About Me
                            </Link>
                            <Link to='/project' className='bg-background px-5 py-2 rounded-lg hover:scale-105 shadow-inner hover:text-navy hover:drop-shadow-md'>
                                My Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;
