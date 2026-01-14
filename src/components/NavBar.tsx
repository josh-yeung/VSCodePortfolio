import React from "react";
import tw from "tailwind-styled-components";
import { XIcon } from "@heroicons/react/solid";
import { TAB_CONFIG, TabId } from "../constants/tabs";

const Container = tw.button`
  h-full
  flex
  items-center
  min-w-0
  px-4
  gap-2
  text-sm
  font-medium
  text-gray-300
  hover:bg-[#2d2d2d]
  hover:text-yellow_vs
  border-r
  border-[#2f2f2f]
  border-b-2
  border-b-transparent
  transition-colors
  cursor-pointer
  focus:outline-none
`;

interface Props {
  activeTab: TabId | "";
  setActiveTab: React.Dispatch<React.SetStateAction<TabId | "">>;
  openTabs: TabId[];
  onCloseTab: (tabId: TabId) => void;
  onOpenTab: (tabId: TabId) => void;
  onReorderTabs: (sourceTab: TabId, targetTab: TabId | null) => void;
}

const NavBar: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  openTabs,
  onCloseTab,
  onOpenTab,
  onReorderTabs,
}) => {
  const handleMiddleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    tabId: TabId
  ) => {
    if (event.button === 1) {
      event.preventDefault();
      onCloseTab(tabId);
    }
  };

  const handleDragStart = (
    event: React.DragEvent<HTMLButtonElement>,
    tabId: TabId
  ) => {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/tab-id", tabId);
  };

  const handleDrop = (
    event: React.DragEvent<HTMLButtonElement | HTMLDivElement>,
    targetTab: TabId | null
  ) => {
    event.preventDefault();
    event.stopPropagation();
    const sourceId = event.dataTransfer.getData("text/tab-id") as TabId;
    if (!sourceId || sourceId === targetTab) {
      return;
    }
    onReorderTabs(sourceId, targetTab);
  };

  const allowDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  return (
    <div
      className="flex flex-row h-full w-full overflow-x-auto"
      onDragOver={allowDrop}
      onDrop={(event) => handleDrop(event, null)}
    >
      {openTabs.length ? (
        openTabs.map((tabId) => {
          const tabInfo = TAB_CONFIG[tabId];
          const isActive = activeTab === tabId;

          return (
            <Container
              key={tabId}
              type="button"
              draggable
              onClick={() => setActiveTab(tabId)}
              onMouseDown={(event) => handleMiddleClick(event, tabId)}
              onDragStart={(event) => handleDragStart(event, tabId)}
              onDragOver={allowDrop}
              onDrop={(event) => handleDrop(event, tabId)}
              className={
                isActive
                  ? "bg-[#1e1e1e] text-yellow_vs border-b-2 border-b-yellow_vs"
                  : "text-gray-300"
              }
            >
              <img
                src={tabInfo.icon}
                alt={`${tabInfo.label} icon`}
                className="h-5 w-5"
              />
              <span className="truncate max-w-[120px] sm:max-w-[180px] lg:max-w-none">
                {tabInfo.label}
              </span>
              <XIcon
                className="w-4 h-4 ml-2 text-gray-400 hover:text-white shrink-0"
                onClick={(event) => {
                  event.stopPropagation();
                  onCloseTab(tabId);
                }}
              />
            </Container>
          );
        })
      ) : null}
      {openTabs.length ? (
        <div
          className="w-4 h-full"
          onDragOver={allowDrop}
          onDrop={(event) => handleDrop(event, null)}
        />
      ) : null}
    </div>
  );
};

export default NavBar;
