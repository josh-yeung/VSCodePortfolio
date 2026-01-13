import React from "react";
import { CollectionIcon } from "@heroicons/react/solid";

const ChessImage = require("../assets/images/chess.png");
const BlueprintImage = require("../assets/images/eaf.png");

const Projects = () => {
  return (
    <div
      id="Projects"
      className="lg:w-1/2 mt-16 pb-24 text-justify mx-12 lg:mr-60 lg:ml-60"
    >
      <div className="table">
        <CollectionIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
        <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          Projects
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
      </div>
      <div className="mt-6 grid gap-6 text-[#a2aabc] text-lg">
        <div className="rounded-lg border border-[#2f2f2f] bg-[#1b1b1b] p-5 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between">
            <code className="text-blue_vs text-xl">Chess</code>
            <code className="text-xs text-brown_vs">2024</code>
          </div>
          <img
            src={ChessImage}
            alt="Chess project preview"
            className="w-full h-108 object-cover rounded-md mt-3 border border-[#2f2f2f]"
          />
          <code className="block mt-2">
            A competitive chess platform with real-time matchmaking, move
            validation, and analysis tools designed for fast, focused play.
          </code>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs text-lightblue_vs border border-lightblue_vs/30 rounded px-2 py-1">
              TypeScript
            </span>
            <span className="text-xs text-lightblue_vs border border-lightblue_vs/30 rounded px-2 py-1">
              React
            </span>
            <span className="text-xs text-lightblue_vs border border-lightblue_vs/30 rounded px-2 py-1">
              WebSockets
            </span>
          </div>
        </div>
        <div className="rounded-lg border border-[#2f2f2f] bg-[#1b1b1b] p-5 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between">
            <code className="text-blue_vs text-xl">UW Blueprint</code>
            <code className="text-xs text-brown_vs">2023</code>
          </div>
          <img
            src={BlueprintImage}
            alt="UW Blueprint project preview"
            className="w-full h-108 object-cover rounded-md mt-3 border border-[#2f2f2f]"
          />
          <code className="block mt-2">
            Built accessible, user-centered software for nonprofits, focusing
            on inclusive UX and reliable delivery for real-world impact.
          </code>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs text-lightblue_vs border border-lightblue_vs/30 rounded px-2 py-1">
              Accessibility
            </span>
            <span className="text-xs text-lightblue_vs border border-lightblue_vs/30 rounded px-2 py-1">
              Product
            </span>
            <span className="text-xs text-lightblue_vs border border-lightblue_vs/30 rounded px-2 py-1">
              Frontend
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
