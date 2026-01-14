import React from "react";
import { TabId } from "../constants/tabs";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

function Header({ onOpenTab }: { onOpenTab: (tabId: TabId) => void }) {
  return (
    <div id="Header" className="mx-4 sm:mx-12 lg:mx-60 pt-16 items-center justify-center lg:w-1/2 text-justify">
      <div className="flex flex-col gap-2 text-center sm:text-left">
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <span className="inline-flex h-2 w-2 rounded-full bg-yellow_vs shadow-[0_0_10px_rgba(255,204,0,0.6)]"></span>
          <code className="text-lightblue_vs tracking-wide">Hey there! My name is</code>
        </div>
        <code className="text-7xl mt-2 bg-gradient-to-r from-[#e6f1ff] via-[#c7d2fe] to-[#a2aabc] text-transparent bg-clip-text drop-shadow-[0_2px_12px_rgba(68,102,153,0.4)]">
          Josh
        </code>
        <code className="text-[#a2aabc] text-lg">
          I like using software to make the world just a little better
        </code>
        <div className="h-px w-28 bg-gradient-to-r from-yellow_vs/80 to-transparent mt-2"></div>
      </div>
      <div className="flex items-center justify-center sm:justify-start gap-6 mt-6">
        <a href="https://github.com/josh-yeung/" aria-label="GitHub">
          <img
            src={GitLogo}
            alt="GitHub logo"
            className="h-8 w-8 hover:scale-110 duration-300"
          />
        </a>
        <a href="https://linkedin.com/in/joshua-yeung/" aria-label="LinkedIn">
          <img
            src={LinkedinLogo}
            alt="LinkedIn logo"
            className="h-8 w-8 hover:scale-110 duration-300"
          />
        </a>
        <a href="mailto:joshyeung126@gmail.com" aria-label="Email">
          <img
            src={MailLogo}
            alt="Email icon"
            className="h-8 w-8 hover:scale-110 duration-300"
          />
        </a>
      </div>
      <div className="flex flex-col sm:flex-row mt-6 gap-4 sm:gap-6 w-full sm:w-2/3">
        <button
          type="button"
          onClick={() => onOpenTab("projects")}
          className="w-full sm:flex-1 border border-lightblue_vs text-lightblue_vs p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs shadow-[0_10px_30px_-15px_rgba(96,165,250,0.6)] text-center"
        >
          <code>My Projects</code>
        </button>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 border border-lightblue_vs text-lightblue_vs p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs shadow-[0_10px_30px_-15px_rgba(96,165,250,0.6)] text-center"
        >
          <code>My Resume</code>
        </a>
      </div>
    </div>
  );
}

export default Header;
