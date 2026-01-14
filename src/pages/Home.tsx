import React, { useState, useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import SideBar from "../components/SideBar";
import Resume from "./Resume";
import Skills from "./Skills";
import Projects from "./Projects";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { TAB_ORDER, TabId } from "../constants/tabs";

const Home = () => {
  const [activeTab, setActiveTab] = useState<TabId | "">(TAB_ORDER[0]);
  const [openTabs, setOpenTabs] = useState<TabId[]>(TAB_ORDER);
  const [sidebarWidth, setSidebarWidth] = useState(270); // Default width
  const paddedStyle = { paddingLeft: `${sidebarWidth}px` };
  const navBarStyle = {
    marginLeft: `${sidebarWidth}px`,
    width: `calc(100% - ${sidebarWidth}px)`,
  };
  const hasOpenTabs = openTabs.length > 0;

  useEffect(() => {
    const savedWidth = localStorage.getItem("sideBarWidth");
    if (savedWidth) {
      setSidebarWidth(parseInt(savedWidth));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sideBarWidth", sidebarWidth.toString());
  }, [sidebarWidth]);

  const handleOpenTab = (tabId: TabId) => {
    setOpenTabs((prevTabs) =>
      prevTabs.includes(tabId) ? prevTabs : [...prevTabs, tabId]
    );
    setActiveTab(tabId);
  };

  const handleCloseTab = (tabId: TabId) => {
    setOpenTabs((prevTabs) => {
      if (!prevTabs.includes(tabId)) {
        return prevTabs;
      }

      const nextTabs = prevTabs.filter((tab) => tab !== tabId);

      if (activeTab === tabId) {
        const closingIndex = prevTabs.indexOf(tabId);
        const fallback = nextTabs[closingIndex] ?? nextTabs[closingIndex - 1] ?? "";
        setActiveTab(fallback);
      }

      return nextTabs;
    });
  };

  const handleReorderTabs = (sourceTab: TabId, targetTab: TabId | null) => {
    if (sourceTab === targetTab) {
      return;
    }

    setOpenTabs((prevTabs) => {
      const sourceIndex = prevTabs.indexOf(sourceTab);
      if (sourceIndex === -1) {
        return prevTabs;
      }

      const updated = [...prevTabs];
      updated.splice(sourceIndex, 1);

      if (targetTab === null) {
        updated.push(sourceTab);
        return updated;
      }

      const targetIndex = updated.indexOf(targetTab);
      if (targetIndex === -1) {
        updated.push(sourceTab);
        return updated;
      }

      updated.splice(targetIndex, 0, sourceTab);
      return updated;
    });
  };

  return (
    <div id="home" className="App flex h-full">
      <div
        className="bg-[#262526] h-full fixed hidden lg:block"
        style={{ width: `${sidebarWidth}px` }}
      >
        <SideBar
          setWidth={setSidebarWidth}
          width={sidebarWidth}
          onOpenTab={handleOpenTab}
        />
      </div>
      <div className="bg-[#1e1e1e] h-full flex-1 w-full">
        <div className="lg:hidden">
          <MobileMenu onOpenTab={handleOpenTab} />
        </div>
        {hasOpenTabs && (
          <div
            className="bg-[#424042] h-16 hidden lg:block sticky top-0 z-30"
            style={navBarStyle}
          >
            <NavBar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              openTabs={openTabs}
              onCloseTab={handleCloseTab}
              onOpenTab={handleOpenTab}
              onReorderTabs={handleReorderTabs}
            />
          </div>
        )}
        {hasOpenTabs ? (
          <>
            {activeTab === "home" && openTabs.includes("home") && (
              <div style={paddedStyle}>
                <Header onOpenTab={handleOpenTab} />
                <About />
                <Skills />
                <Resume />
                <Projects />
                <Contact />
                
              </div>
            )}
            {activeTab === "about" && openTabs.includes("about") && (
              <div style={paddedStyle}>
                <About />
              </div>
            )}
            {activeTab === "resume" && openTabs.includes("resume") && (
              <div style={paddedStyle}>
                <Resume />
              </div>
            )}
            {activeTab === "projects" && openTabs.includes("projects") && (
              <div style={paddedStyle}>
                <Projects />
              </div>
            )}
            {activeTab === "contact" && openTabs.includes("contact") && (
              <div style={paddedStyle}>
                <Contact />
              </div>
            )}
            {activeTab === "skills" && openTabs.includes("skills") && (
              <div style={paddedStyle}>
                <Skills />
              </div>
            )}
          </>
        ) : (
          <div style={paddedStyle} className="h-full" />
        )}
      </div>
    </div>
  );
};

export default Home;
