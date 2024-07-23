import React from "react";
import ProjectDisplay from "../components/ProjectDisplay";
import Lovelace from '../assets/Lovelace.png';
import Roomie from '../assets/roomieMatch.png';
import calorie from '../assets/calCalculator.png';
import todo from '../assets/todoList.png';
import Sonder from '../assets/Sonder.png';


const Project = () => {
    return (
        <div className="flex justify-items-center flex-col bg-background">
            <div className="text-center font-title text-navy text-8xl z-10 drop-shadow-md">My Projects</div>
            <div className="absolute w-4/5 h-5/6 bg-lightGrey rounded-full left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 z-0 drop-shadow-xl" style={{ borderRadius: '50%' }}></div>
            <div className="flex flex-row flex-wrap items-stretch justify-center px-20 py-10 gap-20">
                <ProjectDisplay 
                    imageSrc={Lovelace}
                    title="Lovelace Logs"
                    description="A resource to empower women in STEM named after the first ever computer scientist, Ada Lovelace! Created during EmpowHER hacks, and got an honorable mention! Built using React.js and tailwind.css."
                    link1="https://reneehjk.github.io/lovelace-logs/"
                    link2="https://github.com/reneehjk/lovelace-logs" 
                />
                <ProjectDisplay 
                    imageSrc={Roomie}
                    title="RoomieMatch"
                    description="Project created at WaffleHacks that allows people to connect with new roomates! Built using React.js!"
                    link1="https://reneehjk.github.io/roomie-match/"
                    link2="https://github.com/reneehjk/roomie-match" 
                />
                <ProjectDisplay 
                    imageSrc={calorie}
                    title="Calorie Calculator"
                    description="Created this calorie calculator as a personal project to text out arithmetic when using React.js!"
                    link1="https://reneehjk.github.io/calorie-calculator/"
                    link2="https://github.com/reneehjk/calorie-calculator" 
                />
                <ProjectDisplay 
                    imageSrc={todo}
                    title="To-Do List"
                    description="Created a to-do list as my first ever React.js personal project!"
                    link1="https://reneehjk.github.io/Todo-List/"
                    link2="https://github.com/reneehjk/Todo-List"
                />
                <ProjectDisplay 
                    imageSrc={Sonder}
                    title="Sonder."
                    description="First project ever created! A journal that allows users to write down their thoughts, save their entries and use stickers! Created using JavaScript, HTML and CSS. Built during HackHer hackathon!"
                    link1="https://sonderjournal.netlify.app/"
                    link2="https://github.com/reneehjk/Sonder." 
                />
                <div className="flex z-10 self-center font-title text-3xl p-10 ml-5 text-navy drop-shadow-md">More to come...</div>
            </div>
            
        </div>
    );
};

export default Project;