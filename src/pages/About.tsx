import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

const JoshPhoto = require("../assets/images/josh.jpg");
const NyPhoto = require("../assets/images/ny.jpg");
const ParisPhoto = require("../assets/images/paris.jpg");


const About = () => {
  return (
    <div
      id="About"
      className="flex mx-4 sm:mx-12 mt-16 pb-24 lg:mx-60 items-center justify-center lg:w-1/2 text-center sm:text-justify"
    >
      <div className="w-full sm:w-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <img
            src={JoshPhoto}
            alt="Josh portrait"
            className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl object-cover border border-[#333333] ring-1 ring-yellow_vs/30 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-[1.04]"
          />
          <img
            src={ParisPhoto}
            alt="Paris"
            className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl object-cover border border-[#333333] ring-1 ring-yellow_vs/30 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-[1.04]"
          />
          <img
            src={NyPhoto}
            alt="New York"
            className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl object-cover border border-[#333333] ring-1 ring-yellow_vs/30 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-[1.04]"
          />
        </div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
            👋 Hi, I'm Josh! I'm currently in my fifth year studying Computer Science & Business at the University of Waterloo and Wilfrid Laurier University. I'm passionate about building software with real world impact and love working on projects that genuinely help people. 
          </code>
          <br />
          <br />
          <code>
            I've had the opportunity to work as a Software Developer at BMO, where I built cloud-based systems on AWS, developed accessible web components, and worked on AI-powered tools including RAG chatbots and multi-agent systems. I enjoy working across the stack, from backend APIs and cloud infrastructure to clean intuitive frontends.
            Outside of internships, I'm involved with UW Blueprint, where I help build accessible, real world software for nonprofits. I'm especially interested in using technology to improve inclusion, usability, and user experience 🌱
          </code>
          <br />
          <br />
          <code>
            I enjoy keeping up with today's fast changing tech landscape and turning complex problems into simple, reliable solutions. In my free time, I love to play any racket sport from old to new!
          </code>
          <br />
          <br />
          <code>📬 Feel free to reach out, I'm always happy to connect!</code>
        </div>
      </div>
    </div>
  );
};

export default About;
