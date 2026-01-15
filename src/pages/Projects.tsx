import React from "react";
import { CollectionIcon } from "@heroicons/react/solid";

const ChessImage = require("../assets/images/chess.png");
const BlueprintImage = require("../assets/images/eaf.png");

const Projects = () => {
  return (
    <div
      id="Projects"
      className="lg:w-1/2 mt-16 pb-24 text-center sm:text-justify mx-4 sm:mx-12 lg:mr-60 lg:ml-60"
    >
      <div className="table">
        <CollectionIcon className="h-5 w-5 mr-4 text-yellow_vs" />
        <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          Projects
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
      </div>
      <div className="mt-6 grid gap-6 text-[#a2aabc] text-lg">
        <div className="rounded-lg border border-[#2f2f2f] bg-[#1b1b1b] p-5 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between">
            <a
              href="https://github.com/josh-yeung/ChessProject"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue_vs text-xl hover:underline"
            >
              <code>Chess</code>
            </a>
          </div>
          <img
            src={ChessImage}
            alt="Chess project preview"
            className="w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] object-contain rounded-md mt-3 border border-[#2f2f2f] bg-[#141414] transition-transform duration-300 hover:scale-[1.015]"
          />
          <code className="block mt-2">
            Built a full-featured chess engine with an AI opponent and custom GUI, designed using UML within an MVC architecture to streamline class interactions and reduce dependencies.
          </code>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs text-lightblue_vs border border-lightblue_vs/30 rounded px-2 py-1 hover:bg-lightblue_vs/10 transition-colors">
              C++
            </span>
            <span className="text-xs text-lightblue_vs border border-lightblue_vs/30 rounded px-2 py-1 hover:bg-lightblue_vs/10 transition-colors">
              X11
            </span>
            <span className="text-xs text-lightblue_vs border border-lightblue_vs/30 rounded px-2 py-1 hover:bg-lightblue_vs/10 transition-colors">
              Git
            </span>
            <span className="text-xs text-lightblue_vs border border-lightblue_vs/30 rounded px-2 py-1 hover:bg-lightblue_vs/10 transition-colors">
              Makefile
            </span>
          </div>
        </div>
        <div className="rounded-lg border border-[#2f2f2f] bg-[#1b1b1b] p-5 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col items-start gap-1">
            <a
              href="https://uwblueprint.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue_vs text-xl hover:underline"
            >
              <code>UW Blueprint</code>
            </a>
            <a
              href="https://github.com/uwblueprint/extend-a-family"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-yellow_vs italic hover:underline"
            >
              <code>Extend a Family (EAF)</code>
            </a>
          </div>
          <img
            src={BlueprintImage}
            alt="UW Blueprint project preview"
            className="w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] object-contain rounded-md mt-3 border border-[#2f2f2f] bg-[#141414] transition-transform duration-300 hover:scale-[1.015]"
          />
          <code className="block mt-2">
            Built a financial-literacy platform for neurodiverse learners, digitizing curriculum materials and meeting AA accessibility standards. 
            The system supports dynamic modules, progress tracking, and admin tooling to update content and monitor learner journeys without developer involvement, and was shipped collaboratively through 2-week Agile sprints with designers and PMs.
          </code>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs text-lightblue_vs border border-lightblue_vs/30 rounded px-2 py-1 hover:bg-lightblue_vs/10 transition-colors">
              React
            </span>
            <span className="text-xs text-lightblue_vs border border-lightblue_vs/30 rounded px-2 py-1 hover:bg-lightblue_vs/10 transition-colors">
              Node.js
            </span>
            <span className="text-xs text-lightblue_vs border border-lightblue_vs/30 rounded px-2 py-1 hover:bg-lightblue_vs/10 transition-colors">
              Firebase
            </span>
            <span className="text-xs text-lightblue_vs border border-lightblue_vs/30 rounded px-2 py-1 hover:bg-lightblue_vs/10 transition-colors">
              MongoDB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
