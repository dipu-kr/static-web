import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import LanguageProficiency from "./LanguageProficiency";
import AOS from "aos";

const SolutionRobo = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    AOS.init({
      duration: 450,
      offset: 120,
      easing: "ease",
    });
  }, []);

  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full max-w-[1535px] mx-auto px-[20px] sm:px-[40px] lg:px-[100px] xl:px-[150px]">
        <div className="flex justify-center items-center flex-col py-[30px] lg:py-[50px]">
          <div
            className="flex gap-3 lg:gap-8 flex-col lg:flex-row mb-[35px]"
            data-aos="fade-up"
          >
            <h1 className="flex">
              <span className="text-[26px] lg:text-[36px] font-[600] leading-[46px]">
                Robo
              </span>
              <span>
                <FaPlus className="font-[600] text-[21px] lg:text-[28px]" />
              </span>
            </h1>
            <div className="font-[400] text-[16px] lg:text-[24px] leading-[24px] lg:leading-[35px] text-[#000000] text-justify">
              <p>
                Empower your employees to thrive with Inimble Health's access to
                personalized sessions,
              </p>
              <p className="font-[400] text-[16px] lg:text-[24px] leading-[24px] lg:leading-[35px] text-[#000000]">
                expert consultations, and curated health packs. Dive into a
                wealth of healthand wellness{" "}
              </p>
            </div>
          </div>
          <div className="w-full hidden lg:block" data-aos="fade-up">
            <div className="w-[98%] mx-auto flex justify-between mt-10">
              <button
                className={`text-center py-1 px-5 text-[21px] font-[600] leading-[24px] border-b-2 hover:text-[#1A73E8] ${
                  activeTab === 1
                    ? "text-blue-500 border-[#1A73E8]"
                    : "border-white"
                }`}
                onClick={() => handleTabClick(1)}
              >
                Language Proficiency
              </button>
              <button
                className={`text-center py-1 px-5 text-[21px] font-[600] leading-[24px] border-b-2 hover:text-[#1A73E8] ${
                  activeTab === 2
                    ? "text-blue-500 border-[#1A73E8]"
                    : "border-white"
                }`}
                onClick={() => handleTabClick(2)}
              >
                Cultural Fit Assessment
              </button>
              <button
                className={`text-center py-1 px-5 text-[21px] font-[600] leading-[24px] border-b-2 hover:text-[#1A73E8] ${
                  activeTab === 3
                    ? "text-blue-500 border-[#1A73E8]"
                    : "border-white"
                }`}
                onClick={() => handleTabClick(3)}
              >
                Comparative Analysis
              </button>
            </div>
          </div>
          {/* -----------------components------------ */}
          <div className="w-full" data-aos="fade-up">
            <LanguageProficiency activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionRobo;
