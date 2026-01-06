import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-16 mb-4 pb-24 text-justify mx-12 lg:mr-60 lg:ml-60"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap"
          >
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap hover:underline">
            Resume
          </code>
          </a>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4 flex flex-col gap-4">
          <div>
            <code className="text-blue_vs">University of Waterloo</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Bachelor of Computer Science | Waterloo, ON
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • September 2021 - August 2026
            </code>
            <br />
          </div>
          <div>
            <code className="text-blue_vs">Wilfrid Laurier University</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Bachelor of Business Administration | Waterloo, ON
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • September 2021 - August 2026
            </code>
            <br />
          </div>
        </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Experience</code>
          </div>
          <div className="w-3/4">
            <div>
              <code className="text-blue_vs">Software Developer</code>
              <br />
              <code className="italic text-sm text-lightblue_vs">
                Bank of Montreal (BMO) | Toronto, ON
              </code>
              <br />
              <code className="text-xs text-brown_vs">• September 2025 - December 2025</code>
            </div>
            <br />
            <div>
              <code className="text-blue_vs">Cloud Developer</code>
              <br />
              <code className="italic text-sm text-lightblue_vs">
                Bank of Montreal (BMO)| Toronto, ON
              </code>
              <br />
              <code className="text-xs text-brown_vs">• January 2025 - April 2025</code>
            </div>
            <br />
            <div>
              <code className="text-blue_vs">Business Analyst</code>
              <br />
              <code className="italic text-sm text-lightblue_vs">
                Bank of Montreal (BMO) | Toronto, ON
              </code>
              <br />
              <code className="text-xs text-brown_vs">• January 2024 - April 2024</code>
              <br />
            </div>
            <br />
            <div>
              <code className="text-blue_vs">Financial Analyst / Junior Underwriter</code>
              <br />
              <code className="italic text-sm text-lightblue_vs">
              Trisura Guarantee Insurance Company | Toronto, ON
              </code>
              <br />
              <code className="text-xs text-brown_vs">• January 2023 - April 2023</code>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
