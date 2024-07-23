import React from "react";

const Card = ({ imageSrc, title, description }) => {
    return (
        <div 
            className="relative bg-gradient-to-br from-lightBlue to-lightGrey rounded-2xl overflow-hidden shadow-lg flex flex-col items-center w-80 h-90 hover:scale-105 hover:shadow-2xl hover:bg-lightBlue transition-transform duration-300 ease-in-out p-6"
        >
            <div className="font-title text-3xl text-blue mb-2 flex justify-center text-center drop-shadow-lg">
                    {title}
            </div>
            <img className="h-1/2 rounded-full shadow-lg mb-4 transition-shadow duration-300 ease-in-out hover:shadow-xl" src={imageSrc} alt="Card image" />
            <div className="text-center">
                <p className="font-body text-navy text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;
