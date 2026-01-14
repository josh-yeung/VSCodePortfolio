import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";
import List from "../components/List";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");
const CLogo = require("../assets/logos/C_Logo.png");
const CPlusPlusLogo = require("../assets/logos/C++_Logo.png");
const HTMLLogo = require("../assets/logos/HTML5Logo.png");
const CSSLogo = require("../assets/logos/CSSLogo.png");
const GitLogo = require("../assets/logos/GitLogo.png");
const AngularLogo = require("../assets/logos/AngularLogo.png");
const SeleniumLogo = require("../assets/logos/SeleniumLogo.png");
const ExpressLogo = require("../assets/logos/expressLogo.png");
const AwsLogo = require("../assets/logos/AWSLogo.png");
const FigmaLogo = require("../assets/logos/figmaLogo.png");
const LinuxLogo = require("../assets/logos/LinuxLogo.png");
const PostmanLogo = require("../assets/logos/postmanLogo.png");
const JiraLogo = require("../assets/logos/jiraLogo.png");

const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "C", logo: CLogo },
      { name: "C++", logo: CPlusPlusLogo },
      { name: "Python", logo: PythonLogo },
      { name: "JavaScript", logo: JsLogo },
      { name: "TypeScript", logo: TypescriptLogo },
      { name: "HTML", logo: HTMLLogo },
      { name: "CSS", logo: CSSLogo },
      { name: "SQL", logo: SqlLogo },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React", logo: ReactLogo },
      { name: "Angular", logo: AngularLogo },
      { name: "Express.js", logo: ExpressLogo },
      { name: "Selenium", logo: SeleniumLogo },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      { name: "AWS", logo: AwsLogo },
      { name: "Docker", logo: DockerLogo },
      { name: "Node.js", logo: NodeJSLogo },
      { name: "Git/Github", logo: GitLogo },
      { name: "Figma", logo: FigmaLogo },
      { name: "MongoDB", logo: MongoDBLogo },
      { name: "Linux/Bash", logo: LinuxLogo },
      { name: "Firebase", logo: FirebaseLogo },
      { name: "Postman", logo: PostmanLogo },
      { name: "Jira", logo: JiraLogo },
    ],
  },
];

const Skills = () => {
  return (
    <div
      id="Skills"
      className="flex mx-4 sm:mx-12 mt-16 pb-24 lg:mx-60 items-center justify-center lg:w-1/2 text-center sm:text-justify"
    >
      <div className="w-full">
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Skills
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5 space-y-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <code className="text-lightblue_vs text-xl">{group.title}</code>
              <div className="mt-3">
                <List list={group.items} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
