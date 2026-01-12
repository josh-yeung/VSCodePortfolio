import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";
import List from "../components/List";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const NextLogo = require("../assets/logos/NextLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const ReduxLogo = require("../assets/logos/ReduxLogo.png");
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


const skills = [
  { name: "JavaScript", logo: JsLogo },
  { name: "C", logo: CLogo},
  { name: "C++", logo: CPlusPlusLogo},
  { name: "HTML", logo: HTMLLogo},
  { name: "CSS", logo: CSSLogo},
  { name: "React", logo: ReactLogo },
  { name: "TypeScript", logo: TypescriptLogo },
  { name: "Python", logo: PythonLogo },
  { name: "Firebase", logo: FirebaseLogo },
  { name: "Nodejs", logo: NodeJSLogo },
  { name: "SQL", logo: SqlLogo },
  { name: "MongoDB", logo: MongoDBLogo },
  { name: "Docker", logo: DockerLogo },
  { name: "Git", logo: GitLogo },
  { name: "Angular", logo: AngularLogo },
  { name: "Selenium", logo: SeleniumLogo },
  { name: "Expressjs", logo: ExpressLogo },
  { name: "AWS", logo: AwsLogo },
  { name: "Figma", logo: FigmaLogo },
];

const Skills = () => {
  return (
    <div
      id="Skills"
      className="flex mx-12 mt-16 pb-24 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Skills
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <List list={skills} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
