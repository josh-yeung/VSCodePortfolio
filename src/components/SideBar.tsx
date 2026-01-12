import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { SIDEBAR_FILES, TabId } from "../constants/tabs";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const SideBar = ({
  setWidth,
  width,
  onOpenTab,
}: {
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  width: number;
  onOpenTab: (tabId: TabId) => void;
}) => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);

  const minWidth = 220;
  const maxWidth = 360;

  const startResizing = (mouseDownEvent: React.MouseEvent) => {
    const handleMouseMove = (mouseMoveEvent: MouseEvent) => {
      const delta = mouseMoveEvent.clientX - mouseDownEvent.clientX;
      const nextWidth = mouseDownEvent.clientX + delta;
      const newWidth = Math.min(maxWidth, Math.max(minWidth, nextWidth));
      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    const savedWidth = localStorage.getItem("sideBarWidth");
    if (savedWidth) {
      const parsedWidth = parseInt(savedWidth, 10);
      const clampedWidth = Math.min(maxWidth, Math.max(minWidth, parsedWidth));
      setWidth(clampedWidth);
    }
  }, [setWidth]);

  return (
    <div className="flex h-full">
      <div className="text-[#a2aabc] text-lg mt-5 flex w-full">
        <div>
          <div
            className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
            onClick={() => SetShowProjectsList(!showProjectsList)}
          >
            {showProjectsList ? (
              <ChevronDownIcon className="w-7 mr-1" />
            ) : (
              <ChevronRightIcon className="w-7 mr-1" />
            )}
            <p>Projects</p>
          </div>
          {showProjectsList ? (
            <>
              <div
                className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
                onClick={() => SetShowWebList(!showWebList)}
              >
                {showWebList ? (
                  <ChevronDownIcon className="w-7 mr-1  ml-5" />
                ) : (
                  <ChevronRightIcon className="w-7 mr-1  ml-5" />
                )}

                <p>Web</p>
              </div>
              {showWebList ? <WebList onOpenTab={onOpenTab} /> : null}
            </>
          ) : null}
          <div className="absolute w-full bottom-10 px-6">
            <div className="flex justify-between">
              <a href="/">
                <img
                  src={GitLogo}
                  alt="Git Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
              <a href="/">
                <img
                  src={LinkedinLogo}
                  alt="Linkedin Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
              <a href="/">
                <img
                  src={MailLogo}
                  alt="Mail Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#262526] h-full border-r border-gray-700 border-opacity-50 hover:border-opacity-100 hover:border-blue-500 w-3 hover:cursor-col-resize"
        onMouseDown={startResizing}
      ></div>
    </div>
  );
};

export default SideBar;

const WebList = ({ onOpenTab }: { onOpenTab: (tabId: TabId) => void }) => (
  <div className="flex flex-col mt-1">
    {SIDEBAR_FILES.map((file) => (
      <button
        type="button"
        key={file.id}
        onClick={() => onOpenTab(file.id)}
        className="ml-12 text-left"
      >
        <div className="flex items-center py-1 pr-2 hover:bg-[#2b2a2a] hover:cursor-pointer rounded">
          <img
            src={file.icon}
            alt={`${file.sidebarLabel} icon`}
            className="h-5 w-5 mr-2 ml-5"
          />
          <p>{file.sidebarLabel}</p>
        </div>
      </button>
    ))}
  </div>
);
