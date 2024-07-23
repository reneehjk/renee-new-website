import React from "react";

const ProjectDisplay = ({ imageSrc, title, description, link1, link2 }) => {

    const handleCardClick1 = () => {
        window.open(link1, "_blank", "noopener,noreferrer");
    };

    const handleCardClick2 = () => {
        window.open(link2, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="relative overflow-hidden flex flex-col items-center w-80 h-90 transition-transform duration-300 ease-in-out p-6 bg-gradient-br">
            <img className="flex h-1/2 rounded-lg shadow-lg mb-4 transition-shadow duration-300 ease-in-out hover:shadow-xl justify-self-center" src={imageSrc} alt="Project Image" />
            <div className="flex flex-col justify-between justify-items-center flex-grow text-center">
                <div>
                    <div className="font-title text-3xl text-navy mb-3 drop-shadow-md">
                        {title}
                    </div>
                    <p className="font-body text-blue text-base mb-3">
                        {description}
                    </p>
                </div>
                <div className="flex justify-between mt-auto align-baseline">
                    <button onClick={handleCardClick1} className="font-body font-bold bg-lightBlue px-2 py-1 rounded-md text-navy drop-shadow-sm hover:scale-105 hover:drop-shadow-md">View Project</button>
                    <button onClick={handleCardClick2} className="font-body font-bold bg-lightBlue px-2 py-1 rounded-md text-navy drop-shadow-sm hover:scale-105 hover:drop-shadow-md">View Code</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDisplay;
