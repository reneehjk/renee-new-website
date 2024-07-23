import React from "react";
import Card from '../components/Card';
// photos:
import hackathon from '../assets/pic1.jpg';
import QWIC from '../assets/pic2.png';
import AI from '../assets/pic3.jpg';
import hiphop from '../assets/pic6.jpg';
import skating from '../assets/pic5.jpg';
import cat from '../assets/pic4.jpg';
// resume and cover letter:
import resume from '../assets/resume.pdf'
import coverLetter from '../assets/CoverLetter.pdf'

const About = () => {
    return (
        <div className="flex justify-center flex-col bg-background">
            <div className="absolute w-4/5 h-5/6 bg-lightGrey rounded-full left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 z-0 drop-shadow-xl" style={{ borderRadius: '50%' }}></div>
            <div className="flex justify-center font-title text-8xl text-navy z-10 drop-shadow-md">About Me</div>
            <div className="flex justify-center gap-20 text-lg font-body text-grey mt-10">
                <a href={resume} download className="underline drop-shadow-sm hover:text-blue">Download my resume</a>
                <a href={coverLetter} download className="underline drop-shadow-sm hover:text-blue">Download my cover letter</a>
            </div>
            <div className="flex flex-row flex-wrap gap-20 px-20 pt-5 my-10 justify-center">
                <Card 
                    imageSrc={hackathon}
                    title="Hackathon Enthusiast"
                    description="Throughout my experiences in hackathons and personal projects, I’ve developed my front-end and design skills including learning frameworks such as react.js, tailwind.css and next.js!"
                />
                <Card 
                    imageSrc={QWIC}
                    title="Vice Chair of Marketing @ QWIC"
                    description="As the vice chair of marketing for Queen’s Women in Computing, I gained experience in both participating and leading social media marketing, web development and merchandise creation!"
                />
                <Card 
                    imageSrc={AI}
                    title="Artificial Intelligence Researcher"
                    description="Both my experiences on QMIND as well as being a research assistant in the RISE Lab have allowed me to delve into the complexities of AI, training models and AI ethics."
                />
                <Card 
                    imageSrc={hiphop}
                    title="Avid Hip Hop Dancer"
                    description="As a member of the Casually Cool Dance Crew, we perform and compete in Hip Hop competitions against other universities! It’s taught me a lot about determination and diligence!"
                />
                <Card 
                    imageSrc={skating}
                    title="Competitive Figure Skater"
                    description="Being a previous varsity athlete allowed me to learn the importance of prioritization and scheduling. My discipline had grown stronger throughout that experience!"
                />
                <Card 
                    imageSrc={cat}
                    title="Owner of the Cutest Cat Ever"
                    description="I have a super cute cat named Apollo! He is a Siamese cat and loves food!"
                />
                
            </div>
        </div>
    );
};

export default About;