import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import LanguageProficiency from "./LanguageProficiency";

const SolutionRobo = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="w-full px-[150px]">
      <div className="flex justify-center items-center flex-col py-10">
        <div className="flex gap-8 mt-5">
          <h1 className="flex text-[20px] font-bold">
            <span>Robo</span>
            <span>
              <FaPlus />
            </span>
          </h1>
          <div className="font-normal">
            <p>
              Empower your employees to thrive with Inimble Health's access to
              personalized sessions,
            </p>
            <p>
              expert consultations, and curated health packs. Dive into a wealth
              of healthand wellness{" "}
            </p>
          </div>
        </div>
        <div className="w-[80%] flex justify-between mt-10">
          <button
            className={`text-center py-1 px-5 text-[16px] font-bold border-b-2 border-white hover:bg-blue-100 ${
              activeTab === 1 ? "text-blue-500 border-blue-500" : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            Language Proficiency
          </button>
          <button
            className={`text-center py-1 px-5 text-[16px] font-bold border-b-2 border-white hover:bg-blue-100 ${
              activeTab === 2 ? "text-blue-500 border-blue-500" : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            Cultural Fit Assessment
          </button>
          <button
            className={`text-center py-1 px-5 text-[16px] font-bold border-b-2 border-white hover:bg-blue-100 ${
              activeTab === 3 ? "text-blue-500 border-blue-500" : ""
            }`}
            onClick={() => handleTabClick(3)}
          >
            Comparative Analysis
          </button>
        </div>
        {/* -----------------components------------ */}
        <div className="w-full">
          <LanguageProficiency activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default SolutionRobo;
