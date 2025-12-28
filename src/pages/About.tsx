import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";


const About = () => {
  return (
    <div
      id="About"
      className="flex mx-12 mt-16 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
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

I've had the opportunity to work as a Software Developer at BMO, where I built cloud-based systems on AWS, developed accessible web components, and worked on AI-powered tools including RAG chatbots and multi-agent systems. I enjoy working across the stack, from backend APIs and cloud infrastructure to clean intuitive frontends.

Outside of internships, I'm involved with UW Blueprint, where I help build accessible, real world software for nonprofits. I'm especially interested in using technology to improve inclusion, usability, and user experience 🌱

I enjoy keeping up with today's fast changing tech landscape and turning complex problems into simple, reliable solutions. In my free time, I love to play any racket sport from old to new!

📬 Feel free to reach out, I'm always happy to connect!
          </code>
          <br />
          <br />
          <code>Aenean in mi non leo placerat suscipit a eget odio:</code>
        </div>
      </div>
    </div>
  );
};

export default About;
