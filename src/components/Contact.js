import React from "react";

const Contact = () => {
    return (
        <footer className="bg-blue text-lightBlue py-6 px-20 text-center shadow-lg">
            <div className="flex flex-row justify-between mx-20 font-body">
                <a href="https://devpost.com/reneehjkim11" target="_blank" rel="noopener noreferrer" className="drop-shadow-lg hover:text-background">
                    Devpost
                </a>
                <a href="https://www.linkedin.com/in/reneehjkim" target="_blank" rel="noopener noreferrer" className="drop-shadow-lg hover:text-background">
                    LinkedIn
                </a>
                <a href="https://github.com/reneehjk" target="_blank" rel="noopener noreferrer" className="drop-shadow-lg hover:text-background">
                    GitHub
                </a>
                <a href="mailto:reneehjkim11@gmail.com" className="drop-shadow-lg hover:text-background">
                    Email
                </a>
            </div>
        </footer>
    );
};

export default Contact;