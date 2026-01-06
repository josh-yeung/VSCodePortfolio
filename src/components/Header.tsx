import React from "react";

function Header() {
  return (
    <div id="Header" className="mx-12 lg:mx-60 pt-16 items-center justify-center lg:w-1/2 text-justify">
      <div className="flex flex-col">
        <code className="text-lightblue_vs">Hey there! My name is</code>
        <code className="text-[#e6f1ff] text-7xl mt-5">Josh</code>
      </div>
      <div className="flex flex-row mt-10 space-x-6 w-2/3">
        <button className="flex-1 border border-lightblue_vs text-lightblue_vs p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs">
          <code>My Projects</code>
        </button>
        <button className="flex-1 border border-lightblue_vs text-lightblue_vs p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs">
          <code>My Resume</code>
        </button>
      </div>
    </div>
  );
}

export default Header;
