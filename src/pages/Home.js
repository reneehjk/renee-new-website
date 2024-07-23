import React from "react";
import me from '../assets/me.jpg';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex items-center flex-col bg-background min-h-full p-20 pb-40">
            <div className="relative flex flex-col justify-start items-center w-full max-w-5xl h-auto bg-lightGrey rounded-full drop-shadow-xl p-10" style={{ borderRadius: '50%' }}>
                <div className="flex sm:flex-row flex-col items-center justify-center z-10 text-center space-y-4">
                    <img src={me} alt="me" className="w-60 md:w-60 rounded-full drop-shadow-xl"/>
                    <div className="flex flex-col items-center">
                        <div className="font-title text-5xl md:text-8xl text-navy drop-shadow-xl mb-3">Hello, I'm Renee!</div>
                        <div className="w-11/12 sm:w-3/4 font-body text-base sm:text-sm md:text-sm lg:text-2xl text-blue drop-shadow-lg mb-5">
                            A third-year computer science/AI student at Queen’s University with a passion for digital marketing!
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 font-body text-blue text-base md:text-lg">
                            <Link to='/about' className='bg-background px-4 py-2 rounded-lg hover:scale-105 shadow-inner hover:text-navy hover:drop-shadow-md text-center'>
                                About Me
                            </Link>
                            <Link to='/project' className='bg-background px-4 py-2 rounded-lg hover:scale-105 shadow-inner hover:text-navy hover:drop-shadow-md text-center'>
                                My Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
