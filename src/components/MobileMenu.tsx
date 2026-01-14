import React, { useState } from "react";
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { Disclosure, Transition } from "@headlessui/react";
import { TAB_CONFIG, TAB_ORDER, TabId } from "../constants/tabs";

const MobileMenu = ({ onOpenTab }: { onOpenTab: (tabId: TabId) => void }) => {
  const [showFilesList, setShowFilesList] = useState(true);
  const sectionAnchors: Record<TabId, string> = {
    home: "#home",
    about: "#About",
    projects: "#Projects",
    skills: "#Skills",
    resume: "#Resume",
    contact: "#Contact",
  };

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2b2a2a] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            {open ? (
              <XIcon className="block w-16" aria-hidden="true" />
            ) : (
              <MenuIcon className="block w-16" aria-hidden="true" />
            )}{" "}
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-4 pt-2 pb-4">
              <div className="rounded-lg border border-[#2f2f2f] bg-[#1b1b1b] p-4 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.8)]">
                <div
                  className="mb-3 flex items-center font-bold text-lg text-[#e6f1ff]"
                  onClick={() => setShowFilesList(!showFilesList)}
                >
                  {showFilesList ? (
                    <ChevronDownIcon className="w-6 mr-3" />
                  ) : (
                    <ChevronRightIcon className="w-6 mr-3" />
                  )}
                  Explorer
                </div>
                {showFilesList ? (
                  <div className="flex flex-col">
                    {TAB_ORDER.map((tabId) => {
                      const tab = TAB_CONFIG[tabId];
                      return (
                        <Disclosure.Button
                          key={tabId}
                          as="button"
                          type="button"
                          onClick={() => onOpenTab(tabId)}
                          className="flex items-center gap-3 rounded px-3 py-2 text-[#a2aabc] hover:bg-[#2b2a2a] hover:text-yellow_vs"
                        >
                          <img
                            src={tab.icon}
                            alt={`${tab.label} icon`}
                            className="h-5 w-5"
                          />
                          <span className="text-base">{tab.sidebarLabel}</span>
                        </Disclosure.Button>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default MobileMenu;
