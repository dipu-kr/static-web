import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import LanguageProficiency from "./LanguageProficiency";

const SolutionRobo = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full max-w-[1535px] mx-auto px-[150px]">
        <div className="flex justify-center items-center flex-col py-[50px]">
          <div className="flex gap-8 mb-[35px]">
            <h1 className="flex">
              <span className="text-[36px] font-[600] leading-[46px]">
                Robo
              </span>
              <span>
                <FaPlus className="font-[600] text-[28px]" />
              </span>
            </h1>
            <div className="font-[400] text-[24px] leading-[35px] text-[#000000]">
              <p>
                Empower your employees to thrive with Inimble Health's access to
                personalized sessions,
              </p>
              <p className="font-[400] text-[24px] leading-[35px] text-[#000000]">
                expert consultations, and curated health packs. Dive into a
                wealth of healthand wellness{" "}
              </p>
            </div>
          </div>
          <div className="w-[80%] flex justify-between mt-10">
            <button
              className={`text-center py-1 px-5 text-[21px] font-[600] leading-[30px] border-b-2 hover:text-[#1A73E8] ${
                activeTab === 1
                  ? "text-blue-500 border-[#1A73E8]"
                  : "border-white"
              }`}
              onClick={() => handleTabClick(1)}
            >
              Language Proficiency
            </button>
            <button
              className={`text-center py-1 px-5 text-[21px] font-[600] leading-[30px border-b-2 hover:text-[#1A73E8] ${
                activeTab === 2
                  ? "text-blue-500 border-[#1A73E8]"
                  : "border-white"
              }`}
              onClick={() => handleTabClick(2)}
            >
              Cultural Fit Assessment
            </button>
            <button
              className={`text-center py-1 px-5 text-[21px] font-[600] leading-[30px border-b-2 hover:text-[#1A73E8] ${
                activeTab === 3
                  ? "text-blue-500 border-[#1A73E8]"
                  : "border-white"
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
    </div>
  );
};

export default SolutionRobo;
